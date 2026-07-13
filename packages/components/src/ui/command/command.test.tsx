import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Command } from "./index";
import { CommandInput } from "./command-input";
import { CommandItem } from "./command-item";
import { CommandList } from "./command-list";

describe("Command", () => {
	it("renders input and items", () => {
		render(
			<Command>
				<CommandInput placeholder="Search..." />
				<CommandList>
					<CommandItem>Apple</CommandItem>
					<CommandItem>Banana</CommandItem>
				</CommandList>
			</Command>,
		);
		expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
		expect(screen.getByText("Apple")).toBeInTheDocument();
		expect(screen.getByText("Banana")).toBeInTheDocument();
	});

	it("filters items based on input", async () => {
		const user = userEvent.setup();
		render(
			<Command>
				<CommandInput placeholder="Search..." />
				<CommandList>
					<CommandItem>Apple</CommandItem>
					<CommandItem>Banana</CommandItem>
					<CommandItem>Cherry</CommandItem>
				</CommandList>
			</Command>,
		);
		const input = screen.getByPlaceholderText("Search...");
		await user.type(input, "ban");
		expect(screen.getByText("Banana")).toBeInTheDocument();
		expect(screen.queryByText("Apple")).not.toBeInTheDocument();
		expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
	});

	it("calls onSelect when item is selected", async () => {
		const user = userEvent.setup();
		const onSelect = vi.fn();
		render(
			<Command>
				<CommandInput placeholder="Search..." />
				<CommandList>
					<CommandItem onSelect={onSelect}>Apple</CommandItem>
				</CommandList>
			</Command>,
		);
		await user.click(screen.getByText("Apple"));
		expect(onSelect).toHaveBeenCalled();
	});
});