import { merge } from "@bleakedev/bleake-core";
import { Command as CommandPrimitive } from "cmdk";
import type React from "react";

export const CommandEmpty = ({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>): React.ReactElement => {
	return (
		<CommandPrimitive.Empty
			data-slot="command-empty"
			className={merge("py-6 text-center text-xs/relaxed", className)}
			{...props}
		/>
	);
};
