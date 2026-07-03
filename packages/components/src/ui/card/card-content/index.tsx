import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const CardContent = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="card-content"
			className={merge("px-4 group-data-[size=sm]/card:px-3", className)}
			{...props}
		/>
	);
};
