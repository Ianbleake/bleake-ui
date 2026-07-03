import { merge } from "@bleakedev/bleake-core";
import type { VariantProps } from "class-variance-authority";
import type React from "react";
import { Button } from "../../button";
import { inputGroupButtonVariants } from "../style-variants";

export const InputGroupButton = ({
	className,
	type = "button",
	variant = "ghost",
	size = "xs",
	...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
	VariantProps<typeof inputGroupButtonVariants>): React.ReactElement => {
	return (
		<Button
			type={type}
			data-size={size}
			variant={variant}
			className={merge(inputGroupButtonVariants({ size }), className)}
			{...props}
		/>
	);
};
