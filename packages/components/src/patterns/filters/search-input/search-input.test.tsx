import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SearchInput } from "./index";

describe("SearchInput", () => {
	it("renders with placeholder", () => {
		render(
			<SearchInput
				value={undefined}
				onCommit={() => {
					/* no-op */
				}}
				placeholder="Search items..."
			/>,
		);
		expect(screen.getByPlaceholderText("Search items...")).toBeInTheDocument();
	});

	it("displays icon", () => {
		render(
			<SearchInput
				value=""
				onCommit={() => {
					/* no-op */
				}}
			/>,
		);
		expect(document.querySelector("svg")).toBeInTheDocument();
	});

	it("accepts typed input", async () => {
		const user = userEvent.setup();
		render(
			<SearchInput
				value=""
				onCommit={() => {
					/* no-op */
				}}
				placeholder="Type"
			/>,
		);
		const input = screen.getByPlaceholderText("Type") as HTMLInputElement;
		await user.type(input, "hello");
		expect(input).toHaveValue("hello");
	});

	it("calls onCommit after debounce", async () => {
		const user = userEvent.setup();
		const onCommit = vi.fn();
		render(
			<SearchInput
				value=""
				onCommit={onCommit}
				placeholder="Search"
			/>,
		);
		const input = screen.getByPlaceholderText("Search");
		await user.type(input, "test");
		// Wait for debounce (500ms default)
		await new Promise((resolve) => setTimeout(resolve, 600));
		expect(onCommit).toHaveBeenCalledWith("test");
	});
});
