import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
} from "react";
const FEE = 50;
const KEY = "refs";
export interface Referral {
  name: string;
  fee: number;
  firstSeen: Date;
}

export interface AffiliateData {
  base: {
    name: string;
    fee: number;
  };
  affiliate?: Referral;
}

type Referrals = Record<string, Referral>;

const load = (): Referrals => {
  const json = localStorage.getItem(KEY) || "{}";
  return JSON.parse(json);
};

const store = (ref: Referral) => {
  const current = load();
  if (!!current[ref.name]) return;
  localStorage.setItem(KEY, JSON.stringify({ ...current, [ref.name]: ref }));
};

const context = createContext<AffiliateData>({
  base: { name: import.meta.env.VITE_AFFILIATE, fee: FEE },
});

export const AffiliateContext: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const aff = q.get("aff");
    const split = aff?.split("-");
    if (split?.length === 2) {
      store({ name: split[0], fee: parseInt(split[1]), firstSeen: new Date() });
    }
  }, []);

  const stored = useMemo(load, []);
  const affiliate = Object.values(stored)
    .sort((a, b) => a.firstSeen.getTime() - b.firstSeen.getTime())
    .at(0);
  return (
    <context.Provider
      value={{
        base: { name: import.meta.env.VITE_AFFILIATE, fee: FEE },
        affiliate,
      }}>
      {children}
    </context.Provider>
  );
};

export const useAffiliate = () => useContext(context);
