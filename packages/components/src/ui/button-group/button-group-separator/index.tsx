import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Separator } from "../../separator";

export const ButtonGroupSeparator = ({
	className,
	orientation = "vertical",
	...props
}: React.ComponentProps<typeof Separator>): React.ReactElement => {
	return (
		<Separator
			data-slot="button-group-separator"
			orientation={orientation}
			className={merge(
				"relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto",
				className,
			)}
			{...props}
		/>
	);
};
