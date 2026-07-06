import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./index";
import { SelectContent } from "./select-content";
import { SelectGroup } from "./select-group";
import { SelectItem } from "./select-item";
import { SelectLabel } from "./select-label";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";

const meta: Meta<typeof Select> = {
	title: "UI/Select",
	component: Select,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-56">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithDefaultValue: Story = {
	render: () => (
		<Select defaultValue="banana">
			<SelectTrigger className="w-56">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectContent>
		</Select>
	),
};

export const MultipleGroups: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-56">
				<SelectValue placeholder="Select a food" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Vegetables</SelectLabel>
					<SelectItem value="carrot">Carrot</SelectItem>
					<SelectItem value="potato">Potato</SelectItem>
					<SelectItem value="tomato">Tomato</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Select disabled>
				<SelectTrigger className="w-56">
					<SelectValue placeholder="Disabled select" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
				</SelectContent>
			</Select>
			<Select>
				<SelectTrigger className="w-56">
					<SelectValue placeholder="Some items disabled" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana" disabled>Banana (disabled)</SelectItem>
					<SelectItem value="orange">Orange</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
};

export const Scrollable: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-56">
				<SelectValue placeholder="Select a country" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="ar">Argentina</SelectItem>
				<SelectItem value="br">Brazil</SelectItem>
				<SelectItem value="ca">Canada</SelectItem>
				<SelectItem value="co">Colombia</SelectItem>
				<SelectItem value="fr">France</SelectItem>
				<SelectItem value="de">Germany</SelectItem>
				<SelectItem value="it">Italy</SelectItem>
				<SelectItem value="jp">Japan</SelectItem>
				<SelectItem value="mx">Mexico</SelectItem>
				<SelectItem value="es">Spain</SelectItem>
				<SelectItem value="uk">United Kingdom</SelectItem>
				<SelectItem value="us">United States</SelectItem>
			</SelectContent>
		</Select>
	),
};