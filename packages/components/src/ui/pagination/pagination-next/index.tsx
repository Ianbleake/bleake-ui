import { merge } from "@bleakedev/bleake-core";
import { ChevronRightIcon } from "lucide-react";
import type React from "react";
import { PaginationLink } from "../pagination-link";

export const PaginationNext = ({
	className,
	text = "Next",
	...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }): React.ReactElement => {
	return (
		<PaginationLink
			aria-label="Go to next page"
			size="default"
			className={merge("pr-2!", className)}
			{...props}
		>
			<span className="hidden sm:block">{text}</span>
			<ChevronRightIcon data-icon="inline-end" />
		</PaginationLink>
	);
};
