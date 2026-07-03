import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import type React from "react";

export const ComboboxValue = ({ ...props }: ComboboxPrimitive.Value.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Value
			data-slot="combobox-value"
			{...props}
		/>
	);
};
