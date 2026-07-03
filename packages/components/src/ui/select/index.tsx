import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export { SelectContent } from "./select-content";
export { SelectGroup } from "./select-group";
export { SelectItem } from "./select-item";
export { SelectLabel } from "./select-label";
export { SelectScrollDownButton } from "./select-scroll-downtown";
export { SelectScrollUpButton } from "./select-scroll-up-button";
export { SelectSeparator } from "./select-separator";
export { SelectTrigger } from "./select-trigger";
export { SelectValue } from "./select-value";

export const Select = (
	props: React.ComponentProps<typeof SelectPrimitive.Root>,
): React.ReactElement => {
	return (
		<SelectPrimitive.Root
			data-slot="select"
			{...props}
		/>
	);
};
