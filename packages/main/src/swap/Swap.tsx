import { FC, Suspense, useMemo } from "react";
import { Helmet } from "react-helmet";
import { useFragment, useLazyLoadQuery } from "react-relay";
import { Tooltip } from "react-tooltip";
import { graphql } from "relay-runtime";
import { Icons, useAffiliate } from "rujira.ui";
import { SwapAccountFragment$key } from "./__generated__/SwapAccountFragment.graphql";
import { SwapQuoteQuery } from "./__generated__/SwapQuoteQuery.graphql";
import { SwapThorchainFragment$key } from "./__generated__/SwapThorchainFragment.graphql";
import { InputsBalancesFragment$key } from "./components/__generated__/InputsBalancesFragment.graphql";
import { InputsFragment$key } from "./components/__generated__/InputsFragment.graphql";
import { Actions } from "./components/Actions";
import { Context, useSwapContext } from "./components/Context";
import { InputFrom, InputTo } from "./components/Inputs";
import { Quote, QuoteContainer } from "./components/Quote";

const query = graphql`
  query SwapQuoteQuery(
    $fromAsset: AssetString!
    $toAsset: AssetString!
    $amount: Bigint!
    $affiliate: [String!]
    $affiliateBps: [Int!]
    $destination: Address
    $streamingInterval: Int
    $streamingQuantity: Bigint
  ) {
    thorchain {
      quote(
        fromAsset: $fromAsset
        toAsset: $toAsset
        amount: $amount
        affiliate: $affiliate
        affiliateBps: $affiliateBps
        destination: $destination
        streamingInterval: $streamingInterval
        streamingQuantity: $streamingQuantity
      ) @catch {
        expectedAssetOut {
          amount
        }
        ...ActionsFragment
        ...QuoteFragment
        ...InputsQuoteFragment
      }
    }
  }
`;

const SwapThorchainFragment = graphql`
  fragment SwapThorchainFragment on Thorchain {
    ...InputsFragment
    ...ContextFragment
  }
`;

export const SwapAccountFragment = graphql`
  fragment SwapAccountFragment on Layer1Account {
    id
    ...InputsBalancesFragment
  }
`;

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Swap</title>
      <meta
        name="description"
        content="Swap tokens at the best available rate."
      />
      <meta
        name="og:description"
        content="Swap tokens at the best available rate."
      />
      <meta
        name="twitter:description"
        content="Swap tokens at the best available rate."
      />
    </Helmet>
  );
};

export const Swap: FC<{
  t?: SwapThorchainFragment$key;
  a?: SwapAccountFragment$key;
}> = ({ t, a }) => {
  const tc = useFragment(SwapThorchainFragment, t);

  return (
    <Context k={tc || undefined}>
      <Meta />
      <Content a={a} t={t} />
      <Tooltip id="swap-tip" className="tooltip" float={true} />
    </Context>
  );
};

const Content: FC<{
  a?: SwapAccountFragment$key;
  t?: SwapThorchainFragment$key;
}> = ({ a, t }) => {
  const account = useFragment(SwapAccountFragment, a);
  const tc = useFragment(SwapThorchainFragment, t);

  return (
    <div className="rujira__main rujira__main--gradient swap">
      <div className="rujira__inner--pad">
        <div className="rujira__inner">
          <h1 className="h1">Swap</h1>
          <h2 className="fs-24 lh-32 fw-400 color-white">
            Swap tokens at the best available rate.
          </h2>

          <div className="flex ai-s wrap mt-6">
            <InputFrom r={tc || undefined} q={account || undefined} />
            <Suspense
              fallback={
                <Fallback b={account || undefined} i={tc || undefined} />
              }>
              <Inner b={account || undefined} i={tc || undefined} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

const Fallback: FC<{
  i?: InputsFragment$key;
  b?: InputsBalancesFragment$key;
}> = ({ i, b }) => {
  return (
    <>
      <div className="swap__switch">
        <Icons.ArrowRightLeft />
      </div>
      <InputTo r={i} q={b} />
      <QuoteContainer>
        <Quote />
        <Actions />
      </QuoteContainer>
    </>
  );
};

const Inner: FC<{
  i?: InputsFragment$key;
  b?: InputsBalancesFragment$key;
}> = ({ i, b }) => {
  const {
    fromAsset,
    targetAsset,
    fromAmountQuote,
    destination,
    setSwap,
    toAsset,
  } = useSwapContext();
  const aff = useAffiliate();
  const affiliate = aff.affiliate
    ? [aff.base.name, aff.affiliate.name]
    : [aff.base.name];
  const affiliateBps = aff.affiliate
    ? [aff.base.fee, aff.affiliate.fee]
    : [aff.base.fee];

  const params = useMemo(
    () => ({
      amount: fromAmountQuote.toString(),
      fromAsset: fromAsset?.asset || "",
      toAsset: targetAsset?.asset || "",
      affiliate,
      affiliateBps,
      destination: destination?.address,
      streamingInterval: 1,
      streamingQuantity: "0",
    }),
    [fromAmountQuote, fromAsset, targetAsset, destination]
  );

  const q = useLazyLoadQuery<SwapQuoteQuery>(query, params, {
    fetchPolicy: "store-and-network",
  });

  return (
    <>
      <div
        className="swap__switch"
        onClick={() => {
          setSwap(toAsset, fromAsset);
        }}>
        <Icons.ArrowRightLeft />
      </div>

      <InputTo r={i} q={b} k={q.thorchain?.quote} />
      <QuoteContainer>
        <Quote k={q.thorchain?.quote} />
        <Actions k={q.thorchain?.quote} />
      </QuoteContainer>
    </>
  );
};
