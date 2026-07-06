import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { TablePagination } from "./index";

const meta: Meta<typeof TablePagination> = {
	title: "Design System/Patterns/Navigation/TablePagination",
	component: TablePagination,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
	decorators: [
		(Story) => (
			<div className="w-full max-w-xl">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof TablePagination>;

/** Interactive — page navigation only, no page size selector. */
export const PageNavigationOnly: Story = {
	render: () => {
		const [page, setPage] = useState<number>(1);

		return (
			<TablePagination
				page={page}
				totalPages={8}
				onPageChange={setPage}
			/>
		);
	},
};

/** Interactive — with page size selector. */
export const WithPageSizeSelector: Story = {
	render: () => {
		const [page, setPage] = useState<number>(1);
		const [pageSize, setPageSize] = useState<number>(10);

		return (
			<TablePagination
				page={page}
				totalPages={12}
				onPageChange={setPage}
				pageSize={pageSize}
				onPageSizeChange={(nextSize) => {
					setPageSize(nextSize);
					setPage(1);
				}}
			/>
		);
	},
};

/** First page — previous button disabled. */
export const FirstPage: Story = {
	render: () => {
		const [page, setPage] = useState<number>(1);

		return (
			<TablePagination
				page={page}
				totalPages={5}
				onPageChange={setPage}
			/>
		);
	},
};

/** Last page — next button disabled. */
export const LastPage: Story = {
	render: () => {
		const [page, setPage] = useState<number>(5);

		return (
			<TablePagination
				page={page}
				totalPages={5}
				onPageChange={setPage}
			/>
		);
	},
};

/** Single page — both navigation buttons disabled. */
export const SinglePage: Story = {
	render: () => {
		const [page, setPage] = useState<number>(1);

		return (
			<TablePagination
				page={page}
				totalPages={1}
				onPageChange={setPage}
				pageSize={20}
				onPageSizeChange={() => undefined}
			/>
		);
	},
};
