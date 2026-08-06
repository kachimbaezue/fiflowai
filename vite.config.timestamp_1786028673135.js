// vite.config.ts
import { defineConfig } from "vite";
import { getViteConfig } from "@tanstack/react-start/config";
var vite_config_default = defineConfig(
  getViteConfig({
    react: {},
    tsconfigPaths: true
  })
);
export {
  vite_config_default as default
};
