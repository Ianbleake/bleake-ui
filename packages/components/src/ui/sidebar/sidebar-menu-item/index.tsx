import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarMenuItem = ({ className, ...props }: ComponentProps<"li">) => {
	return (
		<li
			data-slot="sidebar-menu-item"
			data-sidebar="menu-item"
			className={merge("group/menu-item relative", className)}
			{...props}
		/>
	);
};
