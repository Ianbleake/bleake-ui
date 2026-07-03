import { merge } from "@bleakedev/bleake-core";
import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export const SelectGroup = ({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Group>): React.ReactElement => {
	return (
		<SelectPrimitive.Group
			data-slot="select-group"
			className={merge("scroll-my-1 p-1", className)}
			{...props}
		/>
	);
};
