const FILE_SIZE_UNITS = ["B", "KB", "MB", "GB"];

export function formatFileSize(bytes: number): string {
	if (bytes === 0) return "0 B";
	const k = 1024;
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return `${(bytes / k ** i).toFixed(2)} ${FILE_SIZE_UNITS[i]}`;
}
