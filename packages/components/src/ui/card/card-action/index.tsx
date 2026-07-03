import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const CardAction = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="card-action"
			className={merge("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
			{...props}
		/>
	);
};
