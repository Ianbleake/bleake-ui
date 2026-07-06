import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Label } from "../label";
import { RadioGroup } from "./index";
import { RadioGroupItem } from "./radio-group-item";

describe("RadioGroup", () => {
	it("renders multiple radio items", () => {
		render(
			<RadioGroup defaultValue="a">
				<RadioGroupItem
					value="a"
					id="ra"
				/>
				<Label htmlFor="ra">A</Label>
				<RadioGroupItem
					value="b"
					id="rb"
				/>
				<Label htmlFor="rb">B</Label>
			</RadioGroup>,
		);
		expect(screen.getByLabelText("A")).toBeInTheDocument();
		expect(screen.getByLabelText("B")).toBeInTheDocument();
	});

	it("checks the selected item", () => {
		render(
			<RadioGroup defaultValue="b">
				<RadioGroupItem
					value="a"
					id="ra"
				/>
				<Label htmlFor="ra">A</Label>
				<RadioGroupItem
					value="b"
					id="rb"
				/>
				<Label htmlFor="rb">B</Label>
			</RadioGroup>,
		);
		expect(screen.getByLabelText("A")).toHaveAttribute("data-state", "unchecked");
		expect(screen.getByLabelText("B")).toHaveAttribute("data-state", "checked");
	});

	it("calls onValueChange when selecting", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		render(
			<RadioGroup onValueChange={onChange}>
				<RadioGroupItem
					value="x"
					id="rx"
				/>
				<Label htmlFor="rx">X</Label>
				<RadioGroupItem
					value="y"
					id="ry"
				/>
				<Label htmlFor="ry">Y</Label>
			</RadioGroup>,
		);
		await user.click(screen.getByLabelText("Y"));
		expect(onChange).toHaveBeenCalledWith("y");
	});

	it("only one item can be checked at a time", async () => {
		const user = userEvent.setup();
		function Controlled() {
			const [value, setValue] = useState<string>("x");
			return (
				<RadioGroup
					value={value}
					onValueChange={setValue}
				>
					<RadioGroupItem
						value="x"
						id="rx"
					/>
					<Label htmlFor="rx">X</Label>
					<RadioGroupItem
						value="y"
						id="ry"
					/>
					<Label htmlFor="ry">Y</Label>
				</RadioGroup>
			);
		}
		render(<Controlled />);
		expect(screen.getByLabelText("X")).toHaveAttribute("data-state", "checked");
		expect(screen.getByLabelText("Y")).toHaveAttribute("data-state", "unchecked");
		await user.click(screen.getByLabelText("Y"));
		expect(screen.getByLabelText("Y")).toHaveAttribute("data-state", "checked");
		expect(screen.getByLabelText("X")).toHaveAttribute("data-state", "unchecked");
	});

	it("does not allow selecting disabled items", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		render(
			<RadioGroup onValueChange={onChange}>
				<RadioGroupItem
					value="x"
					id="rx"
					disabled
				/>
				<Label htmlFor="rx">X</Label>
			</RadioGroup>,
		);
		await user.click(screen.getByLabelText("X"));
		expect(onChange).not.toHaveBeenCalled();
	});
});
