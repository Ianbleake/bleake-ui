import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TablePagination } from "./index";

describe("TablePagination", () => {
	it("renders with current page and total pages", () => {
		render(
			<TablePagination
				page={1}
				totalPages={5}
				onPageChange={() => {}}
			/>,
		);
		expect(screen.getByText(/1/)).toBeInTheDocument();
		expect(screen.getByText(/5/)).toBeInTheDocument();
	});

	it("calls onPageChange when next is clicked", async () => {
		const user = userEvent.setup();
		const onPageChange = vi.fn();
		render(
			<TablePagination
				page={1}
				totalPages={5}
				onPageChange={onPageChange}
			/>,
		);
		const nextButton = screen.getByLabelText(/next|siguiente|chevronright/i) ?? screen.getAllByRole("button").pop();
		expect(nextButton).toBeDefined();
		await user.click(nextButton);
		expect(onPageChange).toHaveBeenCalled();
	});

	it("disables previous button on first page", () => {
		render(
			<TablePagination
				page={1}
				totalPages={5}
				onPageChange={() => {}}
			/>,
		);
		const buttons = screen.getAllByRole("button");
		const prevButton = buttons[0];
		expect(prevButton).toBeDisabled();
	});

	it("disables next button on last page", () => {
		render(
			<TablePagination
				page={5}
				totalPages={5}
				onPageChange={() => {}}
			/>,
		);
		const buttons = screen.getAllByRole("button");
		const nextButton = buttons[buttons.length - 1];
		expect(nextButton).toBeDisabled();
	});
});