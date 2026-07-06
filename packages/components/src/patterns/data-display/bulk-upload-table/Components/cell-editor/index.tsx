import { merge } from "@bleakedev/bleake-core";
import { AlertCircle } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Select } from "../../../../../ui/select";
import { SelectContent } from "../../../../../ui/select/select-content";
import { SelectItem } from "../../../../../ui/select/select-item";
import { SelectTrigger } from "../../../../../ui/select/select-trigger";
import { SelectValue } from "../../../../../ui/select/select-value";
import { ComboboxCellEditor } from "./Components/combobox-cell-editor";
import { CurrencyCellInput } from "./Components/currency-cell-input";
import { PhoneCellInput } from "./Components/phone-cell-input";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CellEditor = ({
	column,
	value,
	onChange,
	errors,
}: CellEditorProps): React.ReactElement => {
	const hasError = (errors ?? []).length > 0;
	const [showTooltip, setShowTooltip] = useState<boolean>(false);
	const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);

	const inputClasses = merge(
		"w-full rounded-md border px-2 py-1 text-sm outline-none transition-colors",
		"focus:ring-2 focus:ring-orange-400 focus:border-transparent",
		hasError || isEmailInvalid
			? "border-red-400 bg-red-50/40"
			: "border-input bg-background hover:border-orange-300",
	);

	const renderEditor = (): React.ReactElement => {
		if (column.kind === "combobox") {
			return (
				<ComboboxCellEditor
					column={column}
					value={value}
					onChange={onChange}
					hasError={hasError}
				/>
			);
		}

		if (column.kind === "select") {
			const selectValue = value ? String(value) : undefined;
			return (
				<Select
					value={selectValue}
					onValueChange={(selectedValue) => onChange(selectedValue)}
				>
					<SelectTrigger
						className={merge("w-full text-sm", hasError && "border-red-400 bg-red-50/40")}
						aria-invalid={hasError}
					>
						<SelectValue placeholder="Seleccionar" />
					</SelectTrigger>
					<SelectContent>
						{column.options?.map((option) => (
							<SelectItem
								key={option.value}
								value={option.value}
							>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			);
		}

		if (column.kind === "currency") {
			return (
				<CurrencyCellInput
					value={value}
					onChange={onChange}
					className={inputClasses}
					hasError={hasError}
				/>
			);
		}

		if (column.kind === "phone") {
			return (
				<PhoneCellInput
					value={value}
					onChange={onChange}
					className={inputClasses}
					hasError={hasError}
				/>
			);
		}

		if (column.kind === "number") {
			return (
				<input
					type="number"
					value={value == null ? "" : String(value)}
					onChange={(event) =>
						onChange(event.target.value === "" ? null : event.target.valueAsNumber)
					}
					className={inputClasses}
					aria-invalid={hasError}
				/>
			);
		}

		// email — with real-time format validation
		if (column.kind === "email") {
			return (
				<input
					type="email"
					value={value == null ? "" : String(value)}
					onChange={(event) => {
						const newValue = event.target.value;
						onChange(newValue);
						setIsEmailInvalid(newValue !== "" && !EMAIL_REGEX.test(newValue));
					}}
					className={inputClasses}
					aria-invalid={hasError || isEmailInvalid}
				/>
			);
		}

		// text
		return (
			<input
				type="text"
				value={value == null ? "" : String(value)}
				onChange={(event) => onChange(event.target.value)}
				className={inputClasses}
				aria-invalid={hasError}
			/>
		);
	};

	return (
		<div className="relative flex items-center gap-1 min-w-0">
			<div className="flex-1 min-w-0">{renderEditor()}</div>

			{hasError && (
				<div className="relative shrink-0">
					<button
						type="button"
						className="flex items-center justify-center rounded-full text-red-500 hover:text-red-600 transition-colors"
						onMouseEnter={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
						onFocus={() => setShowTooltip(true)}
						onBlur={() => setShowTooltip(false)}
						aria-label={`Error en campo ${column.label}: ${(errors ?? []).map((cellError) => cellError.message).join("; ")}`}
					>
						<AlertCircle className="size-4" />
					</button>

					{showTooltip && (
						<div
							role="tooltip"
							className="absolute bottom-full right-0 mb-2 z-50 w-48 rounded-lg border border-red-200 bg-white px-3 py-2 ring-1 ring-red-100"
						>
							<ul className="list-none space-y-1">
								{(errors ?? []).map((cellError) => (
									<li
										key={cellError.column}
										className="text-xs text-red-600"
									>
										{cellError.message}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			)}
		</div>
	);
};
