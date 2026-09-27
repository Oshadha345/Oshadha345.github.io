import { cpSync } from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Legacy originals stay in public/ as a backup but are no longer referenced, so they are not deployed.
const excludedFromDeploy = ["images"];

function copyPublicExceptLegacy() {
  let root, outDir;
  return {
    name: "copy-public-except-legacy",
    apply: "build",
    configResolved(config) {
      root = path.resolve(config.root, "public");
      outDir = path.resolve(config.root, config.build.outDir);
    },
    writeBundle() {
      const skip = excludedFromDeploy.map((dir) => path.join(root, dir));
      cpSync(root, outDir, { recursive: true, filter: (src) => !skip.some((dir) => src === dir || src.startsWith(dir + path.sep)) });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyPublicExceptLegacy()],
  build: {
    outDir: "docs",
    copyPublicDir: false,
    chunkSizeWarningLimit: 800,
  },
});
