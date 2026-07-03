import { merge } from "@bleakedev/bleake-core";
import { Tabs as TabsPrimitive } from "radix-ui";
import type React from "react";

export const TabsContent = ({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Content>): React.ReactElement => {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={merge("flex-1 text-xs/relaxed outline-none", className)}
			{...props}
		/>
	);
};
