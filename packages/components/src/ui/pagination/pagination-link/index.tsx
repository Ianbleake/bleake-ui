import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Button } from "../../button";

type PaginationLinkProps = {
	isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
	React.ComponentProps<"a">;

export const PaginationLink = ({
	className,
	isActive,
	size = "icon",
	...props
}: PaginationLinkProps): React.ReactElement => {
	return (
		<Button
			asChild
			variant={isActive ? "outline" : "ghost"}
			size={size}
			className={merge(className)}
		>
			<a
				aria-current={isActive ? "page" : undefined}
				data-slot="pagination-link"
				data-active={isActive}
				{...props}
			/>
		</Button>
	);
};
