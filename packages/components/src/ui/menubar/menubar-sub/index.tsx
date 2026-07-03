import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarSub = ({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>): React.ReactElement => {
	return (
		<MenubarPrimitive.Sub
			data-slot="menubar-sub"
			{...props}
		/>
	);
};
