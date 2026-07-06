import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./index";

describe("Button", () => {
	it("renders children text", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
	});

	it("calls onClick when clicked", async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Click</Button>);
		await user.click(screen.getByRole("button"));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it("does not call onClick when disabled", async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		render(
			<Button
				disabled
				onClick={onClick}
			>
				Disabled
			</Button>,
		);
		await user.click(screen.getByRole("button"));
		expect(onClick).not.toHaveBeenCalled();
	});

	it("renders as a child element when asChild is true", () => {
		render(
			<Button asChild>
				<a href="/test">Link Button</a>
			</Button>,
		);
		const link = screen.getByRole("link", { name: "Link Button" });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/test");
	});

	it("applies variant classes", () => {
		render(<Button variant="destructive">Delete</Button>);
		const button = screen.getByRole("button");
		expect(button.className).toContain("bg-destructive");
	});

	it("applies size classes", () => {
		const { rerender } = render(<Button size="sm">Small</Button>);
		expect(screen.getByRole("button").className).toContain("h-7");

		rerender(<Button size="lg">Large</Button>);
		expect(screen.getByRole("button").className).toContain("h-11");
	});
});
