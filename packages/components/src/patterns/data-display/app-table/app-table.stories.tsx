import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, User } from "lucide-react";
import { TableCell } from "../../../ui/table/table-cell";
import { TableRow } from "../../../ui/table/table-row";
import { AppTable } from "./index";

type DemoUser = {
	id: string;
	name: string;
	email: string;
	status: string;
};

const DEMO_USERS: DemoUser[] = [
	{ id: "1", name: "Ana García", email: "ana.garcia@example.com", status: "Active" },
	{ id: "2", name: "Carlos López", email: "carlos.lopez@example.com", status: "Inactive" },
	{ id: "3", name: "María Rodríguez", email: "maria.rodriguez@example.com", status: "Active" },
];

const HEADERS: AppTableHeader[] = [
	{ label: "Name", icon: User },
	{ label: "Email", icon: Mail },
	{ label: "Status" },
];

const meta: Meta<typeof AppTable> = {
	title: "Design System/Patterns/Data Display/AppTable",
	component: AppTable,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof AppTable>;

export const WithData: Story = {
	render: () => (
		<AppTable<DemoUser>
			headers={HEADERS}
			elements={DEMO_USERS}
			getRowId={(user) => user.id}
			renderRow={(user) => (
				<TableRow key={user.id}>
					<TableCell>{user.name}</TableCell>
					<TableCell>{user.email}</TableCell>
					<TableCell>{user.status}</TableCell>
				</TableRow>
			)}
		/>
	),
};

export const EmptyState: Story = {
	render: () => (
		<AppTable<DemoUser>
			headers={HEADERS}
			elements={[]}
			getRowId={(user) => user.id}
			renderRow={(user) => (
				<TableRow key={user.id}>
					<TableCell>{user.name}</TableCell>
					<TableCell>{user.email}</TableCell>
					<TableCell>{user.status}</TableCell>
				</TableRow>
			)}
			empty={{
				icon: User,
				title: "No users found",
				description: "There are no users matching your criteria.",
			}}
		/>
	),
};

export const LoadingState: Story = {
	render: () => (
		<AppTable<DemoUser>
			headers={HEADERS}
			elements={undefined}
			isLoading
			getRowId={(user) => user.id}
			renderRow={(user) => (
				<TableRow key={user.id}>
					<TableCell>{user.name}</TableCell>
					<TableCell>{user.email}</TableCell>
					<TableCell>{user.status}</TableCell>
				</TableRow>
			)}
		/>
	),
};
