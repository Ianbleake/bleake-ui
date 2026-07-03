import { merge } from "@bleakedev/bleake-core";
import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";
import { Button } from "../../button";

export const DialogFooter = ({
	className,
	showCloseButton = false,
	children,
	...props
}: React.ComponentProps<"div"> & {
	showCloseButton?: boolean;
}): React.ReactElement => {
	return (
		<div
			data-slot="dialog-footer"
			className={merge("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
			{...props}
		>
			{children}
			{showCloseButton && (
				<DialogPrimitive.Close asChild>
					<Button variant="outline">Close</Button>
				</DialogPrimitive.Close>
			)}
		</div>
	);
};
