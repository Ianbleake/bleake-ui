import { merge } from "@bleakedev/bleake-core";
import { MoreHorizontalIcon } from "lucide-react";
import type React from "react";

export const BreadcrumbEllipsis = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={merge("flex size-4 items-center justify-center [&>svg]:size-3.5", className)}
			{...props}
		>
			<MoreHorizontalIcon />
			<span className="sr-only">More</span>
		</span>
	);
};
