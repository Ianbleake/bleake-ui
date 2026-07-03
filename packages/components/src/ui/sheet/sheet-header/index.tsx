import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const SheetHeader = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="sheet-header"
			className={merge("flex flex-col gap-1.5 p-6", className)}
			{...props}
		/>
	);
};
