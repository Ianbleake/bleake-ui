import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { FormSwitch } from "./index";

describe("FormSwitch", () => {
	it("renders label and switch", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { notifications: false } });
			return <FormSwitch label="Notifications" name="notifications" form={form} />;
		};
		render(<Wrapper />);
		expect(screen.getByText("Notifications")).toBeInTheDocument();
		expect(screen.getByRole("switch")).toBeInTheDocument();
	});

	it("starts unchecked with false default", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { notifications: false } });
			return <FormSwitch label="Notifications" name="notifications" form={form} />;
		};
		render(<Wrapper />);
		expect(screen.getByRole("switch")).toHaveAttribute("data-state", "unchecked");
	});

	it("starts checked with true default", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { notifications: true } });
			return <FormSwitch label="Notifications" name="notifications" form={form} />;
		};
		render(<Wrapper />);
		expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked");
	});

	it("toggles when clicked", async () => {
		const user = userEvent.setup();
		const Wrapper = () => {
			const form = useForm({ defaultValues: { notifications: false } });
			return <FormSwitch label="Notifications" name="notifications" form={form} />;
		};
		render(<Wrapper />);
		const sw = screen.getByRole("switch");
		await user.click(sw);
		expect(sw).toHaveAttribute("data-state", "checked");
	});

	it("renders helper text", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { notifications: false } });
			return (
				<FormSwitch
					label="Notifications"
					name="notifications"
					form={form}
					helperText="Receive email updates"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Receive email updates")).toBeInTheDocument();
	});

	it("renders optional marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { notifications: false } });
			return (
				<FormSwitch
					label="Notifications"
					name="notifications"
					form={form}
					optional
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Opcional")).toBeInTheDocument();
	});
});