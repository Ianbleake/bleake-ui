import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Switch } from "./index";

const meta: Meta<typeof Switch> = {
	title: "UI/Switch",
	component: Switch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	render: () => {
		const [checked, setChecked] = useState<boolean>(false);
		return (
			<div className="flex items-center gap-4">
				<Switch checked={checked} onCheckedChange={setChecked} />
				<span className="text-sm">{checked ? "On" : "Off"}</span>
			</div>
		);
	},
};

export const Small: Story = {
	render: () => {
		const [checked, setChecked] = useState<boolean>(false);
		return (
			<div className="flex items-center gap-4">
				<Switch size="sm" checked={checked} onCheckedChange={setChecked} />
				<span className="text-sm">{checked ? "On" : "Off"}</span>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<Switch disabled />
				<span className="text-sm text-muted-foreground">Disabled off</span>
			</div>
			<div className="flex items-center gap-4">
				<Switch disabled checked />
				<span className="text-sm text-muted-foreground">Disabled on</span>
			</div>
		</div>
	),
};

export const Controlled: Story = {
	render: () => {
		const [checked, setChecked] = useState<boolean>(true);
		return (
			<div className="flex flex-col gap-4">
				<Switch checked={checked} onCheckedChange={setChecked} />
				<button
					type="button"
					className="text-sm text-primary"
					onClick={() => setChecked(!checked)}
				>
					Toggle from button
				</button>
			</div>
		);
	},
};