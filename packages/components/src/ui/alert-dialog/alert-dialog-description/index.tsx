import { merge } from "@bleakedev/bleake-core";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";

export const AlertDialogDescription = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>): React.ReactElement => {
	return (
		<AlertDialogPrimitive.Description
			data-slot="alert-dialog-description"
			className={merge(
				"text-xs/relaxed text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
				className,
			)}
			{...props}
		/>
	);
};
