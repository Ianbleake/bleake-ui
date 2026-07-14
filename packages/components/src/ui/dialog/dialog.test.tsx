import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";
import { Dialog } from "./index";

describe("Dialog", () => {
	it("does not show content when closed", () => {
		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<DialogTitle>Dialog title</DialogTitle>
					<DialogDescription>Dialog description</DialogDescription>
				</DialogContent>
			</Dialog>,
		);
		expect(screen.queryByText("Dialog title")).not.toBeInTheDocument();
	});

	it("shows content when trigger is clicked", async () => {
		const user = userEvent.setup();
		render(
			<Dialog>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<DialogTitle>Dialog title</DialogTitle>
					<DialogDescription>Dialog description</DialogDescription>
				</DialogContent>
			</Dialog>,
		);
		await user.click(screen.getByText("Open"));
		expect(screen.getByText("Dialog title")).toBeInTheDocument();
	});

	it("calls onOpenChange when toggled", async () => {
		const user = userEvent.setup();
		const onOpenChange = vi.fn();
		render(
			<Dialog onOpenChange={onOpenChange}>
				<DialogTrigger>Open</DialogTrigger>
				<DialogContent>
					<DialogTitle>Title</DialogTitle>
				</DialogContent>
			</Dialog>,
		);
		await user.click(screen.getByText("Open"));
		expect(onOpenChange).toHaveBeenCalledWith(true);
	});

	it("renders with default open", () => {
		render(
			<Dialog defaultOpen>
				<DialogContent>
					<DialogTitle>Open by default</DialogTitle>
				</DialogContent>
			</Dialog>,
		);
		expect(screen.getByText("Open by default")).toBeInTheDocument();
	});
});
