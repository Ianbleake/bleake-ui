import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AccordionContent } from "./accordion-content";
import { AccordionItem } from "./accordion-item";
import { AccordionTrigger } from "./accordion-trigger";
import { Accordion } from "./index";

describe("Accordion", () => {
	it("renders trigger elements", () => {
		render(
			<Accordion>
				<AccordionItem value="item-1">
					<AccordionTrigger>Section 1</AccordionTrigger>
					<AccordionContent>Content 1</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Section 2</AccordionTrigger>
					<AccordionContent>Content 2</AccordionContent>
				</AccordionItem>
			</Accordion>,
		);
		expect(screen.getByText("Section 1")).toBeInTheDocument();
		expect(screen.getByText("Section 2")).toBeInTheDocument();
	});

	it("expands content when trigger is clicked", async () => {
		const user = userEvent.setup();
		render(
			<Accordion>
				<AccordionItem value="item-1">
					<AccordionTrigger>Section 1</AccordionTrigger>
					<AccordionContent>Content 1</AccordionContent>
				</AccordionItem>
			</Accordion>,
		);
		expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
		await user.click(screen.getByText("Section 1"));
		expect(screen.getByText("Content 1")).toBeInTheDocument();
	});

	it("opens by default with defaultValue", () => {
		render(
			<Accordion defaultValue="item-1">
				<AccordionItem value="item-1">
					<AccordionTrigger>Section 1</AccordionTrigger>
					<AccordionContent>Content 1</AccordionContent>
				</AccordionItem>
			</Accordion>,
		);
		expect(screen.getByText("Content 1")).toBeInTheDocument();
	});

	it("allows multiple open with type=multiple", async () => {
		const user = userEvent.setup();
		render(
			<Accordion type="multiple">
				<AccordionItem value="item-1">
					<AccordionTrigger>Section 1</AccordionTrigger>
					<AccordionContent>Content 1</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger>Section 2</AccordionTrigger>
					<AccordionContent>Content 2</AccordionContent>
				</AccordionItem>
			</Accordion>,
		);
		await user.click(screen.getByText("Section 1"));
		await user.click(screen.getByText("Section 2"));
		expect(screen.getByText("Content 1")).toBeInTheDocument();
		expect(screen.getByText("Content 2")).toBeInTheDocument();
	});
});
