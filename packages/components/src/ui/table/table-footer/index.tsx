import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableFooter = ({
	className,
	...props
}: React.ComponentProps<"tfoot">): React.ReactElement => {
	return (
		<tfoot
			data-slot="table-footer"
			className={merge("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
			{...props}
		/>
	);
};
