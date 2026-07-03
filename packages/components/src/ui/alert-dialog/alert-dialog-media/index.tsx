import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const AlertDialogMedia = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="alert-dialog-media"
			className={merge(
				"mb-2 inline-flex size-8 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
};
