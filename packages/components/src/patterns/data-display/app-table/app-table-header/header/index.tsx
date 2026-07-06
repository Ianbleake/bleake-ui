import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { SortableHead } from "../../../../../ui/table/sortable-head";
import { TableHead } from "../../../../../ui/table/table-head";

type HeaderProps = {
	header: AppTableHeader;
	headerClassName?: string;
	headerLabelClassName?: string;
	currentSort?: string;
	onSort?: (field: string) => void;
};

export const Header = ({
	header,
	headerClassName,
	currentSort,
	onSort,
	headerLabelClassName,
}: HeaderProps): React.ReactElement => {
	const Icon = header.icon;

	if (header.sortField && onSort) {
		return (
			<SortableHead
				field={header.sortField}
				currentSort={currentSort}
				onSort={onSort}
				className={merge("min-w-48 w-50 max-w-70", headerClassName, header.className)}
			>
				<div className="flex flex-row items-center gap-3">
					{Icon && <Icon className="text-current h-5 w-5" />}
					<span className={merge(headerLabelClassName, "")}>{header.label}</span>
				</div>
			</SortableHead>
		);
	}

	return (
		<TableHead className={merge("w-20", headerClassName, header.className)}>
			<div className="flex flex-row gap-3">
				{Icon && <Icon className="text-current h-5 w-5" />}
				<p className={merge("text-sm font-normal text-gray-500", headerLabelClassName)}>
					{header.label}
				</p>
			</div>
		</TableHead>
	);
};
