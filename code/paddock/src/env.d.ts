/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_BACKEND_URL: string;
  readonly PUBLIC_PADDOCK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}