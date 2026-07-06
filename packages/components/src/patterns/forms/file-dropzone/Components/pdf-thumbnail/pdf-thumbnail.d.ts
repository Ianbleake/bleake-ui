type PdfThumbnailProps = {
	fileId: string | null;
	fileName: string | null;
	/**
	 * Display URL for the PDF (used to open a viewer). When omitted, the
	 * open affordance is disabled.
	 */
	pdfSrc?: string | null;
	/**
	 * Thumbnail URL. Replaces the domain `usePdfThumbnail` hook — the consumer
	 * resolves the thumbnail and passes it in.
	 */
	thumbnailUrl?: string | null;
	/** Whether the thumbnail is still loading. */
	isLoading?: boolean;
	label?: string;
	/**
	 * Called when the user clicks the thumbnail to open the PDF. Replaces the
	 * domain `PdfViewerDialog` (excluded from migration) — the consumer owns
	 * the viewer.
	 */
	onOpenPdf?: (src: string) => void;
};
