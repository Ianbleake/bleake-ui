import { merge } from "@bleakedev/bleake-core";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import type React from "react";

export const RadioGroup = ({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>): React.ReactElement => {
	return (
		<RadioGroupPrimitive.Root
			data-slot="radio-group"
			className={merge("grid w-full gap-3", className)}
			{...props}
		/>
	);
};
