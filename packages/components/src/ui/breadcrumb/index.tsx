import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const Breadcrumb = ({
	className,
	...props
}: React.ComponentProps<"nav">): React.ReactElement => {
	return (
		<nav
			aria-label="breadcrumb"
			data-slot="breadcrumb"
			className={merge(className)}
			{...props}
		/>
	);
};
