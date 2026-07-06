type BulkFileDropzoneProps = {
	/** Called with the selected File and its extension when validation passes. */
	onFileSelected: (file: File, ext: string) => void;
	/** Optional error message to display below the dropzone. */
	error?: string | null;
	/** Whether a parse operation is currently in progress. */
	isParsing?: boolean;
	/** The currently loaded file name, or null if none. */
	fileName?: string | null;
	/** Resets the selected file back to nothing. */
	onClear?: () => void;
};
