import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const Table = ({
	className,
	...props
}: React.ComponentProps<"table">): React.ReactElement => {
	return (
		<div
			data-slot="table-container"
			className="relative w-full overflow-x-auto"
		>
			<table
				data-slot="table"
				className={merge("w-full caption-bottom text-xs", className)}
				{...props}
			/>
		</div>
	);
};
