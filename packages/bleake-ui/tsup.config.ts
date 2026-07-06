import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm", "cjs"],
	dts: true,
	external: [
		"react",
		"react-dom",
		"@bleakedev/bleake-core",
		"@bleakedev/bleake-components",
		"@bleakedev/bleake-styles",
		"next-themes",
		"radix-ui",
		"class-variance-authority",
		"clsx",
		"tailwind-merge",
		"lucide-react",
		"@base-ui/react",
		"cmdk",
		"react-day-picker",
		"input-otp",
		"sonner",
		"framer-motion",
	],
	clean: true,
	treeshake: true,
});
