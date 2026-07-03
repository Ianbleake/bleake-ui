import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const BreadcrumbPage = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			data-slot="breadcrumb-page"
			aria-disabled="true"
			aria-current="page"
			className={merge("font-normal text-foreground", className)}
			{...props}
		/>
	);
};
