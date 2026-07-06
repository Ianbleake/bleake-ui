import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ErrorFallback } from "./index";

describe("ErrorFallback", () => {
	it("renders the fallback UI", () => {
		render(
			<ErrorFallback
				error={new Error("boom")}
				resetError={vi.fn()}
			/>,
		);

		expect(screen.getByText("Algo salió mal")).toBeInTheDocument();
		expect(screen.getByText("Ocurrió un error inesperado. Intentá de nuevo.")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Reintentar" })).toBeInTheDocument();
	});

	it("shows the error message in dev mode", () => {
		render(
			<ErrorFallback
				error={new Error("boom")}
				resetError={vi.fn()}
			/>,
		);

		expect(screen.getByText("boom")).toBeInTheDocument();
	});

	it("renders non-Error values without crashing", () => {
		render(
			<ErrorFallback
				error="plain string failure"
				resetError={vi.fn()}
			/>,
		);

		expect(screen.getByText("Algo salió mal")).toBeInTheDocument();
	});

	it("calls resetError when retry is clicked", async () => {
		const resetError = vi.fn();
		const user = userEvent.setup();
		render(
			<ErrorFallback
				error={new Error("boom")}
				resetError={resetError}
			/>,
		);

		await user.click(screen.getByRole("button", { name: "Reintentar" }));

		expect(resetError).toHaveBeenCalledTimes(1);
	});
});
