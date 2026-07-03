import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";

export const ComboboxChipsInput = ({
	className,
	...props
}: ComboboxPrimitive.Input.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Input
			data-slot="combobox-chip-input"
			className={merge("min-w-16 flex-1 outline-none", className)}
			{...props}
		/>
	);
};
