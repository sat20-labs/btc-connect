import dts from "bun-plugin-dts";

await Bun.build({
  entrypoints: ["./src/index.ts", './src/react.ts'],
  outdir: "./dist",
  target: "browser",
  minify: false,
  external: ["react", "react-dom", 'zustand'],
  plugins: [dts()],
});
