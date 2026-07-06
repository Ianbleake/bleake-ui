import type React from "react";
import { TableCell } from "../../../../ui/table/table-cell";
import { TableRow } from "../../../../ui/table/table-row";

const ROW_KEYS = Array.from({ length: 5 }, (_, i) => `campaigns-row-${i}`);

type AppTableSkeleton = {
	headerslength: number;
	extraColumns?: number;
};

export const AppTableSkeleton = ({
	headerslength,
	extraColumns = 0,
}: AppTableSkeleton): React.ReactElement => {
	return (
		<>
			{ROW_KEYS.map((key) => (
				<TableRow key={key}>
					<TableCell colSpan={headerslength + extraColumns}>
						<div className="h-6 w-full animate-pulse rounded bg-gray-200" />
					</TableCell>
				</TableRow>
			))}
		</>
	);
};
