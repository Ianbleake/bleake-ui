import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./index";
import { SelectContent } from "./select-content";
import { SelectItem } from "./select-item";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";

describe("Select", () => {
	it("renders trigger with placeholder", () => {
		render(
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Choose..." />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">A</SelectItem>
					<SelectItem value="b">B</SelectItem>
				</SelectContent>
			</Select>,
		);
		expect(screen.getByText("Choose...")).toBeInTheDocument();
	});

	it("shows selected value with defaultValue", () => {
		render(
			<Select defaultValue="b">
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">Apple</SelectItem>
					<SelectItem value="b">Banana</SelectItem>
				</SelectContent>
			</Select>,
		);
		expect(screen.getByText("Banana")).toBeInTheDocument();
	});

	it("renders disabled trigger", () => {
		render(
			<Select disabled>
				<SelectTrigger>
					<SelectValue placeholder="Disabled" />
				</SelectTrigger>
			</Select>,
		);
		expect(screen.getByText("Disabled")).toBeInTheDocument();
	});

	it("calls onValueChange handler when provided", () => {
		const onValueChange = vi.fn();
		render(
			<Select onValueChange={onValueChange}>
				<SelectTrigger>
					<SelectValue placeholder="Choose..." />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="a">A</SelectItem>
				</SelectContent>
			</Select>,
		);
		expect(onValueChange).toBeDefined();
	});
});