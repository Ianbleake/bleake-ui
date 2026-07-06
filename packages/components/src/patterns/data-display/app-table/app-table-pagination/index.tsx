import type React from "react";
import { TablePagination } from "../../../navigation/table-pagination";

export const AppTablePagination = ({
	page,
	totalPages,
	onPageChange,
	pageSize,
	onPageSizeChange,
}: AppTablePaginationProps): React.ReactElement => {
	return (
		<TablePagination
			page={page}
			totalPages={totalPages}
			onPageChange={onPageChange}
			pageSize={pageSize}
			onPageSizeChange={onPageSizeChange}
		/>
	);
};
