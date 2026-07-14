import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Popover } from "./index";
import { PopoverContent } from "./popover-content";
import { PopoverTrigger } from "./popover-trigger";

describe("Popover", () => {
	it("renders trigger", () => {
		render(
			<Popover>
				<PopoverTrigger asChild>
					<button type="button">Open</button>
				</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		);
		expect(screen.getByText("Open")).toBeInTheDocument();
	});

	it("does not show content when closed", () => {
		render(
			<Popover>
				<PopoverTrigger asChild>
					<button type="button">Open</button>
				</PopoverTrigger>
				<PopoverContent>Hidden content</PopoverContent>
			</Popover>,
		);
		expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
	});

	it("opens content when trigger is clicked", async () => {
		const user = userEvent.setup();
		render(
			<Popover>
				<PopoverTrigger asChild>
					<button type="button">Open</button>
				</PopoverTrigger>
				<PopoverContent>Visible content</PopoverContent>
			</Popover>,
		);
		await user.click(screen.getByText("Open"));
		expect(screen.getByText("Visible content")).toBeInTheDocument();
	});
});
