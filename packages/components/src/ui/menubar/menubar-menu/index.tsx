import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarMenu = ({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>): React.ReactElement => {
	return (
		<MenubarPrimitive.Menu
			data-slot="menubar-menu"
			{...props}
		/>
	);
};
