import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const BreadcrumbList = ({
	className,
	...props
}: React.ComponentProps<"ol">): React.ReactElement => {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={merge(
				"flex flex-wrap items-center gap-1.5 text-xs/relaxed wrap-break-word text-muted-foreground",
				className,
			)}
			{...props}
		/>
	);
};
