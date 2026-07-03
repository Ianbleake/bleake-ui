import { merge } from "@bleakedev/bleake-core";
import { ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export const SelectScrollUpButton = ({
	className,
	...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): React.ReactElement => {
	return (
		<SelectPrimitive.ScrollUpButton
			data-slot="select-scroll-up-button"
			className={merge(
				"z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-3.5",
				className,
			)}
			{...props}
		>
			<ChevronUpIcon />
		</SelectPrimitive.ScrollUpButton>
	);
};
