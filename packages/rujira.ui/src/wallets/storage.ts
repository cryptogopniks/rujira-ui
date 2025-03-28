import { Network } from "rujira.js";
import { Provider } from "./providers/types";

const STORAGE = window.localStorage;
const KEY_SELECTED = `rujira-accounts-selected-${import.meta.env.MODE}`;
const KEY_CONNECTED = `rujira-accounts-connected-${import.meta.env.MODE}`;

/**
 * Fetches the persisted Account
 */
export const loadSelected = ():
  | { provider: Provider; network: Network }
  | undefined => {
  const stored = STORAGE.getItem(KEY_SELECTED);
  if (!stored) return undefined;
  const parsed = JSON.parse(stored);

  if (
    typeof parsed == "object" &&
    "network" in parsed &&
    Object.values(Network).includes(parsed.network)
  ) {
    return parsed;
  } else {
    throw new Error(`Invalid store ${stored}`);
  }
};

/**
 * Persists a selected account
 */
export const saveSelected = (provider: Provider, network: Network): void => {
  STORAGE.setItem(KEY_SELECTED, JSON.stringify({ provider, network }));
};

/**
 * Clears the persisted Account
 */
export const clearSelected = (): void => {
  STORAGE.removeItem(KEY_SELECTED);
};

export const loadProviders = (): Provider[] => {
  const stored: Record<Provider, boolean> = JSON.parse(
    STORAGE.getItem(KEY_CONNECTED) || "{}"
  );

  return Object.entries(stored)
    .filter(([_, v]) => v)
    .map(([k]) => k as Provider);
};

export const addProvider = (p: Provider): void => {
  const stored: Record<Provider, boolean> = JSON.parse(
    STORAGE.getItem(KEY_CONNECTED) || "{}"
  );
  STORAGE.setItem(KEY_CONNECTED, JSON.stringify({ ...stored, [p]: true }));
};

export const removeProvider = (p: Provider): void => {
  const stored: Record<Provider, boolean> = JSON.parse(
    STORAGE.getItem(KEY_CONNECTED) || "{}"
  );
  const { [p]: _d, ...rest } = stored;
  STORAGE.setItem(KEY_CONNECTED, JSON.stringify(rest));
};

export const clearProviders = (): void => {
  STORAGE.removeItem(KEY_CONNECTED);
};
