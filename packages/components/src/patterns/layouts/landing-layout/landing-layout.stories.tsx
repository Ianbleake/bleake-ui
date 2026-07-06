import type { Meta, StoryObj } from "@storybook/react-vite";
import { LandingLayout } from "./index";

const meta: Meta<typeof LandingLayout> = {
	title: "Design System/Patterns/Layouts/LandingLayout",
	component: LandingLayout,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

type Story = StoryObj<typeof LandingLayout>;

export const Default: Story = {
	render: () => (
		<LandingLayout
			header={
				<header className="sticky top-0 inset-x-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
						<span className="text-sm font-semibold">My Brand</span>
						<nav className="flex items-center gap-2 text-sm">
							<button
								type="button"
								className="text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-muted"
							>
								Sign in
							</button>
						</nav>
					</div>
				</header>
			}
			footer={
				<footer className="border-t border-border bg-background py-6">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-muted-foreground">
						<span>My Brand</span>
						<p>Demo footer — provide your own via the footer slot</p>
					</div>
				</footer>
			}
		>
			<div className="py-16 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl font-bold">Page content</h1>
					<p className="mt-2 text-muted-foreground">
						Children render here. Without children, react-router Outlet is used.
					</p>
				</div>
			</div>
		</LandingLayout>
	),
};

export const WithoutSlots: Story = {
	name: "Without slots (Outlet fallback)",
	render: () => (
		<LandingLayout>
			<div className="py-16 px-4 text-center text-muted-foreground">
				No header/footer provided — react-router Outlet renders nested routes here.
			</div>
		</LandingLayout>
	),
};
