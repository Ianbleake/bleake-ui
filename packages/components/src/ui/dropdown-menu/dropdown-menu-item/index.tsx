import { merge } from "@bleakedev/bleake-core";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import type React from "react";

const baseStyles =
	"cursor-pointer group/dropdown-menu-item relative border border-transparent flex min-h-7 cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none \
	data-inset:pl-7.5 \
	data-disabled:pointer-events-none data-disabled:opacity-50 \
	[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5";

const variants = {
	default:
		"hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200/50 focus:bg-orange-50 focus:border focus:border-orange-200/50 focus:text-orange-500",

	destructive:
		"text-destructive hover:bg-destructive/10 hover:text-destructive hover:border-destructive/10 focus:bg-destructive/10 focus:border focus:border-destructive/10 focus:text-destructive dark:focus:bg-destructive/20",

	success:
		"text-green-600 hover:text-green-600 focus:bg-green-50 focus:border focus:border-green-200/40 focus:text-green-600 dark:focus:bg-green-900/20",
};

export const DropdownMenuItem = ({
	className,
	inset,
	variant = "default",
	styleClear = true,
	...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
	inset?: boolean;
	variant?: "default" | "destructive" | "success";
	styleClear?: boolean;
}): React.ReactElement => {
	const styles = styleClear ? `${baseStyles} ${variants[variant]}` : baseStyles;

	return (
		<DropdownMenuPrimitive.Item
			data-slot="dropdown-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={merge(styles, className)}
			{...props}
		/>
	);
};
