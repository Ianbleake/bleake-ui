import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const MenubarShortcut = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			data-slot="menubar-shortcut"
			className={merge(
				"ml-auto text-[0.625rem] tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
};
