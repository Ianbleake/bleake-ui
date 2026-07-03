import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarRadioGroup = ({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>): React.ReactElement => {
	return (
		<MenubarPrimitive.RadioGroup
			data-slot="menubar-radio-group"
			{...props}
		/>
	);
};
