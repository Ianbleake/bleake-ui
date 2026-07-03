import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./index";
import { TableBody } from "./table-body";
import { TableCaption } from "./table-caption";
import { TableCell } from "./table-cell";
import { TableHead } from "./table-head";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";

const meta: Meta<typeof Table> = {
	title: "UI/Table",
	component: Table,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Table>;

const data = [
	{ name: "Ana García", email: "ana@example.com", status: "Active" },
	{ name: "Carlos López", email: "carlos@example.com", status: "Inactive" },
	{ name: "María Torres", email: "maria@example.com", status: "Active" },
];

export const Default: Story = {
	render: () => (
		<Table>
			<TableCaption>List of users</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data.map((row) => (
					<TableRow key={row.email}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.email}</TableCell>
						<TableCell>{row.status}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
};
