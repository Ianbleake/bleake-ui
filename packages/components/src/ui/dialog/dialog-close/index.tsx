import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export const DialogClose = ({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Close>): React.ReactElement => {
	return (
		<DialogPrimitive.Close
			data-slot="dialog-close"
			{...props}
		/>
	);
};
