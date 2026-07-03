import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const CardTitle = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="card-title"
			className={merge("text-sm font-medium", className)}
			{...props}
		/>
	);
};
