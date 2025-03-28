import clsx from "clsx";
import { FC } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { MsgExec } from "rujira.js";
import {
  Button,
  Decimal,
  Numeric,
  useGlobalModalContext,
  useIsTouchDevice,
  useQueryParam,
} from "rujira.ui";
import { TxButton } from "../../common/components/TxButton";
import { RUNE } from "../../services/asset";
import { OrdersFragment$key } from "./__generated__/OrdersFragment.graphql";
import {
  OrdersOrderFragment$data,
  OrdersOrderFragment$key,
} from "./__generated__/OrdersOrderFragment.graphql";

const fragment = graphql`
  fragment OrdersFragment on FinAccount {
    orders {
      edges {
        node {
          filled
          remaining
          ...OrdersOrderFragment
        }
      }
    }
  }
`;

export const Orders: FC<{ k?: OrdersFragment$key; contract?: string }> = ({
  k,
  contract,
}) => {
  const d = useFragment(fragment, k);
  const [tab, setTab] = useQueryParam<"open" | "filled" | "history">(
    "orders",
    "open"
  );

  const open = d?.orders?.edges?.reduce(
    (agg: OrdersOrderFragment$key[], x) =>
      x?.node && x?.node?.remaining !== "0" ? [x.node, ...agg] : agg,
    []
  );
  const filled = d?.orders?.edges?.reduce(
    (agg: OrdersOrderFragment$key[], x) =>
      x?.node && x?.node?.filled !== "0" ? [x.node, ...agg] : agg,
    []
  );

  return (
    <div className="trade__orders">
      <nav className="tabs tabs--sm">
        <a
          className={tab === "open" ? "selected" : ""}
          onClick={() => setTab("open")}>
          Open Orders
          {open ? <i>{open.length}</i> : null}
        </a>
        <a
          className={tab === "filled" ? "selected" : ""}
          onClick={() => setTab("filled")}>
          Filled
          {filled ? <i>{filled.length}</i> : null}
        </a>
        <a
          className={tab === "history" ? "selected" : ""}
          onClick={() => setTab("history")}>
          Order History
        </a>
      </nav>
      {tab === "open" && <OrdersOpen orders={open || []} contract={contract} />}
      {tab === "filled" && (
        <OrdersFilled orders={filled || []} contract={contract} />
      )}
      {tab === "history" && <History />}
    </div>
  );
};

type OrdersList = FC<{ orders: OrdersOrderFragment$key[]; contract?: string }>;

const OrdersOpen: OrdersList = ({ orders, contract }) => {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="trade__orders-table table-sticky table-sticky--left">
      {orders.length > 0 ? (
        <table
          className={clsx({
            "table nowrap": true,
            "table--no-hover": isTouchDevice,
          })}>
          <thead>
            <tr>
              <th className="w-1"></th>
              <th>Date</th>
              {/* <th>Pair</th> */}
              <th className="text-right">Price</th>
              <th className="text-right">Amount</th>
              <th className="text-right">Value</th>
              <th className="text-right">Filled</th>
              <th className="nowrap w-11.5"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, idx) => (
              <OrderOpen key={idx} k={o} contract={contract} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="condensed fs-14 color-grey text-center mt-2">
          There is no trade history for this pair
        </p>
      )}
    </div>
  );
};

const OrdersFilled: OrdersList = ({ orders, contract }) => {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="trade__orders-table table-sticky table-sticky--left">
      {orders.length > 0 ? (
        <table
          className={clsx({
            "table nowrap": true,
            "table--no-hover": isTouchDevice,
          })}>
          <thead>
            <tr>
              <th className="w-1"></th>
              <th>Date</th>
              {/* <th>Pair</th> */}
              <th className="text-right">Price</th>
              <th className="text-right">Amount</th>
              <th className="text-right">Value</th>
              <th className="text-right">Filled</th>
              <th className="w-6"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, idx) => (
              <OrderFilled key={idx} k={o} contract={contract} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="condensed fs-14 color-grey text-center mt-2">
          There is no trade history for this pair
        </p>
      )}
    </div>
  );
};

const orderFragment = graphql`
  fragment OrdersOrderFragment on FinOrder {
    deviation
    filled
    offer
    pair
    remaining
    rate
    side
    type
    updatedAt
  }
`;

type OrderItem = FC<{ k: OrdersOrderFragment$key; contract?: string }>;

