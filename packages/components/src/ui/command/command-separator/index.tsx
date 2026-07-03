import { merge } from "@bleakedev/bleake-core";
import { Command as CommandPrimitive } from "cmdk";
import type React from "react";

export const CommandSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>): React.ReactElement => {
	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={merge("-mx-1 my-1 h-px bg-border/50", className)}
			{...props}
		/>
	);
};
