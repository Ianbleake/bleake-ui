import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";

export const ComboboxLabel = ({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) => {
	return (
		<ComboboxPrimitive.GroupLabel
			data-slot="combobox-label"
			className={merge("px-2 py-1.5 text-xs text-muted-foreground", className)}
			{...props}
		/>
	);
};
