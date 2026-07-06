import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
	stories: ["../packages/components/src/**/*.stories.@(ts|tsx)"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-docs",
		"@storybook/addon-a11y",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve?.alias,
				"@bleakedev/bleake-core": path.resolve(dirname, "../packages/core/src"),
				"@bleakedev/bleake-components": path.resolve(dirname, "../packages/components/src"),
			};
		}
		return config;
	},
};

export default config;
