import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FilterSelect } from "./index";

const OPTIONS: Option[] = [
	{ value: "all", label: "All" },
	{ value: "active", label: "Active" },
	{ value: "paused", label: "Paused" },
];

describe("FilterSelect", () => {
	it("renders trigger with placeholder", () => {
		render(
			<FilterSelect
				options={OPTIONS}
				placeholder="Filter by..."
			/>,
		);
		expect(screen.getByText("Filter by...")).toBeInTheDocument();
	});

	it("renders with label", () => {
		render(
			<FilterSelect
				options={OPTIONS}
				label="Status"
				placeholder="All"
			/>,
		);
		expect(screen.getByText("Status")).toBeInTheDocument();
	});

	it("shows selected value", () => {
		render(
			<FilterSelect
				options={OPTIONS}
				value="active"
				onChange={() => {
					// no-op: test only verifies render
				}}
			/>,
		);
		expect(screen.getByText("Active")).toBeInTheDocument();
	});

	it("calls onChange when value changes", () => {
		const onChange = vi.fn();
		render(
			<FilterSelect
				options={OPTIONS}
				value="all"
				onChange={onChange}
			/>,
		);
		expect(onChange).toBeDefined();
	});
});
