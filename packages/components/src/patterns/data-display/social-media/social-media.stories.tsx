import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialMedia } from "./index";

const meta: Meta<typeof SocialMedia> = {
	title: "Design System/Patterns/Data Display/SocialMedia",
	component: SocialMedia,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		socialMedia: {
			description: "Social media platform and URL",
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

type Story = StoryObj<typeof SocialMedia>;

export const Facebook: Story = {
	args: {
		socialMedia: {
			platform: "facebook",
			url: "https://facebook.com/example.campaign",
		},
	},
};

export const Instagram: Story = {
	args: {
		socialMedia: {
			platform: "instagram",
			url: "https://instagram.com/example.campaign",
		},
	},
};

export const Twitter: Story = {
	args: {
		socialMedia: {
			platform: "twitter",
			url: "https://twitter.com/example_campaign",
		},
	},
};

export const LinkedIn: Story = {
	args: {
		socialMedia: {
			platform: "linkedin",
			url: "https://linkedin.com/company/example-campaign",
		},
	},
};

export const Website: Story = {
	args: {
		socialMedia: {
			platform: "other",
			url: "https://example-campaign.com",
		},
	},
};

export const AllPlatforms: Story = {
	render: () => (
		<div className="flex flex-col gap-2 w-72">
			<SocialMedia socialMedia={{ platform: "facebook", url: "https://facebook.com/example" }} />
			<SocialMedia socialMedia={{ platform: "instagram", url: "https://instagram.com/example" }} />
			<SocialMedia socialMedia={{ platform: "twitter", url: "https://twitter.com/example" }} />
			<SocialMedia
				socialMedia={{ platform: "linkedin", url: "https://linkedin.com/company/example" }}
			/>
			<SocialMedia socialMedia={{ platform: "other", url: "https://example.com" }} />
		</div>
	),
};
