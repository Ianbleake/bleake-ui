import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { InputOTP } from "./index";

describe("InputOTP", () => {
	it("renders without crashing", () => {
		const { container } = render(<InputOTP maxLength={6} />);
		expect(container.querySelector("[data-slot='input-otp']")).toBeInTheDocument();
	});

	it("renders with custom className", () => {
		const { container } = render(
			<InputOTP maxLength={4} className="custom-otp" />,
		);
		expect(container.querySelector("[data-slot='input-otp']")?.className).toContain("custom-otp");
	});
});