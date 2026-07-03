import { merge } from "@bleakedev/bleake-core";
import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export const SelectLabel = ({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Label>): React.ReactElement => {
	return (
		<SelectPrimitive.Label
			data-slot="select-label"
			className={merge("px-2 py-1.5 text-xs text-muted-foreground", className)}
			{...props}
		/>
	);
};
