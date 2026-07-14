import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from "./index";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableHead } from "./table-head";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";

describe("Table", () => {
	it("renders table with header and body", () => {
		render(
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>John</TableCell>
						<TableCell>john@test.com</TableCell>
					</TableRow>
				</TableBody>
			</Table>,
		);
		expect(screen.getByText("Name")).toBeInTheDocument();
		expect(screen.getByText("Email")).toBeInTheDocument();
		expect(screen.getByText("John")).toBeInTheDocument();
		expect(screen.getByText("john@test.com")).toBeInTheDocument();
	});

	it("renders table element with data-slot", () => {
		const { container } = render(<Table />);
		expect(container.querySelector("[data-slot='table']")).toBeInTheDocument();
	});

	it("renders container with overflow wrapper", () => {
		const { container } = render(<Table />);
		expect(container.querySelector("[data-slot='table-container']")).toBeInTheDocument();
	});

	it("accepts custom className", () => {
		const { container } = render(<Table className="custom-table" />);
		expect(container.querySelector("[data-slot='table']")?.className).toContain("custom-table");
	});
});
