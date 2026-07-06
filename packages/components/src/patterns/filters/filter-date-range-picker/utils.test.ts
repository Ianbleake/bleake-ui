import { describe, expect, it } from "vitest";
import { normalizeRange, resolveClickedDay } from "./utils";

const day = (iso: string): Date => new Date(`${iso}T00:00:00`);

describe("resolveClickedDay", () => {
	it("returns range.from when there is no range.to (single endpoint)", () => {
		const result = resolveClickedDay({ from: day("2025-01-10"), to: undefined });
		expect(result).toEqual(day("2025-01-10"));
	});

	it("returns the new day when from is old and to is new", () => {
		const previous = { from: day("2025-01-10"), to: day("2025-01-20") };
		// User clicked 2025-01-25; rdp keeps old from and appends new day as `to`.
		const result = resolveClickedDay({ from: day("2025-01-10"), to: day("2025-01-25") }, previous);
		expect(result).toEqual(day("2025-01-25"));
	});

	it("returns the new day when from is new and to is old", () => {
		const previous = { from: day("2025-01-10"), to: day("2025-01-20") };
		// User clicked 2025-01-05 (earlier); rdp puts new day as `from`.
		const result = resolveClickedDay({ from: day("2025-01-05"), to: day("2025-01-20") }, previous);
		expect(result).toEqual(day("2025-01-05"));
	});

	it("returns range.to when committed range is a single day (from === to)", () => {
		const previous = { from: day("2025-01-10"), to: day("2025-01-10") };
		const result = resolveClickedDay({ from: day("2025-01-10"), to: day("2025-01-15") }, previous);
		expect(result).toEqual(day("2025-01-15"));
	});

	it("returns range.to when both endpoints are old (fallback)", () => {
		const previous = { from: day("2025-01-10"), to: day("2025-01-20") };
		const result = resolveClickedDay({ from: day("2025-01-10"), to: day("2025-01-20") }, previous);
		expect(result).toEqual(day("2025-01-20"));
	});

	it("returns range.from when there is no previous range", () => {
		const result = resolveClickedDay({ from: day("2025-01-10"), to: day("2025-01-20") });
		expect(result).toEqual(day("2025-01-10"));
	});
});

describe("normalizeRange", () => {
	it("keeps order when from is before to", () => {
		expect(normalizeRange(day("2025-01-10"), day("2025-01-20"))).toEqual({
			from: day("2025-01-10"),
			to: day("2025-01-20"),
		});
	});

	it("swaps endpoints when from is after to", () => {
		expect(normalizeRange(day("2025-01-20"), day("2025-01-10"))).toEqual({
			from: day("2025-01-10"),
			to: day("2025-01-20"),
		});
	});

	it("keeps a single-day range unchanged", () => {
		expect(normalizeRange(day("2025-01-10"), day("2025-01-10"))).toEqual({
			from: day("2025-01-10"),
			to: day("2025-01-10"),
		});
	});
});
