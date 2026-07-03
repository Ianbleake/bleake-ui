import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const SheetClose = (
	props: React.ComponentProps<typeof SheetPrimitive.Close>,
): React.ReactElement => {
	return (
		<SheetPrimitive.Close
			data-slot="sheet-close"
			{...props}
		/>
	);
};
