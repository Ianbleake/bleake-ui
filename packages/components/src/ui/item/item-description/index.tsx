import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const ItemDescription = ({
	className,
	...props
}: React.ComponentProps<"p">): React.ReactElement => {
	return (
		<p
			data-slot="item-description"
			className={merge(
				"line-clamp-2 text-left text-xs/relaxed font-normal text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
				className,
			)}
			{...props}
		/>
	);
};
