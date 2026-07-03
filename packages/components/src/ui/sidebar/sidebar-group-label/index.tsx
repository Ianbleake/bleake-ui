import { merge } from "@bleakedev/bleake-core";
import { Slot } from "radix-ui";
import type { ComponentProps } from "react";

export const SidebarGroupLabel = ({
	className,
	asChild = false,
	...props
}: ComponentProps<"div"> & { asChild?: boolean }) => {
	const Comp = asChild ? Slot.Root : "div";

	return (
		<Comp
			data-slot="sidebar-group-label"
			data-sidebar="group-label"
			className={merge(
				"flex h-8 shrink-0 items-center rounded-md px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground ring-sidebar-ring outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:hidden focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
				className,
			)}
			{...props}
		/>
	);
};
