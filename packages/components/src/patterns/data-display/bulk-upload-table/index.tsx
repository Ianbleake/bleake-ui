import { merge } from "@bleakedev/bleake-core";
import { AlertCircle, Check, X } from "lucide-react";
import type React from "react";
import { Button } from "../../../ui/button";
import { CellEditor } from "./Components/cell-editor";

/**
 * BulkUploadTable<TRow>
 *
 * A generic, editable data grid used in bulk upload flows (F4/F5).
 * Each row from the server's parse response is rendered as a card
 * with fields in a responsive grid — avoids horizontal scroll.
 */
export const BulkUploadTable = <TRow extends BulkUploadRow>({
	columns,
	rows,
	onRowChange,
	onConfirm,
	onCancel,
	isSubmitting,
	errors,
}: BulkUploadTableProps<TRow>): React.ReactElement => {
	const hasAnyError = errors.size > 0 || rows.some((row) => (row.errors ?? []).length > 0);

	return (
		<div className="flex flex-col gap-4">
			{/* Row cards */}
			<div className="flex flex-col gap-3">
				{rows.map((row) => {
					const rowErrors = errors.get(row.index) ?? [];
					const serverErrors = row.errors ?? [];
					const allErrors = [...serverErrors, ...rowErrors];
					const isRowInvalid = allErrors.length > 0;

					// Group errors by column key for fast cell-level lookup
					const errorsByColumn = new Map<string, CellValidationError[]>();
					for (const cellError of allErrors) {
						const existing = errorsByColumn.get(cellError.column) ?? [];
						errorsByColumn.set(cellError.column, [...existing, cellError]);
					}

					return (
						<div
							key={row.index}
							className={merge(
								"rounded-lg border bg-white p-4 transition-colors",
								isRowInvalid
									? "border-red-300 ring-1 ring-red-100"
									: "border-border ring-1 ring-border/50",
							)}
						>
							{/* Row header */}
							<div className="flex items-center justify-between mb-3">
								<span className="text-xs font-semibold text-muted-foreground">
									Fila {row.index}
								</span>
								{isRowInvalid && (
									<span className="flex items-center gap-1 text-xs text-red-500 font-medium">
										<AlertCircle className="size-3" />
										{allErrors.length} error{allErrors.length !== 1 ? "es" : ""}
									</span>
								)}
							</div>

							{/* Fields grid */}
							<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
								{columns.map((column) => (
									<div
										key={column.key}
										className="flex flex-col gap-1"
									>
										<span className="text-xs font-medium text-muted-foreground">
											{column.label}
											{column.required && (
												<span
													className="ml-0.5 text-orange-500"
													aria-hidden="true"
												>
													*
												</span>
											)}
										</span>
										<CellEditor
											column={column}
											value={row.data[column.key]}
											onChange={(newValue) => onRowChange(row.index - 1, column.key, newValue)}
											errors={errorsByColumn.get(column.key) ?? []}
										/>
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>

			{/* Summary row count */}
			<p className="text-xs text-muted-foreground">
				{rows.length} fila{rows.length !== 1 ? "s" : ""} cargada
				{rows.length !== 1 ? "s" : ""}
				{hasAnyError && (
					<span className="ml-2 text-red-500 font-medium">
						— hay filas con errores que deben corregirse
					</span>
				)}
			</p>

			{/* Action row */}
			<div className="flex items-center justify-end gap-3">
				<Button
					type="button"
					variant="outline"
					onClick={onCancel}
					disabled={isSubmitting}
				>
					<X className="size-4 mr-1.5" />
					Cancelar
				</Button>

				<Button
					type="button"
					onClick={onConfirm}
					disabled={isSubmitting || hasAnyError}
				>
					{isSubmitting ? (
						<span className="flex items-center gap-2">
							<span className="size-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
							Guardando…
						</span>
					) : (
						<span className="flex items-center gap-1.5">
							<Check className="size-4" />
							Confirmar
						</span>
					)}
				</Button>
			</div>
		</div>
	);
};
