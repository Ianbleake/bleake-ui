import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const CardFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
	return (
		<div
			data-slot="card-footer"
			className={merge(
				"flex items-center rounded-b-lg px-4 group-data-[size=sm]/card:px-3 [.border-t]:pt-4 group-data-[size=sm]/card:[.border-t]:pt-3",
				className,
			)}
			{...props}
		/>
	);
};
