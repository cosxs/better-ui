import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import react from "ultracite/oxlint/react";
import shadcn from "ultracite/oxlint/shadcn";
import tanstack from "ultracite/oxlint/tanstack";

export default defineConfig({
  extends: [core, react, tanstack, shadcn],
  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    ".agents/**",
    "src/routeTree.gen.ts",
  ],
  jsPlugins: shadcn.jsPlugins,
  options: {
    typeAware: true,
    typeCheck: true,
  },
});
