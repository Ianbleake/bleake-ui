import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Separator } from "../../separator";

export const ItemSeparator = ({
	className,
	...props
}: React.ComponentProps<typeof Separator>): React.ReactElement => {
	return (
		<Separator
			data-slot="item-separator"
			orientation="horizontal"
			className={merge("my-2", className)}
			{...props}
		/>
	);
};
