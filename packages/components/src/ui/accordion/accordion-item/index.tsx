import { merge } from "@bleakedev/bleake-core";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type React from "react";

export const AccordionItem = ({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>): React.ReactElement => {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={merge("not-last:border-b data-open:bg-muted/50", className)}
			{...props}
		/>
	);
};
