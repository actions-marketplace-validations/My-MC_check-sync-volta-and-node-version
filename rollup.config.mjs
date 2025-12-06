import path from "path";
import { fileURLToPath } from "url";

import { swc } from "rollup-plugin-swc3";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import rollupPluginLicense from "rollup-plugin-license";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
  input: "src/main.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
  },
  treeshake: "smallest",
  plugins: [
    swc(),
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".node", ".ts"],
      exportConditions: ["node"],
    }),
    commonjs(),
    terser(),
    rollupPluginLicense({
      thirdParty: { output: path.join(__dirname, "dist", "licenses.txt") },
    }),
  ],
};
