import { merge } from "@bleakedev/bleake-core";
import { Slot } from "radix-ui";
import type React from "react";

export const ButtonGroupText = ({
	className,
	asChild = false,
	...props
}: React.ComponentProps<"div"> & { asChild?: boolean }): React.ReactElement => {
	const Comp = asChild ? Slot.Root : "div";

	return (
		<Comp
			className={merge(
				"flex items-center gap-2 rounded-md border bg-muted px-2.5 text-xs/relaxed font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
};
