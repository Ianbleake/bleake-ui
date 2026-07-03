import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";
import { Separator } from "../../separator";

export const SidebarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => {
	return (
		<Separator
			data-slot="sidebar-separator"
			data-sidebar="separator"
			className={merge("mx-2 w-auto bg-sidebar-border", className)}
			{...props}
		/>
	);
};
