import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableRow = ({
	className,
	...props
}: React.ComponentProps<"tr">): React.ReactElement => {
	return (
		<tr
			data-slot="table-row"
			className={merge(
				"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
				className,
			)}
			{...props}
		/>
	);
};
