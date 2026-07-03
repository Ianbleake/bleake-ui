import { merge } from "@bleakedev/bleake-core";
import { Slot } from "radix-ui";
import type React from "react";

export const BreadcrumbLink = ({
	asChild,
	className,
	...props
}: React.ComponentProps<"a"> & { asChild?: boolean }): React.ReactElement => {
	const Comp = asChild ? Slot.Root : "a";
	return (
		<Comp
			data-slot="breadcrumb-link"
			className={merge("transition-colors hover:text-foreground", className)}
			{...props}
		/>
	);
};
