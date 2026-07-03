import { merge } from "@bleakedev/bleake-core";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarTrigger = ({
	className,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>): React.ReactElement => {
	return (
		<MenubarPrimitive.Trigger
			data-slot="menubar-trigger"
			className={merge(
				"flex items-center rounded-[calc(var(--radius-md)-2px)] px-2 py-[calc(--spacing(0.85))] text-xs/relaxed font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted",
				className,
			)}
			{...props}
		/>
	);
};
