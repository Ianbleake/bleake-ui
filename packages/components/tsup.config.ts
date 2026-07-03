import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	external: ["react", "react-dom", "@bleakedev/bleake-core"],
	clean: true,
	treeshake: true,
});