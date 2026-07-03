import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";

export const ComboboxSeparator = ({
	className,
	...props
}: ComboboxPrimitive.Separator.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Separator
			data-slot="combobox-separator"
			className={merge("-mx-1 my-1 h-px bg-border/50", className)}
			{...props}
		/>
	);
};
