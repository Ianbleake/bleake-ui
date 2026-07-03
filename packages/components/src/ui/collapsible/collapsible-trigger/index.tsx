import { Collapsible as CollapsiblePrimitive } from "radix-ui";

export const CollapsibleTrigger = ({
	...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): React.ReactElement => {
	return (
		<CollapsiblePrimitive.CollapsibleTrigger
			data-slot="collapsible-trigger"
			{...props}
		/>
	);
};
