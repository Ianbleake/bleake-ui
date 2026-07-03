import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export { DialogClose } from "./dialog-close";
export { DialogContent } from "./dialog-content";
export { DialogDescription } from "./dialog-description";
export { DialogFooter } from "./dialog-footer";
export { DialogHeader } from "./dialog-header";
export { DialogOverlay } from "./dialog-overlay";
export { DialogPortal } from "./dialog-portal";
export { DialogTitle } from "./dialog-title";
export { DialogTrigger } from "./dialog-trigger";

export const Dialog = ({
	...props
}: React.ComponentProps<typeof DialogPrimitive.Root>): React.ReactElement => {
	return (
		<DialogPrimitive.Root
			data-slot="dialog"
			{...props}
		/>
	);
};
