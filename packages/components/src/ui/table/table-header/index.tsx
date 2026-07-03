import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const TableHeader = ({
	className,
	...props
}: React.ComponentProps<"thead">): React.ReactElement => {
	return (
		<thead
			data-slot="table-header"
			className={merge("[&_tr]:border-b", className)}
			{...props}
		/>
	);
};
