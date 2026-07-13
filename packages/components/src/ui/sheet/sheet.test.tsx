import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Sheet } from "./index";
import { SheetContent } from "./sheet-content";
import { SheetTrigger } from "./sheet-trigger";

describe("Sheet", () => {
	it("renders trigger", () => {
		render(
			<Sheet>
				<SheetTrigger>Open sheet</SheetTrigger>
				<SheetContent>Sheet body</SheetContent>
			</Sheet>,
		);
		expect(screen.getByText("Open sheet")).toBeInTheDocument();
	});

	it("does not show content when closed", () => {
		render(
			<Sheet>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent>Hidden body</SheetContent>
			</Sheet>,
		);
		expect(screen.queryByText("Hidden body")).not.toBeInTheDocument();
	});

	it("opens content when trigger is clicked", async () => {
		const user = userEvent.setup();
		render(
			<Sheet>
				<SheetTrigger>Open</SheetTrigger>
				<SheetContent>Visible body</SheetContent>
			</Sheet>,
		);
		await user.click(screen.getByText("Open"));
		expect(screen.getByText("Visible body")).toBeInTheDocument();
	});
});