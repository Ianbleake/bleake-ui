import { merge } from "@bleakedev/bleake-core";
import { Tabs as TabsPrimitive } from "radix-ui";
import type React from "react";

/**
 * TabsTrigger — uses parent TabsList's data-variant and data-size to auto-style.
 * Supports icons as children: `<TabsTrigger><Icon /> Label</TabsTrigger>`
 *
 * Variant styles:
 *   - default: pill with orange-50 bg + ring on active
 *   - line: underline orange on active
 *
 * Size styles:
 *   - default: px-4 py-2 text-sm
 *   - sm: px-3 py-1.5 text-xs
 */
export const TabsTrigger = ({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>): React.ReactElement => {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={merge(
				// Base
				"relative inline-flex items-center justify-center gap-1.5 font-medium whitespace-nowrap transition-all cursor-pointer",
				"disabled:pointer-events-none disabled:opacity-50",
				"[&_svg]:pointer-events-none [&_svg]:shrink-0",

				// === SIZE — inherited from parent TabsList data-size ===
				// default size
				"group-data-[size=default]/tabs-list:px-4 group-data-[size=default]/tabs-list:py-2 group-data-[size=default]/tabs-list:text-sm",
				"group-data-[size=default]/tabs-list:[&_svg:not([class*='size-'])]:size-4",
				// sm size
				"group-data-[size=sm]/tabs-list:px-3 group-data-[size=sm]/tabs-list:py-1.5 group-data-[size=sm]/tabs-list:text-xs",
				"group-data-[size=sm]/tabs-list:[&_svg:not([class*='size-'])]:size-3.5",
				// xs size
				"group-data-[size=xs]/tabs-list:px-2 group-data-[size=xs]/tabs-list:py-1 group-data-[size=xs]/tabs-list:text-[0.65rem]",
				"group-data-[size=xs]/tabs-list:[&_svg:not([class*='size-'])]:size-3",

				// === VARIANT: default (pill) — inherited from parent ===
				"group-data-[variant=default]/tabs-list:rounded-lg group-data-[variant=default]/tabs-list:text-gray-500",
				"group-data-[variant=default]/tabs-list:hover:text-gray-700",
				"group-data-[variant=default]/tabs-list:data-[state=active]:bg-orange-50",
				"group-data-[variant=default]/tabs-list:data-[state=active]:text-orange-600",
				"group-data-[variant=default]/tabs-list:data-[state=active]:ring-1",
				"group-data-[variant=default]/tabs-list:data-[state=active]:ring-orange-200",

				// === VARIANT: line (underline) — inherited from parent ===
				"group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:text-gray-400",
				"group-data-[variant=line]/tabs-list:border-b-2 group-data-[variant=line]/tabs-list:border-transparent",
				"group-data-[variant=line]/tabs-list:hover:text-orange-500",
				"group-data-[variant=line]/tabs-list:data-[state=active]:border-orange-500",
				"group-data-[variant=line]/tabs-list:data-[state=active]:text-orange-600",
				"group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",

				className,
			)}
			{...props}
		/>
	);
};
