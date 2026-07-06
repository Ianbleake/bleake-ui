import { describe, expect, it } from "vitest";
import { merge } from "./mergeStyles";

describe("merge", () => {
	it("joins multiple class names", () => {
		expect(merge("px-2", "py-1")).toBe("px-2 py-1");
	});

	it("handles conditional classes with falsy values", () => {
		expect(merge("base", false && "hidden", "visible")).toBe("base visible");
	});

	it("merges conflicting tailwind classes (last wins)", () => {
		expect(merge("px-2", "px-4")).toBe("px-4");
		expect(merge("text-sm", "text-lg")).toBe("text-lg");
	});

	it("handles arrays", () => {
		expect(merge(["px-2", "py-1"])).toBe("px-2 py-1");
	});

	it("handles objects (clsx syntax)", () => {
		expect(merge({ active: true, hidden: false })).toBe("active");
	});

	it("handles undefined and null", () => {
		expect(merge(undefined, "base", null)).toBe("base");
	});

	it("handles empty input", () => {
		expect(merge()).toBe("");
	});
});
