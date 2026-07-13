import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Collapsible } from "./index";
import { CollapsibleContent } from "./collapsible-content";
import { CollapsibleTrigger } from "./collapsible-trigger";

describe("Collapsible", () => {
	it("renders trigger", () => {
		render(
			<Collapsible>
				<CollapsibleTrigger>Toggle</CollapsibleTrigger>
				<CollapsibleContent>Hidden</CollapsibleContent>
			</Collapsible>,
		);
		expect(screen.getByText("Toggle")).toBeInTheDocument();
	});

	it("does not show content when closed", () => {
		render(
			<Collapsible>
				<CollapsibleTrigger>Toggle</CollapsibleTrigger>
				<CollapsibleContent>Hidden content</CollapsibleContent>
			</Collapsible>,
		);
		expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
	});

	it("opens content when trigger is clicked", async () => {
		const user = userEvent.setup();
		render(
			<Collapsible>
				<CollapsibleTrigger>Toggle</CollapsibleTrigger>
				<CollapsibleContent>Visible content</CollapsibleContent>
			</Collapsible>,
		);
		await user.click(screen.getByText("Toggle"));
		expect(screen.getByText("Visible content")).toBeInTheDocument();
	});

	it("shows content when defaultOpen", () => {
		render(
			<Collapsible defaultOpen>
				<CollapsibleTrigger>Toggle</CollapsibleTrigger>
				<CollapsibleContent>Visible by default</CollapsibleContent>
			</Collapsible>,
		);
		expect(screen.getByText("Visible by default")).toBeInTheDocument();
	});
});