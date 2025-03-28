import { Buffer } from "buffer";
import {
  CandlestickData,
  ColorType,
  createChart,
  CrosshairMode,
  HistogramData,
  UTCTimestamp,
} from "lightweight-charts";
import { FC, useEffect, useRef } from "react";
import { PreloadedQuery, usePreloadedQuery, useQueryLoader } from "react-relay";
import { graphql } from "relay-runtime";
import { useEdgeSubscription } from "../../services/useNodeSubscription";
import { TradingViewQuery } from "./__generated__/TradingViewQuery.graphql";

const query = graphql`
  query TradingViewQuery(
    $pair: ID!
    $after: Timestamp!
    $before: Timestamp!
    $resolution: String!
  ) {
    node(id: $pair) {
      ... on FinPair {
        address
        candles(after: $after, before: $before, resolution: $resolution) {
          edges {
            cursor
            node {
              id
              open
              close
              high
              low
              volume
              bin
            }
          }
        }
      }
    }
  }
`;

const subscription = graphql`
  subscription TradingViewSubscription($prefix: String!) {
    edge(prefix: $prefix) {
      cursor
      node {
        ... on FinCandle {
          id
          open
          close
          high
          low
          volume
          bin
        }
      }
    }
  }
`;

export const TradingView: FC<{ address?: string }> = ({ address }) => {
  const id = address && Buffer.from(`FinPair:${address}`).toString("base64");
  const [queryRef, loadQuery] = useQueryLoader<TradingViewQuery>(query);

  useEffect(() => {
    if (!id) return;

    loadQuery({
      pair: id,
      after: "2025-02-23T00:00:00Z",
      before: "2025-02-25T00:00:00Z",
      resolution: "60",
    });
  }, [id]);

  useEdgeSubscription(subscription, `${id}:candle`);
  return queryRef ? <Inner queryRef={queryRef} /> : null;
};
const Inner: FC<{ queryRef: PreloadedQuery<TradingViewQuery> }> = ({
  queryRef,
}) => {
  const d = usePreloadedQuery(query, queryRef);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const candles: CandlestickData<UTCTimestamp>[] =
    d.node?.candles?.edges?.map((x) => ({
      open: Number(x?.node?.open) / 10 ** 12,
      close: Number(x?.node?.close) / 10 ** 12,
      high: Number(x?.node?.high) / 10 ** 12,
      low: Number(x?.node?.low) / 10 ** 12,
      time: (new Date(x?.node?.bin).getTime() / 1000) as UTCTimestamp,
    })) || [];

  const volume: HistogramData<UTCTimestamp>[] =
    d.node?.candles?.edges?.map((x) => ({
      value: Number(BigInt(x?.node?.volume || 0) / 10n ** 8n),
      time: (new Date(x?.node?.bin).getTime() / 1000) as UTCTimestamp,
      color: "#26a69a",
    })) || [];

  useEffect(() => {
    if (chartContainerRef.current) {
      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
          });
        }
      };

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: "#161721" },
          textColor: "#71909F",
          fontFamily: "Barlow Semi Condensed",
        },
        grid: {
          vertLines: { color: "#1C1E28" },
          horzLines: { color: "#1C1E28" },
        },
        crosshair: { mode: CrosshairMode.Normal },
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
      });

      chart.priceScale("right").applyOptions({
        borderColor: "#22242f",
      });

      chart.timeScale().applyOptions({
        borderColor: "#22242f",
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#e53935",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#e53935",
        priceFormat: {
          type: "price",
          precision: 4,
          minMove: 0.0001,
        },
      });
      candlestickSeries.setData(candles);

      const markers = [
        {
          time: 1733731200,
          position: "belowBar",
          color: "#60fbd0",
          shape: "circle",
          text: "Buy 0.8297",
        },
        {
          time: 1733756400,
          position: "aboveBar",
          color: "#e53935",
          shape: "circle",
          text: "Sell 0.8899",
        },
        {
          time: 1733855400,
          position: "belowBar",
          color: "#60fbd0",
          shape: "circle",
        },
        {
          time: 1733855400,
          position: "belowBar",
          color: "#60fbd0",
          shape: "circle",
          text: "Buy 0.7411, 0.7506",
        },
      ];
      // @ts-ignore
      candlestickSeries.setMarkers(markers);

      const volumeSeries = chart.addHistogramSeries({
        color: "#26a69a",
        priceFormat: {
          type: "volume",
        },
        priceScaleId: "",
      });
      volumeSeries.priceScale().applyOptions({
        scaleMargins: {
          top: 0.7,
          bottom: 0,
        },
      });
      //chart.timeScale().fitContent();

      volumeSeries.setData(volume);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.remove();
      };
    }
  }, [candles]);

  //console.log(Number(new Date("2024-12-09T15:00:00.000000Z").getTime() / 1000));

  return (
    <div className="trade__graph">
      <div className="trade__graph-controls">
        <nav className="tab-group condensed">
          <a>1m</a>
          <a>15m</a>
          <a className="selected">1h</a>
          <a>4h</a>
          <a>1D</a>
        </nav>
      </div>
      <div className="trade__graph-tv" ref={chartContainerRef} />
    </div>
  );
  {
    /* <Loader className="trade__graph-loader" /> */
  }
};
