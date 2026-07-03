import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const SheetTrigger = (
	props: React.ComponentProps<typeof SheetPrimitive.Trigger>,
): React.ReactElement => {
	return (
		<SheetPrimitive.Trigger
			data-slot="sheet-trigger"
			{...props}
		/>
	);
};
