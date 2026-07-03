import { merge } from "@bleakedev/bleake-core";
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { inputGroupAddonVariants } from "../style-variants";

export const InputGroupAddon = ({
	className,
	align = "inline-start",
	...props
}: React.ComponentProps<"div"> &
	VariantProps<typeof inputGroupAddonVariants>): React.ReactElement => {
	return (
		<div
			data-slot="input-group-addon"
			data-align={align}
			className={merge(inputGroupAddonVariants({ align }), className)}
			{...props}
		/>
	);
};
