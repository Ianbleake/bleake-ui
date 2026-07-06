import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Label } from "../label";
import { RadioGroup } from "./index";
import { RadioGroupItem } from "./radio-group-item";

const meta: Meta<typeof RadioGroup> = {
	title: "UI/RadioGroup",
	component: RadioGroup,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string>("option-1");
		return (
			<div className="flex flex-col gap-4">
				<RadioGroup
					value={value}
					onValueChange={setValue}
				>
					<div className="flex items-center gap-2">
						<RadioGroupItem
							value="option-1"
							id="r1"
						/>
						<Label htmlFor="r1">Option 1</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem
							value="option-2"
							id="r2"
						/>
						<Label htmlFor="r2">Option 2</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem
							value="option-3"
							id="r3"
						/>
						<Label htmlFor="r3">Option 3</Label>
					</div>
				</RadioGroup>
				<p className="text-sm text-muted-foreground">Selected: {value}</p>
			</div>
		);
	},
};

export const Horizontal: Story = {
	render: () => {
		const [value, setValue] = useState<string>("plan-basic");
		return (
			<div className="flex flex-col gap-3">
				<RadioGroup
					value={value}
					onValueChange={setValue}
					className="flex gap-6"
				>
					<div className="flex items-center gap-2">
						<RadioGroupItem
							value="plan-basic"
							id="p1"
						/>
						<Label htmlFor="p1">Basic</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem
							value="plan-pro"
							id="p2"
						/>
						<Label htmlFor="p2">Pro</Label>
					</div>
					<div className="flex items-center gap-2">
						<RadioGroupItem
							value="plan-enterprise"
							id="p3"
						/>
						<Label htmlFor="p3">Enterprise</Label>
					</div>
				</RadioGroup>
				<p className="text-sm text-muted-foreground">Plan: {value}</p>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup defaultValue="option-1">
			<div className="flex items-center gap-2">
				<RadioGroupItem
					value="option-1"
					id="d1"
				/>
				<Label htmlFor="d1">Option 1</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem
					value="option-2"
					id="d2"
					disabled
				/>
				<Label
					htmlFor="d2"
					className="text-muted-foreground"
				>
					Option 2 (disabled)
				</Label>
			</div>
			<div className="flex items-center gap-2">
				<RadioGroupItem
					value="option-3"
					id="d3"
					disabled
				/>
				<Label
					htmlFor="d3"
					className="text-muted-foreground"
				>
					Option 3 (disabled)
				</Label>
			</div>
		</RadioGroup>
	),
};

export const WithDescription: Story = {
	render: () => {
		const [value, setValue] = useState<string>("monthly");
		return (
			<RadioGroup
				value={value}
				onValueChange={setValue}
			>
				<div className="flex items-start gap-3">
					<RadioGroupItem
						value="monthly"
						id="b1"
						className="mt-1"
					/>
					<div className="flex flex-col gap-0.5">
						<Label htmlFor="b1">Monthly</Label>
						<p className="text-xs text-muted-foreground">Billed every month</p>
					</div>
				</div>
				<div className="flex items-start gap-3">
					<RadioGroupItem
						value="yearly"
						id="b2"
						className="mt-1"
					/>
					<div className="flex flex-col gap-0.5">
						<Label htmlFor="b2">Yearly</Label>
						<p className="text-xs text-muted-foreground">Billed every year — save 20%</p>
					</div>
				</div>
			</RadioGroup>
		);
	},
};
