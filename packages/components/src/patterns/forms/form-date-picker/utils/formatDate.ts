import { format, isValid, parseISO } from "date-fns";
import { es } from "date-fns/locale";

type DateInput = string | Date | null | undefined;

function toValidDate(value: DateInput): Date | null {
	if (!value) return null;
	const date = typeof value === "string" ? parseISO(value) : value;
	return isValid(date) ? date : null;
}

/**
 * Formats a date as "d 'de' MMMM 'de' yyyy" (es-MX locale).
 * Inlined from campaign-dash `@/utils/formatters/formatDate` during migration.
 */
export function formatDate(value: DateInput): string {
	const parsed = toValidDate(value);
	if (!parsed) return "-";
	return format(parsed, "d 'de' MMMM 'de' yyyy", { locale: es });
}

/**
 * Formats a date range, handling open-ended ranges.
 * Inlined from campaign-dash `@/utils/formatters/formatDate` during migration.
 */
export function formatDateRange(startDate: DateInput, endDate: DateInput): string {
	const formattedStartDate = formatDate(startDate);
	const formattedEndDate = formatDate(endDate);

	if (formattedStartDate === "-" && formattedEndDate === "-") return "-";
	if (formattedStartDate === "-") return `Hasta ${formattedEndDate}`;
	if (formattedEndDate === "-") return `Desde ${formattedStartDate}`;
	return `${formattedStartDate} - ${formattedEndDate}`;
}
