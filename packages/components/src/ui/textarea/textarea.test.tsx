import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Textarea } from "./index";

describe("Textarea", () => {
	it("renders with placeholder", () => {
		render(<Textarea placeholder="Write here..." />);
		expect(screen.getByPlaceholderText("Write here...")).toBeInTheDocument();
	});

	it("accepts typed input", async () => {
		const user = userEvent.setup();
		render(<Textarea placeholder="Type" />);
		const ta = screen.getByPlaceholderText("Type") as HTMLTextAreaElement;
		await user.type(ta, "hello world");
		expect(ta).toHaveValue("hello world");
	});

	it("does not accept input when disabled", async () => {
		const user = userEvent.setup();
		render(
			<Textarea
				disabled
				placeholder="Disabled"
			/>,
		);
		const ta = screen.getByPlaceholderText("Disabled") as HTMLTextAreaElement;
		expect(ta).toBeDisabled();
		await user.type(ta, "text");
		expect(ta).toHaveValue("");
	});

	it("accepts custom className", () => {
		render(
			<Textarea
				className="custom-ta"
				placeholder="TA"
			/>,
		);
		expect(screen.getByPlaceholderText("TA").className).toContain("custom-ta");
	});

	it("supports defaultValue", () => {
		render(<Textarea defaultValue="pre-filled" />);
		expect(screen.getByDisplayValue("pre-filled")).toBeInTheDocument();
	});
});
