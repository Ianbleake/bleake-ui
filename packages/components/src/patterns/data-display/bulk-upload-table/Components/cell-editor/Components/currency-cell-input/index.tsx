import type React from "react";
import { useState } from "react";
import { pesosToCentavos } from "./utils";

// Format currency display: strips non-digits (except .), adds $ and commas
const formatCurrencyDisplay = (value: string): string => {
	const digits = value.replace(/[^\d.]/g, "");
	const parts = digits.split(".");
	const intPart = parts[0] ?? "";
	const decPart = parts.length > 1 ? `.${parts[1].slice(0, 2)}` : "";
	const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return formatted ? `$${formatted}${decPart}` : "";
};

// Parse display "$50,000.00" back to pesos number
const parseCurrencyDisplay = (display: string): number => {
	const clean = display.replace(/[^0-9.]/g, "");
	return Number.parseFloat(clean) || 0;
};

/**
 * Currency input — formats in real-time as $50,000.00
 * Stores value in centavos, displays in pesos.
 * Same pattern as edit-spending-cap dialog.
 */
export const CurrencyCellInput = ({
	value,
	onChange,
	className,
	hasError,
}: CurrencyCellInputProps): React.ReactElement => {
	const [display, setDisplay] = useState<string>(() => {
		const cents = Number(value ?? 0);
		return cents > 0 ? formatCurrencyDisplay(String(cents / 100)) : "";
	});

	return (
		<input
			type="text"
			inputMode="decimal"
			value={display}
			onChange={(event) => {
				const formatted = formatCurrencyDisplay(event.target.value);
				setDisplay(formatted);
				const pesos = parseCurrencyDisplay(formatted);
				onChange(pesosToCentavos(pesos));
			}}
			placeholder="$0.00"
			className={className}
			aria-invalid={hasError}
		/>
	);
};
