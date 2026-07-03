import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm/relaxed font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer gap-2 transition-all duration-300 rounded-lg",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/80",
				outline:
					"border-border bg-white hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:bg-input/30",
				secondary:
					"bg-orange-200/20 text-orange-600 border border-orange-400/40 hover:bg-orange-300/25 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
				ghost:
					"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
				destructive: "bg-destructive text-white hover:bg-destructive/20",
				link: "text-primary underline-offset-4 hover:underline",
				success: "text-green-600 bg-green-200/50 hover:text-green-700 border border-green-500/40",
			},
			size: {
				sm: "h-7 px-5",
				default: "h-9 px-4 py-2",
				lg: "h-11 px-6",
				icon: "h-fit w-fit",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
