import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TooltipProvider } from "../../ui/tooltip/tooltip-provider";
import { TruncatedText } from "./index";

describe("TruncatedText", () => {
	it("renders the provided text", () => {
		render(
			<TooltipProvider>
				<TruncatedText text="Hello world" />
			</TooltipProvider>,
		);
		expect(screen.getByText("Hello world")).toBeInTheDocument();
	});

	it("renders as a span element", () => {
		render(
			<TooltipProvider>
				<TruncatedText text="Hello" />
			</TooltipProvider>,
		);
		const span = screen.getByText("Hello");
		expect(span.tagName).toBe("SPAN");
	});

	it("applies truncate class", () => {
		render(
			<TooltipProvider>
				<TruncatedText text="Some text" />
			</TooltipProvider>,
		);
		const span = screen.getByText("Some text");
		expect(span.className).toContain("truncate");
	});

	it("accepts custom className", () => {
		render(
			<TooltipProvider>
				<TruncatedText text="Custom" className="text-sm" />
			</TooltipProvider>,
		);
		const span = screen.getByText("Custom");
		expect(span.className).toContain("text-sm");
	});
});