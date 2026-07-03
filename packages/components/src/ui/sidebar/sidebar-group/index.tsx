import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarGroup = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			data-slot="sidebar-group"
			data-sidebar="group"
			className={merge("relative flex w-full min-w-0 flex-col px-2 py-1", className)}
			{...props}
		/>
	);
};
