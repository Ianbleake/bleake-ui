type FormSignaturePadProps<T extends import("react-hook-form").FieldValues> = {
	name: import("react-hook-form").FieldPath<T>;
	form: import("react-hook-form").UseFormReturn<T>;
	required?: boolean;
	className?: string;
	/**
	 * Uploads the signature file and returns its id. Replaces the domain
	 * `useUploadFile` hook from campaign-dash.
	 */
	upload: (file: File, onProgress: (pct: number) => void) => Promise<string>;
	/**
	 * Resolves a displayable URL for a stored file id. Replaces the domain
	 * `useQueryFileUrl` hook. Optional — when omitted, only freshly-drawn
	 * signatures are previewed.
	 */
	getFileUrl?: (fileId: string) => Promise<string>;
};
