import { merge } from "@bleakedev/bleake-core";
import { Dialog as SheetPrimitive } from "radix-ui";
import type React from "react";

export const SheetOverlay = ({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>): React.ReactElement => {
	return (
		<SheetPrimitive.Overlay
			data-slot="sheet-overlay"
			className={merge(
				"fixed inset-0 z-50 bg-black/20 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
				className,
			)}
			{...props}
		/>
	);
};
