import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const CardDescription = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="card-description"
			className={merge("text-xs/relaxed text-muted-foreground", className)}
			{...props}
		/>
	);
};
