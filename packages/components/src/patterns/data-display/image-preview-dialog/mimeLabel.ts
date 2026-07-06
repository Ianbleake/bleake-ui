const MIME_LABELS: Record<string, string> = {
	"image/png": "PNG",
	"image/jpeg": "JPEG",
	"image/jpg": "JPG",
	"image/webp": "WEBP",
	"image/gif": "GIF",
	"image/svg+xml": "SVG",
	"image/bmp": "BMP",
	"image/tiff": "TIFF",
	"image/heic": "HEIC",
	"image/heif": "HEIF",
	"image/avif": "AVIF",
	"application/pdf": "PDF",
	"application/msword": "DOC",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX",
	"application/vnd.ms-excel": "XLS",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
	"application/vnd.ms-powerpoint": "PPT",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": "PPTX",
	"application/vnd.oasis.opendocument.text": "ODT",
	"application/vnd.oasis.opendocument.spreadsheet": "ODS",
	"application/vnd.oasis.opendocument.presentation": "ODP",
	"application/rtf": "RTF",
	"text/plain": "TXT",
	"text/csv": "CSV",
	"text/html": "HTML",
	"text/markdown": "MD",
	"application/json": "JSON",
	"application/xml": "XML",
	"text/xml": "XML",
	"application/zip": "ZIP",
	"application/x-rar-compressed": "RAR",
	"application/vnd.rar": "RAR",
	"application/x-7z-compressed": "7Z",
	"application/gzip": "GZIP",
	"application/x-tar": "TAR",
};

export const formatMimeLabel = (mime: string): string => {
	const normalized = mime.trim().toLowerCase();
	return MIME_LABELS[normalized] ?? normalized.split("/").pop()?.toUpperCase() ?? mime;
};

export const formatMimeLabelList = (mimeList: string): string =>
	mimeList
		.split(",")
		.map((mime) => mime.trim())
		.filter((mime) => mime.length > 0)
		.map((mime) => formatMimeLabel(mime))
		.join(", ");

const MIME_DESCRIPTIONS: Record<string, string> = {
	"image/jpeg": "Imagen JPEG",
	"image/jpg": "Imagen JPEG",
	"image/png": "Imagen PNG",
	"image/gif": "Imagen GIF",
	"image/webp": "Imagen WebP",
	"image/svg+xml": "Imagen SVG",
	"image/bmp": "Imagen BMP",
	"image/tiff": "Imagen TIFF",
	"image/heic": "Imagen HEIC",
	"image/heif": "Imagen HEIF",
	"image/avif": "Imagen AVIF",
	"application/pdf": "Documento PDF",
	"application/msword": "Documento Word",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Documento Word",
	"application/vnd.ms-excel": "Hoja de cálculo Excel",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Hoja de cálculo Excel",
	"application/vnd.ms-powerpoint": "Presentación PowerPoint",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation":
		"Presentación PowerPoint",
	"text/plain": "Archivo de texto",
	"text/csv": "Archivo CSV",
	"application/json": "Archivo JSON",
	"application/zip": "Archivo ZIP",
};

const EXTENSION_DESCRIPTIONS: Record<string, string> = {
	jpg: "Imagen JPEG",
	jpeg: "Imagen JPEG",
	png: "Imagen PNG",
	gif: "Imagen GIF",
	webp: "Imagen WebP",
	svg: "Imagen SVG",
	bmp: "Imagen BMP",
	tiff: "Imagen TIFF",
	pdf: "Documento PDF",
	doc: "Documento Word",
	docx: "Documento Word",
	xls: "Hoja de cálculo Excel",
	xlsx: "Hoja de cálculo Excel",
	ppt: "Presentación PowerPoint",
	pptx: "Presentación PowerPoint",
	txt: "Archivo de texto",
	csv: "Archivo CSV",
	json: "Archivo JSON",
	zip: "Archivo ZIP",
};

export const formatMimeDescription = (mime: string): string => {
	const normalized = mime.trim().toLowerCase();
	return MIME_DESCRIPTIONS[normalized] ?? mime;
};

export const formatExtensionDescription = (extension: string): string =>
	EXTENSION_DESCRIPTIONS[extension.trim().toLowerCase()] ?? "Archivo";
