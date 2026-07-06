import type React from "react";
import { useState } from "react";

// Format phone: only digits, auto-format as +52 55 1234 5678
const formatPhoneDisplay = (value: string): string => {
	const digits = value.replace(/\D/g, "");
	if (digits.length === 0) return "";

	let result = "+";
	result += digits.slice(0, 2);
	if (digits.length > 2) result += ` ${digits.slice(2, 4)}`;
	if (digits.length > 4) result += ` ${digits.slice(4, 8)}`;
	if (digits.length > 8) result += ` ${digits.slice(8, 12)}`;

	return result;
};

// Strip phone to raw digits with +: "+52 55 1234 5678" → "+525512345678"
const stripPhone = (display: string): string => {
	const digits = display.replace(/\D/g, "");
	return digits ? `+${digits}` : "";
};

/**
 * Phone input — formats in real-time as +52 55 1234 5678
 * Only digits allowed, auto-adds + and spaces.
 */
export const PhoneCellInput = ({
	value,
	onChange,
	className,
	hasError,
}: PhoneCellInputProps): React.ReactElement => {
	const [display, setDisplay] = useState<string>(() => {
		const raw = String(value ?? "");
		const digits = raw.replace(/\D/g, "");
		return digits ? formatPhoneDisplay(raw) : "";
	});

	return (
		<input
			type="tel"
			value={display}
			onChange={(event) => {
				const formatted = formatPhoneDisplay(event.target.value);
				setDisplay(formatted);
				onChange(stripPhone(formatted));
			}}
			placeholder="+52 55 1234 5678"
			className={className}
			aria-invalid={hasError}
		/>
	);
};
