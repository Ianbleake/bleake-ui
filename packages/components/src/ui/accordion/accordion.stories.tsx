import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionContent } from "./accordion-content";
import { AccordionItem } from "./accordion-item";
import { AccordionTrigger } from "./accordion-trigger";
import { Accordion } from "./index";

const meta: Meta<typeof Accordion> = {
	title: "UI/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	parameters: {
		layout: "padded",
	},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	render: () => (
		<Accordion
			type="single"
			defaultValue="item-1"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that match the other components aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>Yes. It uses CSS animations for smooth transitions.</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};

export const Multiple: Story = {
	render: () => (
		<Accordion
			type="multiple"
			defaultValue={["item-1"]}
		>
			<AccordionItem value="item-1">
				<AccordionTrigger>First section</AccordionTrigger>
				<AccordionContent>Content for first section</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Second section</AccordionTrigger>
				<AccordionContent>Content for second section</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
};
