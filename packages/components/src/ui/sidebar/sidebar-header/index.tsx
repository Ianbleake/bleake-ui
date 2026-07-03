import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import type { ComponentProps } from "react";

export const SidebarHeader = ({
	className,
	...props
}: ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="sidebar-header"
			data-sidebar="header"
			className={merge("flex flex-col gap-2 p-2", className)}
			{...props}
		/>
	);
};
