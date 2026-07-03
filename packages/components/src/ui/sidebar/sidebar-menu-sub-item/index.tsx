import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarMenuSubItem = ({ className, ...props }: ComponentProps<"li">) => {
	return (
		<li
			data-slot="sidebar-menu-sub-item"
			data-sidebar="menu-sub-item"
			className={merge("group/menu-sub-item relative", className)}
			{...props}
		/>
	);
};
