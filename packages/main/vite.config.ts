import inject from "@rollup/plugin-inject";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import relay from "vite-plugin-relay";

const branch = process.env.VERCEL_GIT_BRANCH || process.env.NETWORK || "dev";

// https://vitejs.dev/config/
export default defineConfig({
  mode: branch,
  optimizeDeps: {
    esbuildOptions: {
      keepNames: true, // Optional: Avoid function name mangling
    },
  },
  plugins: [
    inject({
      Buffer: ["buffer", "Buffer"],
      exclude: [
        "**/signers/cosmos/rpc/comet38/encodings.ts",
        "**/signers/cosmos/types/varint.ts",
        "**/signers/cosmos/proto-signing/registry.ts",
        "**/signers/cosmos/types/helpers.ts",
        "**/rujira.js/src/msgs/exec.ts",
      ],
    }),
    react(),
    relay,
    visualizer({ filename: "bundle.html", open: true }),
  ],
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
