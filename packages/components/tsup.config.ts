import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	external: [
		"react",
		"react-dom",
		"@bleakedev/bleake-core",
		"radix-ui",
		"react-router",
		"class-variance-authority",
		"clsx",
		"tailwind-merge",
		"lucide-react",
		"@base-ui/react",
		"cmdk",
		"react-day-picker",
		"input-otp",
		"framer-motion",
		"sonner",
		"date-fns",
	],
	clean: true,
	treeshake: true,
});
