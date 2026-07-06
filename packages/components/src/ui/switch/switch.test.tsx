import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./index";

describe("Switch", () => {
	it("renders unchecked by default", () => {
		render(<Switch />);
		const sw = screen.getByRole("switch");
		expect(sw).toBeInTheDocument();
		expect(sw).toHaveAttribute("data-state", "unchecked");
	});

	it("toggles state when clicked", async () => {
		const user = userEvent.setup();
		function Controlled() {
			const [checked, setChecked] = useState<boolean>(false);
			return <Switch checked={checked} onCheckedChange={setChecked} />;
		}
		render(<Controlled />);
		const sw = screen.getByRole("switch");
		expect(sw).toHaveAttribute("data-state", "unchecked");
		await user.click(sw);
		expect(sw).toHaveAttribute("data-state", "checked");
	});

	it("calls onCheckedChange with new value", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		render(<Switch onCheckedChange={onChange} />);
		await user.click(screen.getByRole("switch"));
		expect(onChange).toHaveBeenCalledWith(true);
	});

	it("does not toggle when disabled", async () => {
		const user = userEvent.setup();
		render(<Switch disabled />);
		const sw = screen.getByRole("switch");
		expect(sw).toBeDisabled();
		await user.click(sw);
		expect(sw).toHaveAttribute("data-state", "unchecked");
	});

	it("renders in small size", () => {
		render(<Switch size="sm" />);
		const sw = screen.getByRole("switch");
		expect(sw).toHaveAttribute("data-size", "sm");
	});
});