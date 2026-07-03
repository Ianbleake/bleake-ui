import { merge } from "@bleakedev/bleake-core";
import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const SheetDescription = ({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Description>): React.ReactElement => {
	return (
		<SheetPrimitive.Description
			data-slot="sheet-description"
			className={merge("text-xs/relaxed text-muted-foreground", className)}
			{...props}
		/>
	);
};
