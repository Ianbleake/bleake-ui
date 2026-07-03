import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";

export const ComboboxGroup = ({
	className,
	...props
}: ComboboxPrimitive.Group.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Group
			data-slot="combobox-group"
			className={merge(className)}
			{...props}
		/>
	);
};
