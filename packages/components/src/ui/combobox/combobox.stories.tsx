import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComboboxContent } from "./combobox-content";
import { ComboboxEmpty } from "./combobox-empty";
import { ComboboxGroup } from "./combobox-group";
import { ComboboxInput } from "./combobox-input";
import { ComboboxItem } from "./combobox-item";
import { ComboboxLabel } from "./combobox-label";
import { Combobox } from "./index";

const meta: Meta<typeof Combobox> = {
	title: "UI/Combobox",
	component: Combobox,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const options = [
	{ value: "apple", label: "Apple" },
	{ value: "banana", label: "Banana" },
	{ value: "orange", label: "Orange" },
	{ value: "grape", label: "Grape" },
];

export const Default: Story = {
	render: () => (
		<Combobox>
			<ComboboxInput
				placeholder="Search..."
				className="h-9 w-48 rounded-md border px-3"
			/>
			<ComboboxContent className="w-48">
				<ComboboxEmpty>No results</ComboboxEmpty>
				<ComboboxGroup>
					<ComboboxLabel>Fruits</ComboboxLabel>
					{options.map((option) => (
						<ComboboxItem
							key={option.value}
							value={option.value}
						>
							{option.label}
						</ComboboxItem>
					))}
				</ComboboxGroup>
			</ComboboxContent>
		</Combobox>
	),
};
