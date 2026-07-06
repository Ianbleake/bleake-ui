import type { Meta, StoryObj } from "@storybook/react-vite";
import { BulkUploadTable } from "./index";

const COLUMNS: BulkUploadColumn[] = [
	{ key: "first_name", label: "First Name", kind: "text", required: true },
	{ key: "last_name", label: "Last Name", kind: "text", required: true },
	{ key: "email", label: "Email", kind: "email", required: true },
	{ key: "phone", label: "Phone", kind: "phone" },
	{
		key: "status",
		label: "Status",
		kind: "select",
		options: [
			{ value: "active", label: "Active" },
			{ value: "inactive", label: "Inactive" },
		],
	},
];

const VALID_ROWS: BulkUploadParsedRow[] = [
	{
		index: 1,
		data: {
			first_name: "Ana",
			last_name: "García",
			email: "ana@example.com",
			phone: "+54 11 1234-5678",
			status: "active",
		},
		errors: [],
	},
	{
		index: 2,
		data: {
			first_name: "Carlos",
			last_name: "López",
			email: "carlos@example.com",
			phone: "",
			status: "inactive",
		},
		errors: [],
	},
];

const ROWS_WITH_ERRORS: BulkUploadParsedRow[] = [
	{
		index: 1,
		data: { first_name: "", last_name: "García", email: "not-an-email", phone: "", status: "" },
		errors: [
			{ column: "first_name", message: "First name is required" },
			{ column: "email", message: "Invalid email format" },
		],
	},
	{
		index: 2,
		data: {
			first_name: "Carlos",
			last_name: "López",
			email: "carlos@example.com",
			phone: "",
			status: "active",
		},
		errors: [],
	},
];

const meta: Meta<typeof BulkUploadTable> = {
	title: "Design System/Patterns/Data Display/BulkUploadTable",
	component: BulkUploadTable,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof BulkUploadTable>;

export const ValidRows: Story = {
	render: () => (
		<BulkUploadTable
			columns={COLUMNS}
			rows={VALID_ROWS}
			onRowChange={() => undefined}
			onConfirm={() => undefined}
			onCancel={() => undefined}
			isSubmitting={false}
			errors={new Map()}
		/>
	),
};

export const WithValidationErrors: Story = {
	render: () => (
		<BulkUploadTable
			columns={COLUMNS}
			rows={ROWS_WITH_ERRORS}
			onRowChange={() => undefined}
			onConfirm={() => undefined}
			onCancel={() => undefined}
			isSubmitting={false}
			errors={new Map()}
		/>
	),
};

export const Submitting: Story = {
	render: () => (
		<BulkUploadTable
			columns={COLUMNS}
			rows={VALID_ROWS}
			onRowChange={() => undefined}
			onConfirm={() => undefined}
			onCancel={() => undefined}
			isSubmitting
			errors={new Map()}
		/>
	),
};
