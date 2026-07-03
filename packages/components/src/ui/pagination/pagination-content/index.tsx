import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const PaginationContent = ({
	className,
	...props
}: React.ComponentProps<"ul">): React.ReactElement => {
	return (
		<ul
			data-slot="pagination-content"
			className={merge("flex items-center gap-0.5", className)}
			{...props}
		/>
	);
};
