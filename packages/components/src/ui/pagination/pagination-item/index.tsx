import type React from "react";

export const PaginationItem = ({ ...props }: React.ComponentProps<"li">): React.ReactElement => {
	return (
		<li
			data-slot="pagination-item"
			{...props}
		/>
	);
};