const OrderOpen: OrderItem = ({ k, contract }) => {
  const { showModal, hideModal } = useGlobalModalContext();
  const d = useFragment(orderFragment, k);
  const price = d.deviation
    ? { oracle: Number(d.deviation) }
    : { fixed: (Number(d.rate) / 10 ** 12).toFixed(12) };

  const cancelMsg = contract
    ? new MsgExec(RUNE, 0n, contract, {
        order: [[[d.side, price, "0"]], null],
      })
    : null;

  const confirmCancel = () => {
    showModal({
      title: "Cancel Order",
      backgroundClose: true,
      children: (
        <>
          <p>Are you sure you want to cancel this order?</p>
          <div className="modal__footer mt-4 px-3 py-2 text-right">
            <Button
              className="button--grey button--outline"
              onClick={hideModal}
              label="Cancel"
            />
            <TxButton
              className="button ml-1"
              msg={cancelMsg}
              label="Confirm"
              onSuccess={hideModal}
            />
          </div>
        </>
      ),
    });
  };

  const editOrder = () => {
    showModal({
      title: "Edit Order",
      backgroundClose: true,
      children: (
        <>
          <Numeric
            label="Price (USDC)"
            decimals={4}
            amount={0n}
            onChangeAmount={() => {}}
            className="mt-1.5 numeric-input--white"
          />
          <Numeric
            label="Quantity"
            decimals={4}
            amount={0n}
            onChangeAmount={() => {}}
            className="mt-1 numeric-input--white"
          />
          <div className="button-group button-group--no-border mt-1">
            <button>20%</button>
            <button>40%</button>
            <button>60%</button>
            <button>80%</button>
            <button>100%</button>
          </div>
        </>
      ),
    });
  };

  return (
    <tr>
      <td>
        <Label {...d} />
      </td>
      <td>{new Date(d.updatedAt).toLocaleString()}</td>
      <td className="text-right">
        <Price {...d} />
      </td>
      <td className="text-right">
        <Decimal amount={BigInt(d.offer)} />
      </td>
      <td className="text-right">
        <Decimal amount={0n} decimals={6} />
      </td>
      <td className="text-right color-teal">
        <StatusFilled {...d} />
      </td>
      <td>
        <Button
          className="button--xsmall button--grey button--outline mr-0.5"
          label="Edit"
          onClick={editOrder}
        />
        <Button
          className="button--xsmall button--red button--outline"
          label="Cancel"
          onClick={confirmCancel}
        />
      </td>
    </tr>
  );
};

const OrderFilled: OrderItem = ({ k, contract }) => {
  const d = useFragment(orderFragment, k);
  const price = d.deviation
    ? { oracle: Number(d.deviation) }
    : { fixed: (Number(d.rate) / 10 ** 12).toFixed(12) };

  const msg = contract
    ? new MsgExec(RUNE, 0n, contract, {
        order: [[[d.side, price, d.remaining]], null],
      })
    : null;

  return (
    <tr>
      <td>
        <Label {...d} />
      </td>
      <td>{new Date(d.updatedAt).toLocaleString()}</td>
      <td className="text-right">
        <Price {...d} />
      </td>
      <td className="text-right">
        <Decimal amount={BigInt(d.offer)} />
      </td>
      <td className="text-right">
        <Decimal amount={0n} decimals={6} />
      </td>
      <td className="text-right color-teal">
        <StatusFilled {...d} />
      </td>
      <td>
        <TxButton
          className="button--xsmall button--blue button--outline mr-0.5"
          label="Claim"
          hideSimulation
          msg={msg}
        />
      </td>
    </tr>
  );
};

const Label: FC<OrdersOrderFragment$data> = ({ side }) => (
  <div
    className={clsx({
      "tag tag--md": true,
      "tag--red": side === "base",
      "tag--teal": side === "quote",
    })}>
    {side === "base" ? "Sell" : "Buy"}
  </div>
);

const StatusFilled: FC<OrdersOrderFragment$data> = ({ offer, remaining }) => {
  const filled = (Number(offer) - Number(remaining)) / Number(offer);
  return (
    <div
      className={clsx({
        "tag tag--md": true,
        "tag--red": filled < 0.25,
        "tag--orange": filled >= 0.25 && filled < 0.75,
        "tag--teal": filled >= 0.75,
      })}>
      {(filled * 100).toLocaleDecimal(2)}%
    </div>
  );
};

const Price: FC<OrdersOrderFragment$data> = ({ rate, deviation }) => {
  switch (deviation) {
    case null:
    case undefined:
      return <Decimal amount={BigInt(rate)} decimals={12} />;

    default:
      return (
        <>
          <p>
            {Number(deviation) > 0 ? "+" : ""}
            {(Number(deviation) / 100).toLocaleDecimal(4)}%
          </p>
          <Decimal className="color-grey" amount={BigInt(rate)} decimals={12} />
        </>
      );
  }
};

const History = () => {
  const isTouchDevice = useIsTouchDevice();
  // temp
  const orders = [];
  //
  return (
    <div className="trade__orders-table table-sticky table-sticky--left">
      {orders.length > 0 ? (
        <table
          className={clsx({
            "table nowrap": true,
            "table--no-hover": isTouchDevice,
          })}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th className="text-right">Amount</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      ) : (
        <p className="condensed fs-14 color-grey text-center mt-2">
          There is no trade history for this pair
        </p>
      )}
    </div>
  );
};
