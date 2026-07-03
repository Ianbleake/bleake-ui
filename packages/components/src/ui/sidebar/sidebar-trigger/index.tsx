import { merge } from "@bleakedev/bleake-core";
import { PanelLeftIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "../../button";
import { useSidebar } from "../useSidebar";

export const SidebarTrigger = ({ className, onClick, ...props }: ComponentProps<typeof Button>) => {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			data-sidebar="trigger"
			data-slot="sidebar-trigger"
			variant="link"
			size="icon"
			className={merge("text-gray-900", className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<PanelLeftIcon />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
};
