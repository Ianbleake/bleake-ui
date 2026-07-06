import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "./index";

describe("Separator", () => {
	it("renders with horizontal orientation by default", () => {
		render(<Separator />);
		const separator = document.querySelector("[data-slot='separator']");
		expect(separator).toBeInTheDocument();
		expect(separator).toHaveAttribute("data-orientation", "horizontal");
	});

	it("renders with vertical orientation", () => {
		render(<Separator orientation="vertical" />);
		const separator = document.querySelector("[data-slot='separator']");
		expect(separator).toHaveAttribute("data-orientation", "vertical");
	});

	it("is decorative by default (no aria role)", () => {
		render(<Separator />);
		const separator = document.querySelector("[data-slot='separator']");
		expect(separator).not.toHaveAttribute("role", "separator");
	});

	it("renders as semantic separator when decorative is false", () => {
		render(<Separator decorative={false} />);
		const separator = document.querySelector("[data-slot='separator']");
		expect(separator).toHaveAttribute("role", "separator");
	});

	it("accepts custom className", () => {
		render(<Separator className="my-custom-class" />);
		const separator = document.querySelector("[data-slot='separator']");
		expect(separator?.className).toContain("my-custom-class");
	});
});