/**
 * app-table.test.tsx — Integration tests for AppTable selection API (task 3.4).
 *
 * Guards:
 *   (a) Header checkbox renders when `selection` config is provided.
 *   (b) Header checkbox does NOT render when `selection` is absent (regression guard).
 *   (c) colSpan is `headers.length + 1` in the loading skeleton when `selection` is provided.
 *   (d) colSpan is `headers.length + 1` in the empty state cell when `selection` is provided.
 *   (e) colSpan is `headers.length` (no extra column) when `selection` is absent.
 */
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AppTable } from "./index";

// ---------------------------------------------------------------------------
// Shared test fixtures
// ---------------------------------------------------------------------------

type TestItem = { id: string; name: string };

const HEADERS: AppTableHeader[] = [{ label: "Name" }, { label: "Type" }, { label: "Status" }];

const ITEMS: TestItem[] = [
	{ id: "item-1", name: "Event Alpha" },
	{ id: "item-2", name: "Event Beta" },
];

const buildSelection = (
	overrides: Partial<AppTableSelectionConfig<TestItem>> = {},
): AppTableSelectionConfig<TestItem> => ({
	allSelected: false,
	someSelected: false,
	onSelectAll: vi.fn(),
	isSelected: () => false,
	...overrides,
});

const renderTable = (props: Partial<AppTableProps<TestItem>> = {}) => {
	return render(
		<AppTable<TestItem>
			headers={HEADERS}
			elements={ITEMS}
			renderRow={(item) => (
				<tr key={item.id}>
					<td>{item.name}</td>
				</tr>
			)}
			getRowId={(item) => item.id}
			{...props}
		/>,
	);
};

// ---------------------------------------------------------------------------
// Task 3.4 — Integration: header checkbox presence and colSpan accounting
// ---------------------------------------------------------------------------

describe("AppTable — selection prop", () => {
	it("renders header checkbox when selection config is provided", () => {
		renderTable({ selection: buildSelection() });

		const checkbox = screen.getByRole("checkbox", { name: "Select all rows" });
		expect(checkbox).toBeInTheDocument();
	});

	it("does NOT render header checkbox when selection prop is absent", () => {
		renderTable(); // no selection prop

		const checkbox = screen.queryByRole("checkbox", { name: "Select all rows" });
		expect(checkbox).not.toBeInTheDocument();
	});

	it("header checkbox reflects unchecked state when nothing is selected", () => {
		renderTable({
			selection: buildSelection({ allSelected: false, someSelected: false }),
		});

		const checkbox = screen.getByRole("checkbox", { name: "Select all rows" });
		// Radix Checkbox: unchecked → aria-checked="false" or no aria-checked
		expect(checkbox).not.toBeChecked();
	});

	it("header checkbox reflects checked state when all rows are selected", () => {
		renderTable({
			selection: buildSelection({ allSelected: true, someSelected: false }),
		});

		const checkbox = screen.getByRole("checkbox", { name: "Select all rows" });
		expect(checkbox).toBeChecked();
	});

	it("header checkbox reflects indeterminate state when some rows are selected", () => {
		renderTable({
			selection: buildSelection({ allSelected: false, someSelected: true }),
		});

		const checkbox = screen.getByRole("checkbox", { name: "Select all rows" });
		// aria-checked="mixed" for indeterminate
		expect(checkbox).toHaveAttribute("aria-checked", "mixed");
	});
});

describe("AppTable — colSpan accounting with selection", () => {
	it("skeleton colSpan is headers.length + 1 when selection is provided (isLoading)", () => {
		renderTable({ elements: undefined, isLoading: true, selection: buildSelection() });

		// AppTableSkeleton renders cells spanning all columns
		// headers.length = 3, extraColumns = 1 → colSpan = 4
		const skeletonCells = document.querySelectorAll("td[colspan]");
		expect(skeletonCells.length).toBeGreaterThan(0);
		for (const cell of skeletonCells) {
			expect(cell.getAttribute("colspan")).toBe(String(HEADERS.length + 1));
		}
	});

	it("skeleton colSpan is headers.length when selection is absent (isLoading)", () => {
		renderTable({ elements: undefined, isLoading: true }); // no selection

		const skeletonCells = document.querySelectorAll("td[colspan]");
		expect(skeletonCells.length).toBeGreaterThan(0);
		for (const cell of skeletonCells) {
			expect(cell.getAttribute("colspan")).toBe(String(HEADERS.length));
		}
	});

	it("empty-state colSpan is headers.length + 1 when selection is provided", () => {
		renderTable({ elements: [], isLoading: false, selection: buildSelection() });

		// The empty state TableCell spans all columns
		const emptyCells = document.querySelectorAll("td[colspan]");
		expect(emptyCells.length).toBeGreaterThan(0);
		const emptyCell = emptyCells[0];
		expect(emptyCell?.getAttribute("colspan")).toBe(String(HEADERS.length + 1));
	});

	it("empty-state colSpan is headers.length when selection is absent", () => {
		renderTable({ elements: [], isLoading: false }); // no selection

		const emptyCells = document.querySelectorAll("td[colspan]");
		expect(emptyCells.length).toBeGreaterThan(0);
		const emptyCell = emptyCells[0];
		expect(emptyCell?.getAttribute("colspan")).toBe(String(HEADERS.length));
	});
});

describe("AppTable — no regression for consumers without selection", () => {
	it("renders identically without selection: no extra <th>, no checkbox", () => {
		const { container } = renderTable(); // no selection

		const allTh = container.querySelectorAll("th");
		// Should have exactly headers.length <th> elements — no extra checkbox column
		expect(allTh).toHaveLength(HEADERS.length);

		const checkboxes = screen.queryAllByRole("checkbox");
		expect(checkboxes).toHaveLength(0);
	});

	it("with selection: adds exactly one extra <th> for the checkbox column", () => {
		const { container } = renderTable({ selection: buildSelection() });

		const allTh = container.querySelectorAll("th");
		// headers.length + 1 (checkbox column)
		expect(allTh).toHaveLength(HEADERS.length + 1);
	});
});
