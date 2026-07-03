import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import type { ReactElement } from "react";

export const CardHeader = ({ className, ...props }: React.ComponentProps<"div">): ReactElement => {
	return (
		<div
			data-slot="card-header"
			className={merge(
				"group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-lg px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
				className,
			)}
			{...props}
		/>
	);
};
