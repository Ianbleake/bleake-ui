import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { FormField } from "./index";

describe("FormField", () => {
	it("renders label and input for text type", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { name: "" } });
			return (
				<FormField
					label="Name"
					name="name"
					form={form}
					placeholder="Enter name"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Name")).toBeInTheDocument();
		expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
	});

	it("renders required marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { email: "" } });
			return (
				<FormField
					label="Email"
					name="email"
					form={form}
					type="email"
					required
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("*")).toBeInTheDocument();
	});

	it("renders optional marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { nickname: "" } });
			return (
				<FormField
					label="Nickname"
					name="nickname"
					form={form}
					optional
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Opcional")).toBeInTheDocument();
	});

	it("renders helper text", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { name: "" } });
			return (
				<FormField
					label="Name"
					name="name"
					form={form}
					helperText="Your full legal name"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Your full legal name")).toBeInTheDocument();
	});

	it("renders password type with toggle button", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { password: "" } });
			return (
				<FormField
					label="Password"
					name="password"
					form={form}
					type="password"
					placeholder="Enter password"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
		expect(document.querySelector("button[aria-label]")).toBeInTheDocument();
	});

	it("toggles password visibility", async () => {
		const user = userEvent.setup();
		const Wrapper = () => {
			const form = useForm({ defaultValues: { password: "" } });
			return (
				<FormField
					label="Password"
					name="password"
					form={form}
					type="password"
					placeholder="Enter password"
				/>
			);
		};
		render(<Wrapper />);
		const input = screen.getByPlaceholderText("Enter password");
		expect(input).toHaveAttribute("type", "password");
		const toggleBtn = document.querySelector("button[aria-label]") as HTMLButtonElement;
		await user.click(toggleBtn);
		expect(input).toHaveAttribute("type", "text");
	});

	it("accepts typed input for text type", async () => {
		const user = userEvent.setup();
		const Wrapper = () => {
			const form = useForm({ defaultValues: { name: "" } });
			return (
				<FormField
					label="Name"
					name="name"
					form={form}
					placeholder="Type"
				/>
			);
		};
		render(<Wrapper />);
		const input = screen.getByPlaceholderText("Type");
		await user.type(input, "hello");
		expect(input).toHaveValue("hello");
	});

	it("renders disabled input", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { code: "ABC" } });
			return (
				<FormField
					label="Code"
					name="code"
					form={form}
					disabled
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByDisplayValue("ABC")).toBeDisabled();
	});
});
