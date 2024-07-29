import path from "path";
import { fileURLToPath } from "url";
import WasmPackPlugin from "@wasm-tool/wasm-pack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: path.resolve(__dirname, "./wasm"),
        outDir: path.resolve(__dirname, "./wasm/pkg"),
      }),
    );
    config.experiments = {
      ...config.experiments,
      syncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

export default nextConfig;
