import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export const DialogTrigger = ({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>): React.ReactElement => {
	return (
		<DialogPrimitive.Trigger
			data-slot="dialog-trigger"
			{...props}
		/>
	);
};
