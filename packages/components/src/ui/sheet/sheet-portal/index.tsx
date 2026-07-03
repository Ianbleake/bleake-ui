import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const SheetPortal = (
	props: React.ComponentProps<typeof SheetPrimitive.Portal>,
): React.ReactElement => {
	return (
		<SheetPrimitive.Portal
			data-slot="sheet-portal"
			{...props}
		/>
	);
};
