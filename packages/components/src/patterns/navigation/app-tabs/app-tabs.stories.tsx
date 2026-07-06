import type { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart2Icon, FileTextIcon, UsersIcon } from "lucide-react";
import { AppTabs } from "./index";

type DemoData = {
	message: string;
};

const DEMO_DATA: DemoData = { message: "Tab content rendered here." };

const BASE_CONFIG = [
	{
		label: "Overview",
		value: "overview",
		icon: BarChart2Icon,
		content: (data: DemoData) => (
			<p className="p-4 text-sm text-gray-600">Overview — {data.message}</p>
		),
	},
	{
		label: "Members",
		value: "members",
		icon: UsersIcon,
		content: (data: DemoData) => (
			<p className="p-4 text-sm text-gray-600">Members — {data.message}</p>
		),
	},
	{
		label: "Documents",
		value: "documents",
		icon: FileTextIcon,
		content: (data: DemoData) => (
			<p className="p-4 text-sm text-gray-600">Documents — {data.message}</p>
		),
	},
];

const meta: Meta<typeof AppTabs> = {
	title: "Design System/Patterns/Navigation/AppTabs",
	component: AppTabs,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
	decorators: [
		(Story) => (
			<div className="w-full max-w-2xl">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {
	render: () => (
		<AppTabs
			config={BASE_CONFIG}
			data={DEMO_DATA}
			variant="default"
		/>
	),
};

export const Line: Story = {
	render: () => (
		<AppTabs
			config={BASE_CONFIG}
			data={DEMO_DATA}
			variant="line"
		/>
	),
};

export const Small: Story = {
	render: () => (
		<AppTabs
			config={BASE_CONFIG}
			data={DEMO_DATA}
			variant="default"
			size="sm"
		/>
	),
};

export const ExtraSmall: Story = {
	render: () => (
		<AppTabs
			config={BASE_CONFIG}
			data={DEMO_DATA}
			variant="default"
			size="xs"
		/>
	),
};

export const WithoutIcons: Story = {
	render: () => (
		<AppTabs
			config={BASE_CONFIG.map(({ icon: _icon, ...tab }) => tab)}
			data={DEMO_DATA}
			variant="default"
		/>
	),
};
