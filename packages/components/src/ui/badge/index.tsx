import { merge } from "@bleakedev/bleake-core";
import type { VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type React from "react";
import { badgeVariants } from "./style-variants";

export const Badge = ({
	className,
	variant = "default",
	asChild = false,
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) => {
	const Comp = asChild ? Slot.Root : "span";

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			className={merge(badgeVariants({ variant }), className)}
			{...props}
		/>
	);
};
