// ---------------------------------------------------------------------------
// Shared types — inlined from campaign-dash storage during migration
// ---------------------------------------------------------------------------

type CellValidationError = {
	row: number;
	column: string;
	message: string;
	value: string;
};

type BulkUploadParsedRow = {
	row_index: number;
	cells: Record<string, string>;
	errors: CellValidationError[];
	[key: string]: unknown;
};

type BulkUploadColumnMeta = {
	key: string;
	label: string;
	type: "text" | "number" | "currency" | "phone" | "select" | "combobox";
	options?: Array<{ value: string; label: string }>;
	required?: boolean;
};

type BulkUploadParseResult = {
	columns: BulkUploadColumnMeta[];
	rows: BulkUploadParsedRow[];
	total_rows: number;
	error_count: number;
};

// ---------------------------------------------------------------------------
// Column definition for the BulkUploadTable component
// ---------------------------------------------------------------------------

type BulkUploadColumnKind =
	| "text"
	| "number"
	| "email"
	| "select"
	| "combobox"
	| "currency"
	| "phone";

type BulkUploadSelectOption = {
	value: string;
	label: string;
};

type BulkUploadColumn = {
	/** Unique field key — matches the backend ColumnDef.Key */
	key: string;
	/** Column header label displayed in the table */
	label: string;
	/** Data type hint used to render the appropriate cell editor */
	kind: BulkUploadColumnKind;
	/** When kind is "select", the available options */
	options?: BulkUploadSelectOption[];
	/**
	 * When kind is "combobox", an async function that receives the current
	 * search query and returns matching options. The CellEditor is responsible
	 * for debouncing the calls.
	 */
	searchFn?: (query: string) => Promise<BulkUploadSelectOption[]>;
	/** Whether this column is required */
	required?: boolean;
	/** Optional width class (e.g. "w-48") */
	width?: string;
};

// ---------------------------------------------------------------------------
// Generic BulkUploadRow — TRow must extend this
// ---------------------------------------------------------------------------

type BulkUploadRow = BulkUploadParsedRow;

// ---------------------------------------------------------------------------
// BulkUploadTable component props
// ---------------------------------------------------------------------------

type BulkUploadTableProps<TRow extends BulkUploadRow> = {
	/** Column definitions — controls headers and cell editors */
	columns: BulkUploadColumn[];
	/** Parsed rows from the backend */
	rows: Array<TRow & { index: number; data: TRow }>;
	/** Called when the user edits a cell. rowIndex is 0-based (array position). */
	onRowChange: (rowIndex: number, field: string, value: unknown) => void;
	/** Called when the user clicks Confirm */
	onConfirm: () => void;
	/** Called when the user clicks Cancel */
	onCancel: () => void;
	/** Whether the bulk-create submission is in progress */
	isSubmitting: boolean;
	/** Per-row validation errors keyed by row index */
	errors: Map<number, CellValidationError[]>;
};
