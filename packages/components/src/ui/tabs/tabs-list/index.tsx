import { merge } from "@bleakedev/bleake-core";
import type { VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import type React from "react";
import type { tabsListVariants } from "../style-variants";

const VARIANT_CLASSES: Record<string, string> = {
	default: "bg-white border border-gray-200 rounded-xl p-1 gap-0.5 w-fit",
	line: "gap-1 bg-transparent border-b border-gray-200 w-full rounded-none",
};

export const TabsList = ({
	className,
	variant = "default",
	size = "default",
	...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
	VariantProps<typeof tabsListVariants>): React.ReactElement => {
	const variantClass = VARIANT_CLASSES[variant ?? "default"] ?? VARIANT_CLASSES.default;

	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			data-variant={variant}
			data-size={size}
			className={merge(
				"group/tabs-list flex items-center overflow-x-auto max-w-full",
				variantClass,
				className,
			)}
			{...props}
		/>
	);
};
