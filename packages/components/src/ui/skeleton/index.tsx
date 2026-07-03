import { merge } from "@bleakedev/bleake-core";

export const Skeleton = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="skeleton"
			className={merge("animate-pulse rounded-md bg-gray-200/50", className)}
			{...props}
		/>
	);
};
