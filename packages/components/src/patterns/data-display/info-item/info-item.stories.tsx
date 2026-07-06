import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar, Globe, Mail, MapPin, Phone, User } from "lucide-react";
import { InfoItem } from "./index";

const meta: Meta<typeof InfoItem> = {
	title: "Design System/Patterns/Data Display/InfoItem",
	component: InfoItem,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		label: {
			control: "text",
			description: "Optional label shown above the value",
		},
		value: {
			control: "text",
			description: "The main value to display",
		},
		copyable: {
			control: "boolean",
			description: "When true, clicking copies the value to clipboard",
		},
		isLink: {
			control: "boolean",
			description: "When true, clicking opens the value as a URL",
		},
	},
	decorators: [
		(Story) => (
			<div className="w-72">
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof InfoItem>;

export const WithLabelAndValue: Story = {
	args: {
		icon: User,
		label: "Full name",
		value: "Ana García López",
	},
};

export const EmailCopyable: Story = {
	args: {
		icon: Mail,
		label: "Email",
		value: "ana.garcia@example.com",
		copyable: true,
	},
};

export const PhoneNumber: Story = {
	args: {
		icon: Phone,
		label: "Phone",
		value: "+54 11 1234-5678",
		copyable: true,
	},
};

export const ExternalLink: Story = {
	args: {
		icon: Globe,
		label: "Website",
		value: "https://example.com",
		isLink: true,
	},
};

export const Location: Story = {
	args: {
		icon: MapPin,
		label: "Address",
		value: "Av. Corrientes 1234, Buenos Aires",
	},
};

export const EmptyValue: Story = {
	args: {
		icon: Calendar,
		label: "Birth date",
		value: "",
	},
};

export const WithChildren: Story = {
	render: () => (
		<InfoItem
			icon={User}
			label="Status"
		>
			<span className="inline-flex items-center gap-1.5">
				<span className="size-2 rounded-full bg-green-500" />
				Active
			</span>
		</InfoItem>
	),
};
