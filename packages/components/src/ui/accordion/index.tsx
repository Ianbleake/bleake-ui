import { merge } from "@bleakedev/bleake-core";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type React from "react";

export { AccordionContent } from "./accordion-content";
export { AccordionItem } from "./accordion-item";
export { AccordionTrigger } from "./accordion-trigger";

export const Accordion = ({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>): React.ReactElement => {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			className={merge("flex w-full flex-col overflow-hidden rounded-md border", className)}
			{...props}
		/>
	);
};
