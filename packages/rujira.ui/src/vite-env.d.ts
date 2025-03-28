/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_CHAIN_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
