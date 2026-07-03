import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarPortal = ({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>): React.ReactElement => {
	return (
		<MenubarPrimitive.Portal
			data-slot="menubar-portal"
			{...props}
		/>
	);
};
