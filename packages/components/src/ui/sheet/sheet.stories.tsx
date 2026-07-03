import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Sheet } from "./index";
import { SheetClose } from "./sheet-close";
import { SheetContent } from "./sheet-content";
import { SheetDescription } from "./sheet-description";
import { SheetFooter } from "./sheet-footer";
import { SheetHeader } from "./sheet-header";
import { SheetTitle } from "./sheet-title";
import { SheetTrigger } from "./sheet-trigger";

const meta: Meta<typeof Sheet> = {
	title: "UI/Sheet",
	component: Sheet,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open Right Sheet</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>Make changes to your profile here.</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
};

export const Left: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open Left Sheet</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Left Panel</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	),
};

export const Top: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open Top Sheet</Button>
			</SheetTrigger>
			<SheetContent side="top">
				<SheetHeader>
					<SheetTitle>Top Panel</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	),
};

export const Bottom: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button>Open Bottom Sheet</Button>
			</SheetTrigger>
			<SheetContent side="bottom">
				<SheetHeader>
					<SheetTitle>Bottom Panel</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	),
};
