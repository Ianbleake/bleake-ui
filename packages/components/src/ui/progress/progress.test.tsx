import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./index";

describe("Progress", () => {
	it("renders without crashing with a value", () => {
		const { container } = render(<Progress value={50} />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("renders indeterminate when value is null", () => {
		const { container } = render(<Progress value={null} />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("accepts custom className", () => {
		const { container } = render(
			<Progress
				value={50}
				className="custom-class"
			/>,
		);
		expect(container.firstChild).toHaveClass("custom-class");
	});

	it("renders 0% without crashing", () => {
		const { container } = render(<Progress value={0} />);
		expect(container.firstChild).toBeInTheDocument();
	});

	it("renders 100% without crashing", () => {
		const { container } = render(<Progress value={100} />);
		expect(container.firstChild).toBeInTheDocument();
	});
});
