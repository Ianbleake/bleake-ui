import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarMenu = ({ className, ...props }: ComponentProps<"ul">) => {
	return (
		<ul
			data-slot="sidebar-menu"
			data-sidebar="menu"
			className={merge("flex w-full min-w-0 flex-col gap-px", className)}
			{...props}
		/>
	);
};
