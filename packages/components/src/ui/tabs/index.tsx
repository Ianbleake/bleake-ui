import { merge } from "@bleakedev/bleake-core";
import { Tabs as TabsPrimitive } from "radix-ui";
import type React from "react";

export { TabsContent } from "./tabs-content";
export { TabsList } from "./tabs-list";
export { TabsTrigger } from "./tabs-trigger";

export const Tabs = ({
	className,
	orientation = "horizontal",
	...props
}: React.ComponentProps<typeof TabsPrimitive.Root>): React.ReactElement => {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			data-orientation={orientation}
			className={merge("group/tabs flex gap-3 data-horizontal:flex-col", className)}
			{...props}
		/>
	);
};
