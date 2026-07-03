import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { Button } from "../button";
import { Toaster } from "./index";

const meta: Meta<typeof Toaster> = {
	title: "UI/Sonner",
	component: Toaster,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
	render: () => (
		<>
			<Toaster />
			<div className="flex flex-col gap-2">
				<Button onClick={() => toast("Default toast")}>Show toast</Button>
				<Button
					variant="outline"
					onClick={() => toast.success("Success!")}
				>
					Success
				</Button>
				<Button
					variant="destructive"
					onClick={() => toast.error("Error!")}
				>
					Error
				</Button>
			</div>
		</>
	),
};
