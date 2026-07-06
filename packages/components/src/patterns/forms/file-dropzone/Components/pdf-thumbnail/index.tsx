import { FileText } from "lucide-react";

/**
 * PdfThumbnail — decoupled from campaign-dash.
 *
 * The `usePdfThumbnail` hook is removed: the consumer resolves the thumbnail
 * URL and passes it via `thumbnailUrl`. The `PdfViewerDialog` (excluded from
 * migration) is replaced by an `onOpenPdf` callback the consumer wires to its
 * own viewer.
 */
const PdfThumbnail = ({
	fileId,
	fileName,
	pdfSrc,
	thumbnailUrl,
	isLoading = false,
	label,
	onOpenPdf,
}: PdfThumbnailProps): React.ReactElement => {
	// `fileId` and `label` are retained in the prop contract for consumer
	// identity/title purposes but are not used to fetch or render a viewer here.
	void fileId;
	void label;

	const handleClick = () => {
		if (!pdfSrc) return;
		onOpenPdf?.(pdfSrc);
	};

	return (
		<button
			type="button"
			className="w-full h-32 rounded overflow-hidden relative bg-gray-50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
			onClick={handleClick}
			aria-label={`Ver PDF: ${fileName ?? "documento"}`}
		>
			{isLoading && <div className="absolute inset-0 animate-pulse bg-gray-100" />}

			{thumbnailUrl && (
				<img
					src={thumbnailUrl}
					alt={fileName ?? "PDF"}
					className="size-full object-contain"
				/>
			)}

			{!thumbnailUrl && !isLoading && (
				<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-red-50">
					<FileText className="size-8 text-red-400" />
					<span className="text-xs font-semibold text-red-500 uppercase tracking-wide">PDF</span>
				</div>
			)}

			{thumbnailUrl && (
				<span className="absolute bottom-1.5 right-1.5 text-[0.55rem] font-semibold uppercase tracking-wide bg-red-500 text-white px-1.5 py-0.5 rounded">
					PDF
				</span>
			)}
		</button>
	);
};

export { PdfThumbnail };
