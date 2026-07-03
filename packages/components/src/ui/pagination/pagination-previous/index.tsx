import { merge } from "@bleakedev/bleake-core";
import { ChevronLeftIcon } from "lucide-react";
import type React from "react";
import { PaginationLink } from "../pagination-link";

export const PaginationPrevious = ({
	className,
	text = "Previous",
	...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }): React.ReactElement => {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			size="default"
			className={merge("pl-2!", className)}
			{...props}
		>
			<ChevronLeftIcon data-icon="inline-start" />
			<span className="hidden sm:block">{text}</span>
		</PaginationLink>
	);
};
