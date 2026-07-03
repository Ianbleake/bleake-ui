import { merge } from "@bleakedev/bleake-core";
import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export const SelectSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>): React.ReactElement => {
	return (
		<SelectPrimitive.Separator
			data-slot="select-separator"
			className={merge("pointer-events-none -mx-1 my-1 h-px bg-border/50", className)}
			{...props}
		/>
	);
};
