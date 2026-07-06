type FormFileUploaderProps<T extends import("react-hook-form").FieldValues> = {
	label?: string;
	name: import("react-hook-form").FieldPath<T>;
	form: import("react-hook-form").UseFormReturn<T>;
	accept?: string;
	required?: boolean;
	helperText?: string;
	acceptText?: string;
	className?: string;
	maxSize?: number;
	/**
	 * Uploads the file and returns its id. Replaces the domain `useUploadFile`
	 * hook from campaign-dash. Required — the consumer owns the upload engine.
	 */
	upload: (file: File, onProgress: (pct: number) => void) => Promise<string>;
	/** Optional preview URL supplied by the consumer (e.g. resolved from a stored file id). */
	previewSrc?: string;
	/**
	 * Optional resolver for a stored file id → displayable URL. Replaces the
	 * domain `useQueryFileUrl` hook. When omitted, only freshly-picked files
	 * are previewed.
	 */
	getFileUrl?: (fileId: string) => Promise<string>;
	/**
	 * Optional resolver for a PDF thumbnail URL from a stored file id.
	 * Replaces the domain `usePdfThumbnail` hook.
	 */
	getPdfThumbnail?: (fileId: string) => Promise<string>;
};
