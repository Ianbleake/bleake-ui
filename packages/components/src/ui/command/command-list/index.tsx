import { merge } from "@bleakedev/bleake-core";
import { Command as CommandPrimitive } from "cmdk";
import type React from "react";

export const CommandList = ({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.List>): React.ReactElement => {
	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={merge(
				"no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
				className,
			)}
			{...props}
		/>
	);
};
