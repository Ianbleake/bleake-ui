import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableHead = ({
	className,
	...props
}: React.ComponentProps<"th">): React.ReactElement => {
	return (
		<th
			data-slot="table-head"
			className={merge(
				"h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...props}
		/>
	);
};
