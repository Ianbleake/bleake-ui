import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Input } from "../../input";

export const InputGroupInput = ({
	className,
	...props
}: React.ComponentProps<"input">): React.ReactElement => {
	return (
		<Input
			data-slot="input-group-control"
			className={merge(
				"flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
				className,
			)}
			{...props}
		/>
	);
};
