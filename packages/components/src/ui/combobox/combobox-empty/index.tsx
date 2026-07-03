import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";

export const ComboboxEmpty = ({
	className,
	...props
}: ComboboxPrimitive.Empty.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Empty
			data-slot="combobox-empty"
			className={merge(
				"hidden w-full justify-center py-2 text-center text-xs/relaxed text-muted-foreground group-data-empty/combobox-content:flex",
				className,
			)}
			{...props}
		/>
	);
};
