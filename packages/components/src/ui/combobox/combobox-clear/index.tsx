import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";
import { XIcon } from "lucide-react";
import { InputGroupButton } from "../../input-group";

export const ComboboxClear = ({
	className,
	...props
}: ComboboxPrimitive.Clear.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Clear
			data-slot="combobox-clear"
			render={
				<InputGroupButton
					variant="ghost"
					size="icon-xs"
				/>
			}
			className={merge(className)}
			{...props}
		>
			<XIcon className="pointer-events-none" />
		</ComboboxPrimitive.Clear>
	);
};
