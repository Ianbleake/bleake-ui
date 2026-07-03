import { Collapsible as CollapsiblePrimitive } from "radix-ui";

export const Collapsible = ({
	...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>): React.ReactElement => {
	return (
		<CollapsiblePrimitive.Root
			data-slot="collapsible"
			{...props}
		/>
	);
};
