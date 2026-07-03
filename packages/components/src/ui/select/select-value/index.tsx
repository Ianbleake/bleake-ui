import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export const SelectValue = (
	props: React.ComponentProps<typeof SelectPrimitive.Value>,
): React.ReactElement => {
	return (
		<SelectPrimitive.Value
			data-slot="select-value"
			{...props}
		/>
	);
};
