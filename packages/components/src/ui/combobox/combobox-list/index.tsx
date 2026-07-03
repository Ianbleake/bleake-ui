import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";

export const ComboboxList = ({
	className,
	...props
}: ComboboxPrimitive.List.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.List
			data-slot="combobox-list"
			className={merge(
				"no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0",
				className,
			)}
			{...props}
		/>
	);
};
