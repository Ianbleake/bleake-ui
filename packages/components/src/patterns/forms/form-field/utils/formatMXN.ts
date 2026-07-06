/**
 * Formats a centavos amount as a Mexican peso currency string.
 * Inlined from campaign-dash `@/utils/formatters/formatMXN` during migration
 * to keep this pattern free of domain utils.
 */
const MXN_FORMATTER = new Intl.NumberFormat("es-MX", {
	style: "currency",
	currency: "MXN",
	minimumFractionDigits: 2,
});

export function formatMXN(cents: number): string {
	return MXN_FORMATTER.format(cents / 100);
}
