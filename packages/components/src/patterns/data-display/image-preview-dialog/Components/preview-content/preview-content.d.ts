type PreviewContentProps = {
	title?: string;
	src: string;
	alt?: string;
	mimeType?: string;
	/** Filename used when the user clicks "Descargar". Falls back to `alt`. */
	downloadFilename?: string;
};
