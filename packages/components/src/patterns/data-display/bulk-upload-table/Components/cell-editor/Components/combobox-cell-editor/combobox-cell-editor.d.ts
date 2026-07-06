type ComboboxCellEditorProps = {
	/** Column definition — must have kind === "combobox" */
	column: BulkUploadColumn;
	/** Current cell value (UUID string or null/undefined) */
	value: unknown;
	/** Called when the user selects an option */
	onChange: (value: unknown) => void;
	/** Whether the cell has a validation error */
	hasError: boolean;
};
