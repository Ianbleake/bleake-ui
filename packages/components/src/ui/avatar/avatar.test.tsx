import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./index";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarImage } from "./avatar-image";

describe("Avatar", () => {
	it("renders fallback when no image", () => {
		render(
			<Avatar>
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>,
		);
		expect(screen.getByText("JD")).toBeInTheDocument();
	});

	it("renders with image src", () => {
		render(
			<Avatar>
				<AvatarImage src="https://i.pravatar.cc/100?img=1" alt="avatar" />
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>,
		);
		expect(screen.getByText("JD")).toBeInTheDocument();
	});

	it("applies size variant", () => {
		const { container } = render(
			<Avatar size="sm">
				<AvatarFallback>S</AvatarFallback>
			</Avatar>,
		);
		expect(container.querySelector("[data-slot='avatar']")).toHaveAttribute("data-size", "sm");
	});

	it("accepts custom className", () => {
		const { container } = render(
			<Avatar className="custom-avatar">
				<AvatarFallback>X</AvatarFallback>
			</Avatar>,
		);
		expect(container.querySelector("[data-slot='avatar']")?.className).toContain("custom-avatar");
	});
});