import { Collapsible as CollapsiblePrimitive } from "radix-ui";

export const CollapsibleContent = ({
	...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): React.ReactElement => {
	return (
		<CollapsiblePrimitive.CollapsibleContent
			data-slot="collapsible-content"
			{...props}
		/>
	);
};
