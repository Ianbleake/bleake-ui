import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const DropdownMenuShortcut = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={merge(
				"ml-auto text-[0.625rem] tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
};
