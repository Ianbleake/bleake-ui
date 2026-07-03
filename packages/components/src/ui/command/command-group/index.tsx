import { merge } from "@bleakedev/bleake-core";
import { Command as CommandPrimitive } from "cmdk";
import type React from "react";

export const CommandGroup = ({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Group>): React.ReactElement => {
	return (
		<CommandPrimitive.Group
			data-slot="command-group"
			className={merge(
				"overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2.5 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
};
