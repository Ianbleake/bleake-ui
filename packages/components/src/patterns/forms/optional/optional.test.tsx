import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Optional } from "./index";

describe("Optional", () => {
	it("renders Opcional text", () => {
		render(<Optional />);
		expect(screen.getByText("Opcional")).toBeInTheDocument();
	});

	it("renders as a span", () => {
		const { container } = render(<Optional />);
		expect(container.querySelector("span")).toBeInTheDocument();
	});

	it("has uppercase styling", () => {
		const { container } = render(<Optional />);
		expect(container.querySelector("span")?.className).toContain("uppercase");
	});
});