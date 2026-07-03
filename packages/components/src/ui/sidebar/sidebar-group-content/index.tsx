import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarGroupContent = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			data-slot="sidebar-group-content"
			data-sidebar="group-content"
			className={merge("w-full text-xs", className)}
			{...props}
		/>
	);
};
