import { merge } from "@bleakedev/bleake-core";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type React from "react";

export const AccordionContent = ({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>): React.ReactElement => {
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			className="overflow-hidden px-0 text-xs/relaxed data-open:animate-accordion-down data-closed:animate-accordion-up"
			{...props}
		>
			<div
				className={merge(
					"h-(--radix-accordion-content-height) pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
					className,
				)}
			>
				{children}
			</div>
		</AccordionPrimitive.Content>
	);
};
