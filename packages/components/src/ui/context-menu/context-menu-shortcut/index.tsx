import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const ContextMenuShortcut = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={merge(
				"ml-auto text-[0.625rem] tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
};
