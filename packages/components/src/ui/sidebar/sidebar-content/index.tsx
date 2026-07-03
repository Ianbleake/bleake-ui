import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";

export const SidebarContent = ({ className, ...props }: ComponentProps<"div">) => {
	return (
		<div
			data-slot="sidebar-content"
			data-sidebar="content"
			className={merge(
				"no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
				className,
			)}
			{...props}
		/>
	);
};
