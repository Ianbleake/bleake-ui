import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableCell = ({
	className,
	...props
}: React.ComponentProps<"td">): React.ReactElement => {
	return (
		<td
			data-slot="table-cell"
			className={merge(
				"p-2 py-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...props}
		/>
	);
};
