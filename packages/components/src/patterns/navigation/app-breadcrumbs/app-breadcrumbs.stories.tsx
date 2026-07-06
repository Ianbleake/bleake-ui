import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { AppBreadcrumbs } from "./index";

/**
 * AppBreadcrumbs renders a back-navigation button and a breadcrumb trail.
 * A MemoryRouter decorator is required because the component calls `useNavigate`
 * from react-router internally.
 */
const meta: Meta<typeof AppBreadcrumbs> = {
	title: "Design System/Patterns/Navigation/AppBreadcrumbs",
	component: AppBreadcrumbs,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
};

export default meta;

type Story = StoryObj<typeof AppBreadcrumbs>;

/** Single-level breadcrumb — current page only (no link). */
export const SingleLevel: Story = {
	args: {
		backRoute: "/",
		config: [{ label: "Campaigns" }],
	},
};

/** Two-level breadcrumb — parent with link and current page. */
export const TwoLevels: Story = {
	args: {
		backRoute: "/campaigns",
		config: [{ label: "Campaigns", href: "/campaigns" }, { label: "Campaign detail" }],
	},
};

/** Three-level breadcrumb — deep navigation trail. */
export const ThreeLevels: Story = {
	args: {
		backRoute: "/campaigns",
		config: [
			{ label: "Dashboard", href: "/" },
			{ label: "Campaigns", href: "/campaigns" },
			{ label: "Spring 2025" },
		],
	},
};
