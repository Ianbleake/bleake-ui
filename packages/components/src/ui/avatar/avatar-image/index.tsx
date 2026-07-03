import { merge } from "@bleakedev/bleake-core";
import { Avatar as AvatarPrimitive } from "radix-ui";
import type React from "react";

export const AvatarImage = ({
	className,
	...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>): React.ReactElement => {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={merge("aspect-square size-full rounded-full object-cover", className)}
			{...props}
		/>
	);
};
