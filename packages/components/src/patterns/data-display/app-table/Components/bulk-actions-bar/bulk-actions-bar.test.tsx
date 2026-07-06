/**
 * bulk-actions-bar.test.tsx — Guards for the shared count/entity label copy.
 *
 * bulk-actions-bar is shared by events, candidates and profiles. The component
 * must NOT pluralize the entityLabel itself: callers pass the noun already in
 * the correct form (e.g. "evento" / "eventos"). Only the invariable adjective
 * "seleccionado" is pluralized here.
 *
 * Guards:
 *   (a) Singular: count 1 renders "<label> seleccionado".
 *   (b) Plural adjective: count !== 1 renders "<label> seleccionados".
 *   (c) Zero: count 0 renders the plural adjective form.
 *   (d) Regression: a caller that passes an already-plural noun is NOT
 *       double-pluralized (no "perfiless" / "candidatoss").
 */
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BulkActionsBar } from "./index";

const renderBar = (props: Partial<BulkActionsBarProps> = {}) => {
	return render(
		<BulkActionsBar
			selectedCount={1}
			entityLabel="evento"
			onClear={vi.fn()}
			{...props}
		>
			<button type="button">Acción</button>
		</BulkActionsBar>,
	);
};

describe("BulkActionsBar count label", () => {
	it("renders singular adjective when exactly 1 is selected", () => {
		renderBar({ selectedCount: 1, entityLabel: "evento" });
		expect(screen.getByText("evento seleccionado")).toBeInTheDocument();
	});

	it("renders plural adjective when more than 1 is selected", () => {
		renderBar({ selectedCount: 3, entityLabel: "eventos" });
		expect(screen.getByText("eventos seleccionados")).toBeInTheDocument();
	});

	it("renders plural adjective when 0 are selected", () => {
		renderBar({ selectedCount: 0, entityLabel: "eventos" });
		expect(screen.getByText("eventos seleccionados")).toBeInTheDocument();
	});

	it("does not double-pluralize an already-plural entityLabel (regression guard)", () => {
		renderBar({ selectedCount: 2, entityLabel: "perfiles" });
		expect(screen.getByText("perfiles seleccionados")).toBeInTheDocument();
		expect(screen.queryByText(/perfiless/)).not.toBeInTheDocument();
	});
});
