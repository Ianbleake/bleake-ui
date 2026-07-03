import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./index";
import { TabsContent } from "./tabs-content";
import { TabsList } from "./tabs-list";
import { TabsTrigger } from "./tabs-trigger";

const meta: Meta<typeof Tabs> = {
	title: "UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue="account">
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">Account settings content</TabsContent>
			<TabsContent value="password">Password settings content</TabsContent>
		</Tabs>
	),
};
