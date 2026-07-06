import { formatExtensionDescription, formatMimeDescription } from "./mimeLabel";

export function inferFileType(src: string, mimeType?: string): string {
	// Priority 1: explicit mime type from API response
	if (mimeType) {
		return formatMimeDescription(mimeType);
	}

	// Priority 2: data URL mime type
	if (src.startsWith("data:")) {
		const dataMime = src.split(";")[0]?.replace("data:", "");
		if (!dataMime) return "Archivo";
		const described = formatMimeDescription(dataMime);
		// Unknown data-URL mime falls back to a generic label, not the raw value.
		return described === dataMime ? "Archivo" : described;
	}

	// Priority 3: infer from URL path extension
	try {
		const url = new URL(src, window.location.origin);
		const extension = url.pathname.split(".").pop()?.toLowerCase();
		return extension ? formatExtensionDescription(extension) : "Archivo";
	} catch {
		return "Archivo";
	}
}
