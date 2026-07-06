type FilePreviewProps = {
	fileId: string | null;
	fileName: string | null;
	fileSize: string | null;
	mimeType: string | null;
	isPdf: boolean;
	imageSrc: string | undefined;
	pdfSrc: string | null;
	label?: string;
	progress: number;
	isUploading: boolean;
	isDone: boolean;
	onRemove: () => void;
	/** Optional thumbnail URL for PDFs (resolved by the consumer). */
	pdfThumbnailUrl?: string | null;
	/** Whether the PDF thumbnail is loading. */
	isPdfThumbnailLoading?: boolean;
	/** Callback to open a PDF viewer (consumer-owned). */
	onOpenPdf?: (src: string) => void;
};
