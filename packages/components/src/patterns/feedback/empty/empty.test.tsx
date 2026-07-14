import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileIcon } from "lucide-react";
import { describe, expect, it, vi } from "vitest";
import { Empty } from "./index";

describe("Empty", () => {
	it("renders title and description", () => {
		render(
			<Empty
				title="No results"
				description="Try adjusting your filters"
			/>,
		);
		expect(screen.getByText("No results")).toBeInTheDocument();
		expect(screen.getByText("Try adjusting your filters")).toBeInTheDocument();
	});

	it("renders icon when provided", () => {
		render(
			<Empty
				title="Empty"
				icon={FileIcon}
			/>,
		);
		expect(document.querySelector("svg")).toBeInTheDocument();
	});

	it("renders action button when provided", () => {
		render(
			<Empty
				title="No items"
				action={{
					label: "Create one",
					onClick: () => {
						/* no-op */
					},
				}}
			/>,
		);
		expect(screen.getByText("Create one")).toBeInTheDocument();
	});

	it("calls action onClick when button is clicked", async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		render(
			<Empty
				title="No items"
				action={{ label: "Add", onClick }}
			/>,
		);
		await user.click(screen.getByText("Add"));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it("renders without title or description", () => {
		const { container } = render(<Empty />);
		expect(container).toBeInTheDocument();
	});
});
