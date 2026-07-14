import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InfoCard } from "./index";

describe("InfoCard", () => {
	it("renders trigger element", () => {
		render(
			<InfoCard>
				<span>Info content</span>
			</InfoCard>,
		);
		expect(document.querySelector("[data-slot='hover-card-trigger']")).toBeInTheDocument();
	});

	it("renders without crashing", () => {
		const { container } = render(
			<InfoCard>
				<span>Content</span>
			</InfoCard>,
		);
		expect(container).toBeInTheDocument();
	});

	it("accepts size prop", () => {
		const { container } = render(
			<InfoCard size="sm">
				<span>X</span>
			</InfoCard>,
		);
		expect(container).toBeInTheDocument();
	});
});
