import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const PopoverHeader = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="popover-header"
			className={merge("flex flex-col gap-1 text-xs", className)}
			{...props}
		/>
	);
};
