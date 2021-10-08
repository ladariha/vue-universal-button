import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { name } from "./package.json";

export default defineConfig({
  optimizeDeps: {
    exclude: ["vue-demi"],
  },
  plugins: [vue()],
  build: {
    lib: {
      name,
      entry: "src/index.ts",
    },
    rollupOptions: {
      external: ["vue", "vue-demi"],
      output: {
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
        },
      },
    },
  },
});
