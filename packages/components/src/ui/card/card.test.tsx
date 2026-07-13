import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./index";
import { CardContent } from "./card-content";
import { CardDescription } from "./card-description";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardTitle } from "./card-title";

describe("Card", () => {
	it("renders children", () => {
		const { container } = render(<Card>Card content</Card>);
		const card = container.querySelector("[data-slot='card']");
		expect(card).toBeInTheDocument();
		expect(screen.getByText("Card content")).toBeInTheDocument();
	});

	it("renders with header, title, description", () => {
		render(
			<Card>
				<CardHeader>
					<CardTitle>Title</CardTitle>
					<CardDescription>Description</CardDescription>
				</CardHeader>
				<CardContent>Body</CardContent>
				<CardFooter>Footer</CardFooter>
			</Card>,
		);
		expect(screen.getByText("Title")).toBeInTheDocument();
		expect(screen.getByText("Description")).toBeInTheDocument();
		expect(screen.getByText("Body")).toBeInTheDocument();
		expect(screen.getByText("Footer")).toBeInTheDocument();
	});

	it("applies size variant", () => {
		const { container } = render(<Card size="sm">Small</Card>);
		expect(container.querySelector("[data-slot='card']")).toHaveAttribute("data-size", "sm");
	});

	it("accepts custom className", () => {
		const { container } = render(<Card className="custom-class">Content</Card>);
		expect(container.querySelector("[data-slot='card']")?.className).toContain("custom-class");
	});
});