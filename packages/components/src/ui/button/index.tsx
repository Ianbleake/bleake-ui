import { merge } from "@bleakedev/bleake-core";
import { Slot } from "radix-ui";
import type React from "react";
import { type ButtonVariants, buttonVariants } from "./style-variants";

type Props = React.ComponentProps<"button"> &
	ButtonVariants & {
		asChild?: boolean;
	};

export const Button = ({
	className,
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: Props): React.ReactElement => {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={merge(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
};
