import type { Meta, StoryObj } from "@storybook/react-vite";
import { Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/button";
import { FormSheet } from "./index";

const meta: Meta<typeof FormSheet> = {
	title: "Design System/Patterns/Forms/FormSheet",
	component: FormSheet,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FormSheet>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState<boolean>(false);

		return (
			<>
				<Button
					variant="outline"
					onClick={() => setOpen(true)}
				>
					Open sheet
				</Button>
				<FormSheet
					open={open}
					onOpenChange={setOpen}
					icon={Settings}
					title="Edit settings"
					description="Adjust the configuration for this campaign."
				>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-sm text-muted-foreground">Form fields go here.</p>
					</div>
				</FormSheet>
			</>
		);
	},
};

export const WithFooter: Story = {
	render: () => {
		const [open, setOpen] = useState<boolean>(false);

		return (
			<>
				<Button
					variant="outline"
					onClick={() => setOpen(true)}
				>
					Open with footer
				</Button>
				<FormSheet
					open={open}
					onOpenChange={setOpen}
					icon={Settings}
					title="Edit settings"
					description="Adjust the configuration for this campaign."
					footer={
						<>
							<Button
								variant="outline"
								onClick={() => setOpen(false)}
							>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Save</Button>
						</>
					}
				>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-sm text-muted-foreground">Form fields go here.</p>
					</div>
				</FormSheet>
			</>
		);
	},
};

export const NoDescription: Story = {
	render: () => {
		const [open, setOpen] = useState<boolean>(false);

		return (
			<>
				<Button
					variant="outline"
					onClick={() => setOpen(true)}
				>
					Open without description
				</Button>
				<FormSheet
					open={open}
					onOpenChange={setOpen}
					icon={Settings}
					title="Edit settings"
				>
					<div className="p-6 flex flex-col gap-4">
						<p className="text-sm text-muted-foreground">Form fields go here.</p>
					</div>
				</FormSheet>
			</>
		);
	},
};
