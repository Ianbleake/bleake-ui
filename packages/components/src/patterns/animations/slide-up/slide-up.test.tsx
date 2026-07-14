import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SlideUp } from "./index";

describe("SlideUp", () => {
	it("renders children", () => {
		render(
			<SlideUp>
				<span>Sliding content</span>
			</SlideUp>,
		);
		expect(screen.getByText("Sliding content")).toBeInTheDocument();
	});

	it("accepts custom className", () => {
		const { container } = render(
			<SlideUp className="custom-anim">
				<div>Content</div>
			</SlideUp>,
		);
		expect(container.firstChild).toHaveClass("custom-anim");
	});

	it("renders without children", () => {
		const { container } = render(<SlideUp />);
		expect(container).toBeInTheDocument();
	});
});
