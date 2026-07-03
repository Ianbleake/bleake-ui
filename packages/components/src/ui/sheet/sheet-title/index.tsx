import { merge } from "@bleakedev/bleake-core";
import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const SheetTitle = ({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Title>): React.ReactElement => {
	return (
		<SheetPrimitive.Title
			data-slot="sheet-title"
			className={merge("text-sm font-medium text-foreground", className)}
			{...props}
		/>
	);
};
