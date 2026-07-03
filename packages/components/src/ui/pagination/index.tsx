import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const Pagination = ({
	className,
	...props
}: React.ComponentProps<"nav">): React.ReactElement => {
	return (
		<nav
			aria-label="pagination"
			data-slot="pagination"
			className={merge("mx-auto flex w-full justify-center", className)}
			{...props}
		/>
	);
};
