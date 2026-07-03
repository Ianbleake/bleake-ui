import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const Card = ({
	className,
	size = "default",
	...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }): React.ReactElement => {
	return (
		<div
			data-slot="card"
			data-size={size}
			className={merge(
				"group/card flex flex-col gap-4 overflow-hidden rounded-lg bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 *:[img:first-child]:rounded-t-lg *:[img:last-child]:rounded-b-lg",
				className,
			)}
			{...props}
		/>
	);
};
