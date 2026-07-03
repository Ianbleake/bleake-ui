import { merge } from "@bleakedev/bleake-core";
import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export const DialogTitle = ({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Title>): React.ReactElement => {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={merge("text-sm font-medium", className)}
			{...props}
		/>
	);
};
