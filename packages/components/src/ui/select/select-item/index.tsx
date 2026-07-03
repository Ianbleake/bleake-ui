import { merge } from "@bleakedev/bleake-core";
import { CheckIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import type React from "react";

export const SelectItem = ({
	className,
	children,
	...props
}: React.ComponentProps<typeof SelectPrimitive.Item>): React.ReactElement => {
	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={merge(
				"relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none border border-transparent focus:bg-orange-50 focus:border focus:border-orange-200/50 focus:text-orange-500! focus:cursor-pointer not-data-[variant=destructive]:focus:**:text-orange-500! data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute right-2 flex items-center justify-center">
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className="pointer-events-none" />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	);
};
