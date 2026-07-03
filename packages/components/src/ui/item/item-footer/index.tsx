import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const ItemFooter = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="item-footer"
			className={merge("flex basis-full items-center justify-between gap-2", className)}
			{...props}
		/>
	);
};
