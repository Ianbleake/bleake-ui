import { merge } from "@bleakedev/bleake-core";
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { buttonGroupVariants } from "./styleVariants";

export const ButtonGroup = ({
	className,
	orientation,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>): React.ReactElement => {
	return (
		<div
			data-slot="button-group"
			data-orientation={orientation}
			className={merge(buttonGroupVariants({ orientation }), className)}
			{...props}
		/>
	);
};
