import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";
import { Label } from "./index";

describe("Label", () => {
	it("renders children text", () => {
		render(<Label>Email</Label>);
		expect(screen.getByText("Email")).toBeInTheDocument();
	});

	it("associates with input via htmlFor", () => {
		render(
			<>
				<Label htmlFor="test-input">Field</Label>
				<input
					id="test-input"
					type="text"
				/>
			</>,
		);
		const label = screen.getByText("Field");
		expect(label).toHaveAttribute("for", "test-input");
	});

	it("clicking label focuses associated input", async () => {
		const user = userEvent.setup();
		function WithLabel() {
			const [focused, setFocused] = useState<boolean>(false);
			return (
				<>
					<Label htmlFor="lbl">Click me</Label>
					<input
						id="lbl"
						type="text"
						onFocus={() => setFocused(true)}
						data-testid={focused ? "focused" : "not-focused"}
					/>
				</>
			);
		}
		render(<WithLabel />);
		await user.click(screen.getByText("Click me"));
		expect(screen.getByTestId("focused")).toBeInTheDocument();
	});
});
