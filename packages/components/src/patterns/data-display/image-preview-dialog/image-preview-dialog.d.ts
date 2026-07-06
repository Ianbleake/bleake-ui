type ImagePreviewDialogProps = {
	title?: string;
	src: string;
	alt?: string;
	mimeType?: string;
	className?: string;
	previewClassName?: string;
	onDownload?: (url: string, filename: string) => void;
};

type PreviewContentProps = {
	title?: string;
	src: string;
	alt?: string;
	mimeType?: string;
	downloadFilename?: string;
	onDownload?: (url: string, filename: string) => void;
};
