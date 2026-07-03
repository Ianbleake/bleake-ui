import { merge } from "@bleakedev/bleake-core";
import { Command as CommandPrimitive } from "cmdk";
import type React from "react";

export const Command = ({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive>): React.ReactElement => {
	return (
		<CommandPrimitive
			data-slot="command"
			className={merge(
				"flex size-full flex-col overflow-hidden rounded-xl bg-popover p-1 text-popover-foreground",
				className,
			)}
			{...props}
		/>
	);
};
