import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { FormTextarea } from "./index";

describe("FormTextarea", () => {
	it("renders label and textarea", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { bio: "" } });
			return (
				<FormTextarea
					label="Bio"
					name="bio"
					form={form}
					placeholder="Tell us about you"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Bio")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Tell us about you")).toBeInTheDocument();
	});

	it("accepts typed input", async () => {
		const user = userEvent.setup();
		const Wrapper = () => {
			const form = useForm({ defaultValues: { bio: "" } });
			return (
				<FormTextarea
					label="Bio"
					name="bio"
					form={form}
					placeholder="Type"
				/>
			);
		};
		render(<Wrapper />);
		const ta = screen.getByPlaceholderText("Type") as HTMLTextAreaElement;
		await user.type(ta, "hello world");
		expect(ta).toHaveValue("hello world");
	});

	it("renders required marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { bio: "" } });
			return (
				<FormTextarea
					label="Bio"
					name="bio"
					form={form}
					required
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("*")).toBeInTheDocument();
	});

	it("renders helper text", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { bio: "" } });
			return (
				<FormTextarea
					label="Bio"
					name="bio"
					form={form}
					helperText="Max 500 characters"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Max 500 characters")).toBeInTheDocument();
	});

	it("renders optional marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { bio: "" } });
			return (
				<FormTextarea
					label="Bio"
					name="bio"
					form={form}
					optional
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Opcional")).toBeInTheDocument();
	});

	it("shows default value from form", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { bio: "Pre-filled bio" } });
			return (
				<FormTextarea
					label="Bio"
					name="bio"
					form={form}
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByDisplayValue("Pre-filled bio")).toBeInTheDocument();
	});
});
