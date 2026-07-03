import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarFooter = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			data-slot="sidebar-footer"
			data-sidebar="footer"
			className={merge("flex flex-col gap-2 p-2", className)}
			{...props}
		/>
	);
};
