import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Textarea } from "../../textarea";

export const InputGroupTextarea = ({
	className,
	...props
}: React.ComponentProps<"textarea">): React.ReactElement => {
	return (
		<Textarea
			data-slot="input-group-control"
			className={merge(
				"flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
				className,
			)}
			{...props}
		/>
	);
};
