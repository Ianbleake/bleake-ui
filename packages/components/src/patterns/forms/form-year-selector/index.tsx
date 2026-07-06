import { merge } from "@bleakedev/bleake-core";
import React from "react";
import { Controller, type FieldPath, type FieldValues, type UseFormReturn } from "react-hook-form";
import { Label } from "../../../ui/label";
import { InfoCard } from "../../data-display/info-card";
import { Optional } from "../optional";
import { YearSelect } from "./year-select";

type BaseProps<T extends FieldValues> = {
	label: string;
	form: UseFormReturn<T>;
	required?: boolean;
	helperText?: string;
	className?: string;
	info?: string;
	optional?: boolean;
	fromYear?: number;
	toYear?: number;
};

type Props<T extends FieldValues> =
	| (BaseProps<T> & {
			mode: "single";
			name: FieldPath<T>;
	  })
	| (BaseProps<T> & {
			mode: "range";
			name: FieldPath<T>;
	  });

const generateYears = (from = 1950, to = new Date().getFullYear()) => {
	const years: number[] = [];
	for (let i = to; i >= from; i--) {
		years.push(i);
	}
	return years;
};

// helpers
const parseRange = (value?: string) => {
	if (!value) return { start: null, end: null };

	const [start, end] = value.split("-").map(Number);

	return {
		start: start || null,
		end: end || null,
	};
};

const formatRange = (start?: number | null, end?: number | null) => {
	if (!start && !end) return "";
	if (start && !end) return `${start}`;
	if (start && end) return `${start}-${end}`;
	return "";
};

export const FormYearSelector = <T extends FieldValues>({
	label,
	form,
	required,
	helperText,
	className,
	info,
	optional,
	fromYear = new Date().getFullYear() - 30,
	toYear = new Date().getFullYear() + 100,
	...props
}: Props<T>): React.ReactElement => {
	const years = React.useMemo(() => generateYears(fromYear, toYear), [fromYear, toYear]);

	return (
		<div className={merge("flex flex-col gap-2", className)}>
			{/* LABEL */}
			<Label className="flex items-center justify-between px-1 pr-1">
				<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
					<div className="flex items-center gap-2">
						<span>{label}</span>
						{required && <span className="text-orange-500">*</span>}
					</div>
					{optional && <Optional />}
				</div>

				{info && (
					<InfoCard size="xs">
						<span className="max-w-45">{info}</span>
					</InfoCard>
				)}
			</Label>

			{/* SINGLE */}
			{props.mode === "single" && (
				<Controller
					control={form.control}
					name={props.name}
					render={({ field }) => (
						<YearSelect
							value={field.value ? Number(field.value) : null}
							onChange={(val) => field.onChange(String(val))}
							years={years}
							placeholder="Selecciona año"
						/>
					)}
				/>
			)}

			{/* RANGE */}
			{props.mode === "range" && (
				<Controller
					control={form.control}
					name={props.name}
					render={({ field }) => {
						const { start, end } = parseRange(field.value);

						const handleStartChange = (val: number) => {
							// si end es menor, lo ajustamos
							const safeEnd = end && end < val ? val : end;
							field.onChange(formatRange(val, safeEnd));
						};

						const handleEndChange = (val: number) => {
							field.onChange(formatRange(start, val));
						};

						const endYears = start ? years.filter((y) => y >= start) : years;

						return (
							<div className="grid grid-cols-2 gap-2">
								<YearSelect
									value={start}
									onChange={handleStartChange}
									years={years}
									placeholder="Desde"
								/>

								<YearSelect
									value={end}
									onChange={handleEndChange}
									years={endYears}
									placeholder="Hasta"
								/>
							</div>
						);
					}}
				/>
			)}

			{/* ERROR / HELPER */}
			{(() => {
				const error = form.formState.errors[props.name];

				if (error) {
					return <span className="text-sm text-red-500">{String(error.message)}</span>;
				}

				return helperText && <span className="text-xs text-muted-foreground">{helperText}</span>;
			})()}
		</div>
	);
};
