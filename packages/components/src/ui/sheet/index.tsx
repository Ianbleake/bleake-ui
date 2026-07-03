import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const Sheet = (
	props: React.ComponentProps<typeof SheetPrimitive.Root>,
): React.ReactElement => {
	return (
		<SheetPrimitive.Root
			data-slot="sheet"
			{...props}
		/>
	);
};
