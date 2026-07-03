import { merge } from "@bleakedev/bleake-core";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import type React from "react";
import { TableHead } from "../table-head";

function getSortDirection(field: string, currentSort: string | undefined): "asc" | "desc" | "none" {
	if (!currentSort) return "none";
	const fields = currentSort.split(",");
	if (fields.includes(field)) return "asc";
	if (fields.includes(`-${field}`)) return "desc";
	return "none";
}

const SortIndicator = ({
	field,
	currentSort,
}: {
	field: string;
	currentSort: string | undefined;
}): React.ReactElement => {
	const direction = getSortDirection(field, currentSort);
	if (direction === "asc") {
		return (
			<ArrowUp
				className="ml-1 inline size-3.5 text-orange-500"
				aria-hidden="true"
			/>
		);
	}
	if (direction === "desc") {
		return (
			<ArrowDown
				className="ml-1 inline size-3.5 text-orange-500"
				aria-hidden="true"
			/>
		);
	}
	return (
		<ArrowUpDown
			className="ml-1 inline size-3.5 text-gray-300"
			aria-hidden="true"
		/>
	);
};

export const SortableHead = ({
	field,
	currentSort,
	onSort,
	className,
	children,
}: SortableHeadProps): React.ReactElement => {
	return (
		<TableHead
			className={merge("cursor-pointer select-none text-sm font-normal text-gray-500", className)}
			onClick={() => onSort(field)}
			aria-sort={
				getSortDirection(field, currentSort) === "asc"
					? "ascending"
					: getSortDirection(field, currentSort) === "desc"
						? "descending"
						: "none"
			}
		>
			{children}
			<SortIndicator
				field={field}
				currentSort={currentSort}
			/>
		</TableHead>
	);
};
