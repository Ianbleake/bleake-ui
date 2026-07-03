import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";

export const AlertDialogPortal = (
	props: React.ComponentProps<typeof AlertDialogPrimitive.Portal>,
): React.ReactElement => {
	return (
		<AlertDialogPrimitive.Portal
			data-slot="alert-dialog-portal"
			{...props}
		/>
	);
};
