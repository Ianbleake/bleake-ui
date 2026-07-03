import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import type React from "react";

export const ComboboxCollection = ({
	...props
}: ComboboxPrimitive.Collection.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Collection
			data-slot="combobox-collection"
			{...props}
		/>
	);
};
