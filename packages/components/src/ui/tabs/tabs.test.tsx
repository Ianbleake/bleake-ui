import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "./index";
import { TabsContent } from "./tabs-content";
import { TabsList } from "./tabs-list";
import { TabsTrigger } from "./tabs-trigger";

describe("Tabs", () => {
	it("renders triggers and content", () => {
		render(
			<Tabs defaultValue="tab1">
				<TabsList>
					<TabsTrigger value="tab1">Tab 1</TabsTrigger>
					<TabsTrigger value="tab2">Tab 2</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">Content 1</TabsContent>
				<TabsContent value="tab2">Content 2</TabsContent>
			</Tabs>,
		);
		expect(screen.getByText("Tab 1")).toBeInTheDocument();
		expect(screen.getByText("Content 1")).toBeInTheDocument();
		expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
	});

	it("shows content for active tab by default", () => {
		render(
			<Tabs defaultValue="tab2">
				<TabsList>
					<TabsTrigger value="tab1">First</TabsTrigger>
					<TabsTrigger value="tab2">Second</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">Content 1</TabsContent>
				<TabsContent value="tab2">Content 2</TabsContent>
			</Tabs>,
		);
		expect(screen.getByText("Content 2")).toBeInTheDocument();
		expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
	});

	it("switches content when clicking trigger", async () => {
		const user = userEvent.setup();
		render(
			<Tabs defaultValue="tab1">
				<TabsList>
					<TabsTrigger value="tab1">First</TabsTrigger>
					<TabsTrigger value="tab2">Second</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">Content 1</TabsContent>
				<TabsContent value="tab2">Content 2</TabsContent>
			</Tabs>,
		);
		expect(screen.getByText("Content 1")).toBeInTheDocument();
		await user.click(screen.getByText("Second"));
		expect(screen.getByText("Content 2")).toBeInTheDocument();
		expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
	});

	it("calls onValueChange when switching", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();
		render(
			<Tabs onValueChange={onValueChange} defaultValue="tab1">
				<TabsList>
					<TabsTrigger value="tab1">First</TabsTrigger>
					<TabsTrigger value="tab2">Second</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">Content 1</TabsContent>
				<TabsContent value="tab2">Content 2</TabsContent>
			</Tabs>,
		);
		await user.click(screen.getByText("Second"));
		expect(onValueChange).toHaveBeenCalledWith("tab2");
	});
});