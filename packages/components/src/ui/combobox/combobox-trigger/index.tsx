import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { merge } from "@bleakedev/bleake-core";
import { ChevronDownIcon } from "lucide-react";

export const ComboboxTrigger = ({
	className,
	children,
	...props
}: ComboboxPrimitive.Trigger.Props): React.ReactElement => {
	return (
		<ComboboxPrimitive.Trigger
			data-slot="combobox-trigger"
			className={merge("[&_svg:not([class*='size-'])]:size-3.5", className)}
			{...props}
		>
			{children}
			<ChevronDownIcon className="pointer-events-none size-3.5 text-muted-foreground" />
		</ComboboxPrimitive.Trigger>
	);
};
