import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./index";
import { TooltipContent } from "./tooltip-content";
import { TooltipProvider } from "./tooltip-provider";
import { TooltipTrigger } from "./tooltip-trigger";

describe("Tooltip", () => {
	it("renders trigger element", () => {
		render(
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<button type="button">Hover me</button>
					</TooltipTrigger>
					<TooltipContent>Tooltip text</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		);
		expect(screen.getByText("Hover me")).toBeInTheDocument();
	});

	it("renders within provider without crashing", () => {
		const { container } = render(
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<button type="button">Trigger</button>
					</TooltipTrigger>
					<TooltipContent>Content</TooltipContent>
				</Tooltip>
			</TooltipProvider>,
		);
		expect(container).toBeInTheDocument();
	});
});
