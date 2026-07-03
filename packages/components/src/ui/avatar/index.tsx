import { merge } from "@bleakedev/bleake-core";
import { Avatar as AvatarPrimitive } from "radix-ui";
import type React from "react";

export const Avatar = ({
	className,
	size = "default",
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
	size?: "default" | "sm" | "lg";
}): React.ReactElement => {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			data-size={size}
			className={merge(
				"group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
				className,
			)}
			{...props}
		/>
	);
};
