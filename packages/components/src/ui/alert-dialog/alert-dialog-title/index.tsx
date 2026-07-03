import { merge } from "@bleakedev/bleake-core";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";

export const AlertDialogTitle = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>): React.ReactElement => {
	return (
		<AlertDialogPrimitive.Title
			data-slot="alert-dialog-title"
			className={merge(
				"text-sm font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
				className,
			)}
			{...props}
		/>
	);
};
