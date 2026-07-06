import { X } from "lucide-react";
import { ImagePreviewDialog } from "../../../../data-display/image-preview-dialog";
import { PdfThumbnail } from "../pdf-thumbnail";
import { UploadProgress } from "../upload-progress";

const FilePreview = ({
	fileId,
	fileName,
	fileSize,
	mimeType,
	isPdf,
	imageSrc,
	pdfSrc,
	label,
	progress,
	isUploading,
	isDone,
	onRemove,
	pdfThumbnailUrl,
	isPdfThumbnailLoading,
	onOpenPdf,
}: FilePreviewProps): React.ReactElement => {
	const shouldShowMeta = !!fileName && (isUploading || isDone);

	return (
		<div className="border rounded-lg relative w-full">
			<div className="relative">
				<button
					type="button"
					onClick={onRemove}
					className="absolute top-2 right-2 cursor-pointer z-10"
				>
					<X size={14} />
				</button>

				<div className="px-3 pt-3 pb-3">
					{isPdf ? (
						<PdfThumbnail
							fileId={fileId}
							fileName={fileName}
							pdfSrc={pdfSrc}
							thumbnailUrl={pdfThumbnailUrl}
							isLoading={isPdfThumbnailLoading}
							label={label}
							onOpenPdf={onOpenPdf}
						/>
					) : (
						imageSrc && (
							<ImagePreviewDialog
								title={label}
								src={imageSrc}
								alt={fileName ?? "image"}
								mimeType={mimeType ?? undefined}
								previewClassName="w-full h-32 object-contain rounded mb-2"
							/>
						)
					)}
				</div>
			</div>

			{shouldShowMeta && (
				<UploadProgress
					fileName={fileName}
					fileSize={fileSize}
					progress={progress}
					isUploading={isUploading}
					isDone={isDone}
				/>
			)}
		</div>
	);
};

export { FilePreview };
