import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";
import { Input } from "./index";

describe("Input", () => {
	it("renders with placeholder", () => {
		render(<Input placeholder="Enter text" />);
		expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
	});

	it("updates value when typed in", async () => {
		const user = userEvent.setup();
		render(<Input placeholder="Type here" />);
		const input = screen.getByPlaceholderText("Type here");
		await user.type(input, "hello");
		expect(input).toHaveValue("hello");
	});

	it("does not accept input when disabled", async () => {
		const user = userEvent.setup();
		render(<Input disabled placeholder="Disabled" />);
		const input = screen.getByPlaceholderText("Disabled") as HTMLInputElement;
		expect(input).toBeDisabled();
		await user.type(input, "text");
		expect(input).toHaveValue("");
	});

	it("supports controlled mode", async () => {
		const user = userEvent.setup();
		function Controlled() {
			const [value, setValue] = useState<string>("");
			return (
				<Input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder="controlled"
					data-testid="controlled"
				/>
			);
		}
		render(<Controlled />);
		const input = screen.getByTestId("controlled");
		await user.type(input, "world");
		expect(input).toHaveValue("world");
	});

	it("forwards ref to the input element", () => {
		const ref = { current: null };
		render(<Input ref={ref} placeholder="ref" />);
		expect(ref.current).toBeInstanceOf(HTMLInputElement);
	});
});