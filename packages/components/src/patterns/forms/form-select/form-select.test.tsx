import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { FormSelect } from "./index";

const OPTIONS: Option[] = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "cherry", label: "Cherry" },
];

describe("FormSelect", () => {
	it("renders label and trigger", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { fruit: "" } });
			return (
				<FormSelect
					label="Fruit"
					name="fruit"
					form={form}
					options={OPTIONS}
					placeholder="Pick one"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Fruit")).toBeInTheDocument();
		expect(screen.getByText("Pick one")).toBeInTheDocument();
	});

	it("renders required marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { fruit: "" } });
			return (
				<FormSelect
					label="Fruit"
					name="fruit"
					form={form}
					options={OPTIONS}
					required
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("*")).toBeInTheDocument();
	});

	it("renders optional marker", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { fruit: "" } });
			return (
				<FormSelect
					label="Fruit"
					name="fruit"
					form={form}
					options={OPTIONS}
					optional
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Opcional")).toBeInTheDocument();
	});

	it("renders helper text", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { fruit: "" } });
			return (
				<FormSelect
					label="Fruit"
					name="fruit"
					form={form}
					options={OPTIONS}
					helperText="Choose your favorite fruit"
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Choose your favorite fruit")).toBeInTheDocument();
	});

	it("shows default value from form", () => {
		const Wrapper = () => {
			const form = useForm({ defaultValues: { fruit: "banana" } });
			return (
				<FormSelect
					label="Fruit"
					name="fruit"
					form={form}
					options={OPTIONS}
				/>
			);
		};
		render(<Wrapper />);
		expect(screen.getByText("Banana")).toBeInTheDocument();
	});
});
