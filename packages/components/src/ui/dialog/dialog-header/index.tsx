import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const DialogHeader = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="dialog-header"
			className={merge("flex flex-col gap-1", className)}
			{...props}
		/>
	);
};
