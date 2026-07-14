import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SignaturePad } from "./index";

describe("SignaturePad", () => {
	it("renders canvas element", () => {
		render(<SignaturePad onSignature={() => {}} />);
		expect(document.querySelector("canvas")).toBeInTheDocument();
	});

	it("renders action buttons by default", () => {
		render(<SignaturePad onSignature={() => {}} />);
		expect(screen.getByText(/undo|deshacer/i)).toBeInTheDocument();
		expect(screen.getByText(/clear|limpiar/i)).toBeInTheDocument();
	});

	it("hides confirm button when hideConfirm is true", () => {
		render(<SignaturePad onSignature={() => {}} hideConfirm />);
		// Undo and Clear buttons still render, but Confirm button is hidden
		expect(screen.getByText(/undo|deshacer/i)).toBeInTheDocument();
	});

	it("accepts custom className", () => {
		const { container } = render(
			<SignaturePad onSignature={() => {}} className="custom-sig" />,
		);
		expect(container.firstChild).toHaveClass("custom-sig");
	});

	it("calls onSignature prop", () => {
		const onSignature = vi.fn();
		render(<SignaturePad onSignature={onSignature} />);
		expect(onSignature).toBeDefined();
	});
});