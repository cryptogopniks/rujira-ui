/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_SOCKET: string;
  readonly VITE_ROUTES_ENABLED?: string;
  readonly VITE_AFFILIATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
