import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const PopoverDescription = ({
	className,
	...props
}: React.ComponentProps<"p">): React.ReactElement => {
	return (
		<p
			data-slot="popover-description"
			className={merge("text-muted-foreground", className)}
			{...props}
		/>
	);
};
