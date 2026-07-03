import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const PopoverTitle = ({
	className,
	...props
}: React.ComponentProps<"h2">): React.ReactElement => {
	return (
		<div
			data-slot="popover-title"
			className={merge("text-sm font-medium", className)}
			{...props}
		/>
	);
};
