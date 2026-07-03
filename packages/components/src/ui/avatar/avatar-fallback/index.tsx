import { merge } from "@bleakedev/bleake-core";
import { Avatar as AvatarPrimitive } from "radix-ui";
import type React from "react";

export const AvatarFallback = ({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>): React.ReactElement => {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={merge(
				"flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
				className,
			)}
			{...props}
		/>
	);
};
