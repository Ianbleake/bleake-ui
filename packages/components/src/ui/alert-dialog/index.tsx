import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";

export const AlertDialog = (
	props: React.ComponentProps<typeof AlertDialogPrimitive.Root>,
): React.ReactElement => {
	return (
		<AlertDialogPrimitive.Root
			data-slot="alert-dialog"
			{...props}
		/>
	);
};
