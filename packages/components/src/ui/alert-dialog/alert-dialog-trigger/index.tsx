import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";

export const AlertDialogTrigger = (
	props: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>,
): React.ReactElement => {
	return (
		<AlertDialogPrimitive.Trigger
			data-slot="alert-dialog-trigger"
			{...props}
		/>
	);
};
