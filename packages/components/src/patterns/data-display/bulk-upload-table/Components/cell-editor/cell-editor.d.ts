type CellEditorProps = {
	/** The column definition driving this cell's editor type. */
	column: BulkUploadColumn;
	/** Current cell value */
	value: unknown;
	/** Called when the value changes */
	onChange: (value: unknown) => void;
	/** Validation errors for this specific cell */
	errors: CellValidationError[];
};
