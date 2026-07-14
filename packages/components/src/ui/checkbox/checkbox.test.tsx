import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./index";

describe("Checkbox", () => {
	it("renders unchecked by default", () => {
		render(<Checkbox />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "unchecked");
	});

	it("toggles state when clicked", async () => {
		const user = userEvent.setup();
		render(<Checkbox />);
		const cb = screen.getByRole("checkbox");
		await user.click(cb);
		expect(cb).toHaveAttribute("data-state", "checked");
	});

	it("calls onCheckedChange with new value", async () => {
		const user = userEvent.setup();
		const onChange = vi.fn();
		render(<Checkbox onCheckedChange={onChange} />);
		await user.click(screen.getByRole("checkbox"));
		expect(onChange).toHaveBeenCalledWith(true);
	});

	it("does not toggle when disabled", async () => {
		const user = userEvent.setup();
		render(<Checkbox disabled />);
		const cb = screen.getByRole("checkbox");
		expect(cb).toBeDisabled();
		await user.click(cb);
		expect(cb).toHaveAttribute("data-state", "unchecked");
	});

	it("renders checked when defaultChecked", () => {
		render(<Checkbox defaultChecked />);
		expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked");
	});
});
