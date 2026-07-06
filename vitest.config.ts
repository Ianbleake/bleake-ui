import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: ["./test/setup.ts"],
		include: ["packages/**/*.test.{ts,tsx}"],
		exclude: [
			"**/node_modules/**",
			"**/dist/**",
			"**/storybook-static/**",
			"**/.turbo/**",
		],
	},
	resolve: {
		alias: {
			"@bleakedev/bleake-core": path.resolve(__dirname, "./packages/core/src"),
			"@bleakedev/bleake-components": path.resolve(__dirname, "./packages/components/src"),
		},
	},
});