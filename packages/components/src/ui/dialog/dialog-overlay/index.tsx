import { merge } from "@bleakedev/bleake-core";
import { Dialog as DialogPrimitive } from "radix-ui";
import type React from "react";

export const DialogOverlay = ({
	className,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>): React.ReactElement => {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={merge(
				"fixed inset-0 isolate z-50 bg-black/80 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
				className,
			)}
			{...props}
		/>
	);
};
