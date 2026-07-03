import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const BreadcrumbItem = ({
	className,
	...props
}: React.ComponentProps<"li">): React.ReactElement => {
	return (
		<li
			data-slot="breadcrumb-item"
			className={merge("inline-flex items-center gap-1", className)}
			{...props}
		/>
	);
};
