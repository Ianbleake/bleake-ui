import { merge } from "@bleakedev/bleake-core";
import { MoreHorizontalIcon } from "lucide-react";
import type React from "react";

export const PaginationEllipsis = ({
	className,
	...props
}: React.ComponentProps<"span">): React.ReactElement => {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={merge(
				"flex size-7 items-center justify-center [&_svg:not([class*='size-'])]:size-3.5",
				className,
			)}
			{...props}
		>
			<MoreHorizontalIcon />
			<span className="sr-only">More pages</span>
		</span>
	);
};
