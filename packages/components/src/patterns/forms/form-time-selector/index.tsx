import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Controller, type FieldPath, type FieldValues, type UseFormReturn } from "react-hook-form";
import { Label } from "../../../ui/label";
import { InfoCard } from "../../data-display/info-card";
import { Optional } from "../optional";
import { TimeSelect } from "./time-selector";
import { toMinutes } from "./utils";

// ─── helpers ────────────────────────────────────────────────────────────────

/** "HH:mm-HH:mm" → { start, end } */
const parseTimeRange = (value?: string): { start: string | null; end: string | null } => {
	if (!value) return { start: null, end: null };
	const parts = value.split("-");
	return {
		start: parts[0] ?? null,
		end: parts[1] ?? null,
	};
};

/** { start, end } → "HH:mm-HH:mm" */
const formatTimeRange = (start?: string | null, end?: string | null): string => {
	if (!start && !end) return "";
	if (start && !end) return start;
	if (start && end) return `${start}-${end}`;
	return "";
};

// ─── types ───────────────────────────────────────────────────────────────────

type BaseProps<T extends FieldValues> = {
	label: string;
	form: UseFormReturn<T>;
	required?: boolean;
	helperText?: string;
	className?: string;
	info?: string;
	optional?: boolean;
	/** Step in minutes for the time options (default: 5) */
	minuteStep?: number;
	/** Minimum selectable time "HH:mm" */
	minTime?: string;
	/** Maximum selectable time "HH:mm" */
	maxTime?: string;
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

// ─── component ───────────────────────────────────────────────────────────────

export const FormTimeSelector = <T extends FieldValues>({
	label,
	form,
	required,
	helperText,
	className,
	info,
	optional,
	minuteStep = 5,
	minTime,
	maxTime,
	...props
}: Props<T>): React.ReactElement => {
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
						<TimeSelect
							value={field.value ?? null}
							onChange={(val) => field.onChange(val)}
							placeholder="Selecciona hora"
							minuteStep={minuteStep}
							minTime={minTime}
							maxTime={maxTime}
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
						const { start, end } = parseTimeRange(field.value);

						const handleStartChange = (val: string) => {
							// si end es anterior al nuevo start, lo ajustamos al mismo valor
							const safeEnd = end && toMinutes(end) < toMinutes(val) ? val : end;
							field.onChange(formatTimeRange(val, safeEnd));
						};

						const handleEndChange = (val: string) => {
							field.onChange(formatTimeRange(start, val));
						};

						// el mínimo del selector "Hasta" es el start seleccionado
						const endMinTime = start ?? minTime;

						return (
							<div className="grid grid-cols-2 gap-2">
								<TimeSelect
									value={start}
									onChange={handleStartChange}
									placeholder="Desde"
									minuteStep={minuteStep}
									minTime={minTime}
									maxTime={maxTime}
								/>

								<TimeSelect
									value={end}
									onChange={handleEndChange}
									placeholder="Hasta"
									minuteStep={minuteStep}
									minTime={endMinTime}
									maxTime={maxTime}
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
