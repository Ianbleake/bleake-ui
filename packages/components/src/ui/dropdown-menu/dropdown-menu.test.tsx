import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DropdownMenu } from "./index";
import { DropdownMenuContent } from "./dropdown-menu-content";
import { DropdownMenuItem } from "./dropdown-menu-item";
import { DropdownMenuTrigger } from "./dropdown-menu-trigger";

describe("DropdownMenu", () => {
	it("renders trigger", () => {
		render(
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button type="button">Menu</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Item 1</DropdownMenuItem>
					<DropdownMenuItem>Item 2</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>,
		);
		expect(screen.getByText("Menu")).toBeInTheDocument();
	});

	it("opens content when trigger is clicked", async () => {
		const user = userEvent.setup();
		render(
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button type="button">Menu</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Item 1</DropdownMenuItem>
					<DropdownMenuItem>Item 2</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>,
		);
		expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
		await user.click(screen.getByText("Menu"));
		expect(screen.getByText("Item 1")).toBeInTheDocument();
		expect(screen.getByText("Item 2")).toBeInTheDocument();
	});

	it("calls onSelect when item is clicked", async () => {
		const user = userEvent.setup();
		const onSelect = vi.fn();
		render(
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<button type="button">Menu</button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem onSelect={onSelect}>Click me</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>,
		);
		await user.click(screen.getByText("Menu"));
		await user.click(screen.getByText("Click me"));
		expect(onSelect).toHaveBeenCalled();
	});
});