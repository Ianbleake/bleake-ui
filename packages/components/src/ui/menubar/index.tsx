import { merge } from "@bleakedev/bleake-core";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const Menubar = ({
	className,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>): React.ReactElement => {
	return (
		<MenubarPrimitive.Root
			data-slot="menubar"
			className={merge("flex h-9 items-center rounded-lg border p-1", className)}
			{...props}
		/>
	);
};
