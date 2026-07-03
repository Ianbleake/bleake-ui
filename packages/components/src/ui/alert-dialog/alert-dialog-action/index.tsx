import { merge } from "@bleakedev/bleake-core";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";
import { Button } from "../../button";

export const AlertDialogAction = ({
	className,
	variant = "default",
	size = "default",
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
	Pick<React.ComponentProps<typeof Button>, "variant" | "size">): React.ReactElement => {
	return (
		<Button
			variant={variant}
			size={size}
			asChild
		>
			<AlertDialogPrimitive.Action
				data-slot="alert-dialog-action"
				className={merge(className)}
				{...props}
			/>
		</Button>
	);
};
