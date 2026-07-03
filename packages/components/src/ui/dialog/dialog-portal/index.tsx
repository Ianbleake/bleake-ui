import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export const DialogPortal = ({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>): React.ReactElement => {
	return (
		<DialogPrimitive.Portal
			data-slot="dialog-portal"
			{...props}
		/>
	);
};
