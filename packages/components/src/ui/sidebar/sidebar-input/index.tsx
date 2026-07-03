import { merge } from "@bleakedev/bleake-core";
import type { ComponentProps } from "react";
import { Input } from "../../input";

export const SidebarInput = ({ className, ...props }: ComponentProps<typeof Input>) => {
	return (
		<Input
			data-slot="sidebar-input"
			data-sidebar="input"
			className={merge("h-8 w-full border-input bg-muted/20 dark:bg-muted/30", className)}
			{...props}
		/>
	);
};
