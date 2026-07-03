import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableCaption = ({
	className,
	...props
}: React.ComponentProps<"caption">): React.ReactElement => {
	return (
		<caption
			data-slot="table-caption"
			className={merge("mt-4 text-xs text-muted-foreground", className)}
			{...props}
		/>
	);
};
