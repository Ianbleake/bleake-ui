import { merge } from "@bleakedev/bleake-core";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import type React from "react";
import { AlertDialogOverlay } from "../alert-dialog-overlay";
import { AlertDialogPortal } from "../alert-dialog-portal";

export const AlertDialogContent = ({
	className,
	size = "default",
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & {
	size?: "default" | "sm" | "lg";
}): React.ReactElement => {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Content
				data-slot="alert-dialog-content"
				data-size={size}
				className={merge(
					"group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg bg-background p-6 ring-1 ring-foreground/10 duration-100 outline-none",
					"data-[size=sm]:max-w-sm",
					"data-[size=default]:max-w-sm",
					"data-[size=default]:sm:max-w-lg",
					"data-[size=lg]:max-w-2xl",
					"data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
					"data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
					className,
				)}
				{...props}
			/>
		</AlertDialogPortal>
	);
};
