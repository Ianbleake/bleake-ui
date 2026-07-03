import type { Meta, StoryObj } from "@storybook/react-vite";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbLink } from "./breadcrumb-link";
import { BreadcrumbList } from "./breadcrumb-list";
import { BreadcrumbPage } from "./breadcrumb-page";
import { BreadcrumbSeparator } from "./breadcrumb-separator";
import { Breadcrumb } from "./index";

const meta: Meta<typeof Breadcrumb> = {
	title: "UI/Breadcrumb",
	component: Breadcrumb,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink>Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink>Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Candidates</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
};
