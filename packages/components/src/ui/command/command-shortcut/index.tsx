import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const CommandShortcut = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			data-slot="command-shortcut"
			className={merge(
				"ml-auto text-[0.625rem] tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground",
				className,
			)}
			{...props}
		/>
	);
};
