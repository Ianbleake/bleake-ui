import { merge } from "@bleakedev/bleake-core";
import { Loader2Icon } from "lucide-react";

export const Spinner = ({
	className,
	...props
}: React.ComponentProps<"svg">): React.ReactElement => {
	return (
		<Loader2Icon
			role="status"
			aria-label="Loading"
			className={merge("size-4 animate-spin", className)}
			{...props}
		/>
	);
};
