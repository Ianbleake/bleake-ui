import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./index";

describe("Badge", () => {
	it("renders children text", () => {
		render(<Badge>New</Badge>);
		expect(screen.getByText("New")).toBeInTheDocument();
	});

	it("applies default variant classes", () => {
		render(<Badge>Default</Badge>);
		const badge = screen.getByText("Default");
		expect(badge.className).toContain("bg-primary");
	});

	it("applies secondary variant", () => {
		render(<Badge variant="secondary">Secondary</Badge>);
		const badge = screen.getByText("Secondary");
		expect(badge.className).toContain("bg-orange-50");
	});

	it("applies destructive variant", () => {
		render(<Badge variant="destructive">Error</Badge>);
		const badge = screen.getByText("Error");
		expect(badge.className).toContain("bg-destructive/10");
	});

	it("applies outline variant", () => {
		render(<Badge variant="outline">Outline</Badge>);
		const badge = screen.getByText("Outline");
		expect(badge.className).toContain("border-border");
	});

	it("applies success variant", () => {
		render(<Badge variant="success">Success</Badge>);
		const badge = screen.getByText("Success");
		expect(badge.className).toContain("bg-green-500/15");
	});

	it("applies warning variant", () => {
		render(<Badge variant="warning">Warning</Badge>);
		const badge = screen.getByText("Warning");
		expect(badge.className).toContain("bg-amber-500/15");
	});

	it("accepts custom className merged with variants", () => {
		render(<Badge className="custom-class">Custom</Badge>);
		const badge = screen.getByText("Custom");
		expect(badge.className).toContain("custom-class");
	});
});