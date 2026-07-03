import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableBody = ({
	className,
	...props
}: React.ComponentProps<"tbody">): React.ReactElement => {
	return (
		<tbody
			data-slot="table-body"
			className={merge("[&_tr:last-child]:border-0", className)}
			{...props}
		/>
	);
};
