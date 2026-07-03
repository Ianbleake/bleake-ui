import { merge } from "@bleakedev/bleake-core";
import type { VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";
import type React from "react";
import { toggleVariants } from "./style-variants";

export const Toggle = ({
	className,
	variant = "default",
	size = "default",
	...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
	VariantProps<typeof toggleVariants>): React.ReactElement => {
	return (
		<TogglePrimitive.Root
			data-slot="toggle"
			className={merge(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	);
};
