import { merge } from "@bleakedev/bleake-core";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarSubContent = ({
	className,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>): React.ReactElement => {
	return (
		<MenubarPrimitive.SubContent
			data-slot="menubar-sub-content"
			className={merge(
				"z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
				className,
			)}
			{...props}
		/>
	);
};
