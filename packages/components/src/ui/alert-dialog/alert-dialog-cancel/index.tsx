import { merge } from "@bleakedev/bleake-core";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";
import { Button } from "../../button";

export const AlertDialogCancel = ({
	className,
	variant = "outline",
	size = "default",
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
	Pick<React.ComponentProps<typeof Button>, "variant" | "size">): React.ReactElement => {
	return (
		<Button
			variant={variant}
			size={size}
			asChild
		>
			<AlertDialogPrimitive.Cancel
				data-slot="alert-dialog-cancel"
				className={merge(className)}
				{...props}
			/>
		</Button>
	);
};
