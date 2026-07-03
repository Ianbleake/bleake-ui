import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
	"group/tabs-list inline-flex items-center text-muted-foreground",
	{
		variants: {
			variant: {
				default: "bg-white border border-gray-200 rounded-xl p-1 gap-0.5 w-fit",
				line: "gap-1 bg-transparent border-b border-gray-200 w-full rounded-none",
			},
			size: {
				default: "",
				sm: "",
				xs: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
