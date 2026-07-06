/**
 * Title-cases a label by replacing underscores with spaces and capitalizing
 * the first letter of each word. Returns "-" when the value is blank.
 */
export const formatLabel = (text?: string | null): string => {
	if (!text?.trim()) {
		return "-";
	}

	return text
		.replace(/_/g, " ")
		.trim()
		.toLowerCase()
		.replace(/\b\w/g, (char) => char.toUpperCase());
};
