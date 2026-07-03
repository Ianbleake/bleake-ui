import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const SheetFooter = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="sheet-footer"
			className={merge("mt-auto flex flex-col gap-2 p-6", className)}
			{...props}
		/>
	);
};
