import { merge } from "@bleakedev/bleake-core";
import { ChevronRightIcon } from "lucide-react";
import type React from "react";

export const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: React.ComponentProps<"li">): React.ReactElement => {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={merge("[&>svg]:size-3.5", className)}
			{...props}
		>
			{children ?? <ChevronRightIcon />}
		</li>
	);
};
