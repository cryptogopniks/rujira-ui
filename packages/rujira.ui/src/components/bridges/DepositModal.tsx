import { FC, JSXElementConstructor, /* useEffect, */ useState } from "react";
import { Asset, /* Network, */ networkLabel } from "rujira.js";
import { i18n } from "../../i18n";
import { IconDenom } from "../icons/IconDenom";
import { /* AngleDown, */ AngleLeft } from "../icons/Icons";
import { NetworkIcon } from "../icons/NetworkIcon";
import { DecimalInput } from "../inputs/DecimalInput";
import { Input } from "../inputs/Input";
/* import { useClickOutside } from "../../hooks/useClickOutside";
import { BreakPoints, useWindowSize } from "../../hooks/useWindowSize";
import { AnimatePresence, motion } from "motion/react"; */
import { Select } from "../inputs/Select";

export const DepositModal = <T extends string>({
  title = "Deposit",
  assets,
  targets,
  footer,
  selected,
}: {
  title?: string;
  assets: Asset<T>[];
  targets: string[];
  selected?: Asset<T>;
  footer: JSXElementConstructor<{
    selected?: Asset<T>;
    amount: bigint;
    target?: string;
  }>;
}) => {
  const [token, setToken] = useState<string | undefined>(
    selected ? selected.metadata.symbol : undefined
  );
  const [asset, setAsset] = useState<Asset<T> | undefined>(
    selected || undefined
  );

  const tokens = assets
    .reduce(
      (a: string[], v) =>
        a.includes(v.metadata.symbol) ? a : [v.metadata.symbol, ...a],
      []
    )
    .sort((a, b) => a.localeCompare(b));

  const networks = assets
    .filter((a) => a.metadata.symbol === token)
    .sort((a, b) => networkLabel(a.chain).localeCompare(networkLabel(b.chain)));

  return (
    <div className="deposit-modal">
      {(token || asset) && (
        <i18n.button
          className="transparent color-white hover-primary1 flex ai-c mb-1 fs-14 fw-500 pointer"
          onClick={() => {
            if (asset) setAsset(undefined);
            else setToken(undefined);
          }}>
          <AngleLeft className="block w-2 h-2 mr-0.5" />
          Back
        </i18n.button>
      )}
      <h3 className="h3">
        {i18n.t(title)}
        {token && " " + token}
      </h3>
      {!token && <TokenSelect options={tokens} onSelect={setToken} />}
      {token && !asset && (
        <NetworkSelect options={networks} onSelect={setAsset} />
      )}
      {asset && token && (
        <Confirm asset={asset} targets={targets} footer={footer} />
      )}
    </div>
  );
};

const TokenSelect: FC<{ options: string[]; onSelect: (v: string) => void }> = ({
  options,
  onSelect,
}) => {
  const [search, setSearch] = useState<string>("");
  const filtered = options.filter((i) =>
    i.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Input
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <div className="deposit-modal__content row wrap pad-mini mt-1.5">
        {filtered.map((i) => (
          <div className="col-6" key={i}>
            <button
              className="card card--hover-border mt-0.5 mb-0.5 p-2 flex ai-c"
              onClick={() => {
                onSelect(i);
                setSearch("");
              }}>
              <IconDenom denom={i} className="block w-4 h-4" />
              <p className="ml-1 fw-600 color-white">{i}</p>
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <i18n.p className="color-grey my-2 w-full text-center">
            No results found
          </i18n.p>
        )}
      </div>
    </>
  );
};

const NetworkSelect = <T extends string>({
  options,
  onSelect,
}: {
  options: Asset<T>[];
  onSelect: (a: Asset<T>) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  const filtered = options.filter((i) =>
    networkLabel(i.chain).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <i18n.h3 className="flex ai-c fs-20 lh-26 fw-400 mb-2">
        Select Network
      </i18n.h3>
      <Input
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <div className="deposit-modal__content row wrap pad-mini mt-1.5">
        {filtered.map((i) => (
          <div className="col-6" key={i.chain}>
            <button
              className="card card--hover-border mt-0.5 mb-0.5 p-2 flex ai-c"
              onClick={() => {
                onSelect(i);
                setSearch("");
              }}>
              <NetworkIcon network={i.chain} className="block w-4 h-4" />
              <p className="ml-1 fw-600 color-white">{networkLabel(i.chain)}</p>
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <i18n.p className="color-grey my-2 w-full text-center">
            No results found
          </i18n.p>
        )}
      </div>
    </>
  );
};

const Confirm = <T extends string>({
  asset,
  targets,
  footer: Footer,
}: {
  asset: Asset<T>;
  targets: string[];
  footer: JSXElementConstructor<{
    selected?: Asset<T>;
    amount: bigint;
    target?: string;
  }>;
}) => {
  const [amount, setAmount] = useState(0n);
  const [target, setTarget] = useState<string>("");

  return (
    <>
      <h3 className="flex ai-c fs-20 lh-26 fw-400">
        <IconDenom
          denom={asset.metadata.symbol}
          className="block w-3 h-3 mr-1"
        />
        from
        <NetworkIcon
          network={asset.chain}
          className="block w-4 h-4 ml-1 mr-0.5"
        />
        <span className="fw-600">{networkLabel(asset.chain)}</span>
      </h3>
      <DecimalInput
        className="mt-1.5 numeric-input numeric-input--white numeric-input--full condensed"
        amount={amount}
        // 8 decimals - defer to the Msg constructor to convert from the native decimals
        onAmountchange={setAmount}
      />
      <Select
        className="mt-1.5"
        value={target}
        onChange={(e) => setTarget(e.currentTarget.value)}
        label={target ? "Destination" : undefined}>
        <option disabled value="">
          Select Destination...
        </option>
        {targets.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </Select>
      {/* <Destination value={target}>
        {targets.map((x) => (
          <DestinationItem key={x} value={x} onClick={() => setTarget(x)} />
        ))}
      </Destination> */}
      <Footer selected={asset} amount={amount} target={target} />
    </>
  );
};

/* const Destination = ({
  value,
  children,
}: {
  value?: string;
  children?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const ref = useClickOutside(() => setIsOpen(false));

  useEffect(() => {
    setIsOpen(false);
  }, [value]);

  return (
    <a
      className="portfolio__switcher portfolio__switcher--right mt-1.5 w-full"
      onClick={() => setIsOpen(true)}>
      {value ? (
        <>
          <NetworkIcon
            network={value as Network}
            className="block w-2 h-2 mr-1"
          />
          {width > BreakPoints.medium
            ? String(value).substring(0, 12) + "..." + String(value).slice(-12)
            : String(value).substring(0, 8) + "..." + String(value).slice(-8)}
        </>
      ) : (
        <>Select Destination</>
      )}

      <AngleDown className="w-2 h-2 ml-a mr-0" />
      <AnimatePresence>
        {isOpen && children && (
          <motion.nav
            ref={ref}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}>
            {children}
          </motion.nav>
        )}
      </AnimatePresence>
    </a>
  );
};

const DestinationItem = ({
  value,
  onClick,
}: {
  value: string;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick}>
      <div className="flex ai-c w-full">
        <div className="flex">
          <NetworkIcon
            network={value as Network}
            className="block w-3.5 h-3.5 mr-1"
          />
        </div>
        <div className="mr-2 flex dir-c ai-s">
          <span className="fs-12 color-white">
            {value.substring(0, 12) + "..." + value.slice(-12)}
          </span>
          <div
            className="fs-10 mt-0.5 flex ai-c"
            style={{ marginLeft: "-1rem" }}>
          </div>
        </div>
      </div>
    </button>
  );
}; */
