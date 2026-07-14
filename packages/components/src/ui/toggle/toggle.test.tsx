import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toggle } from "./index";

describe("Toggle", () => {
	it("renders unchecked by default", () => {
		render(<Toggle>Toggle me</Toggle>);
		expect(screen.getByRole("button")).toHaveAttribute("data-state", "off");
	});

	it("toggles state when clicked", async () => {
		const user = userEvent.setup();
		render(<Toggle>Toggle me</Toggle>);
		const toggle = screen.getByRole("button");
		await user.click(toggle);
		expect(toggle).toHaveAttribute("data-state", "on");
	});

	it("calls onPressedChange when clicked", async () => {
		const user = userEvent.setup();
		const onPressedChange = vi.fn();
		render(<Toggle onPressedChange={onPressedChange}>Toggle</Toggle>);
		await user.click(screen.getByRole("button"));
		expect(onPressedChange).toHaveBeenCalledWith(true);
	});

	it("does not toggle when disabled", async () => {
		const user = userEvent.setup();
		render(<Toggle disabled>Disabled</Toggle>);
		const toggle = screen.getByRole("button");
		expect(toggle).toBeDisabled();
		await user.click(toggle);
		expect(toggle).toHaveAttribute("data-state", "off");
	});
});
