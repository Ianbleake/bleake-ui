import { merge } from "@bleakedev/bleake-core";
import { CheckIcon } from "lucide-react";
import { Menubar as MenubarPrimitive } from "radix-ui";
import type React from "react";

export const MenubarCheckboxItem = ({
	className,
	children,
	checked,
	inset,
	...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem> & {
	inset?: boolean;
}): React.ReactElement => {
	return (
		<MenubarPrimitive.CheckboxItem
			data-slot="menubar-checkbox-item"
			data-inset={inset}
			className={merge(
				"relative flex min-h-7 cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-7.5 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7.5 data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4">
				<MenubarPrimitive.ItemIndicator>
					<CheckIcon />
				</MenubarPrimitive.ItemIndicator>
			</span>
			{children}
		</MenubarPrimitive.CheckboxItem>
	);
};
