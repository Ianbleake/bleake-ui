import { merge } from "@bleakedev/bleake-core";
import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export const DialogDescription = ({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Description>): React.ReactElement => {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={merge(
				"text-xs/relaxed text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
				className,
			)}
			{...props}
		/>
	);
};
