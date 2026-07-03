import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { useEffect, useRef } from "react";
import { type DayButton, getDefaultClassNames, type Locale } from "react-day-picker";
import { Button } from "../../button";

export const CalendarDayButton = ({
	className,
	day,
	modifiers,
	locale,
	...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }): React.ReactElement => {
	const defaultClassNames = getDefaultClassNames();
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);

	return (
		<Button
			ref={ref}
			variant="ghost"
			size="icon"
			data-day={day.date.toLocaleDateString(locale?.code)}
			data-selected-single={
				modifiers.selected &&
				!modifiers.range_start &&
				!modifiers.range_end &&
				!modifiers.range_middle
			}
			data-disabled={modifiers.disabled || undefined}
			data-range-start={modifiers.range_start}
			data-range-end={modifiers.range_end}
			data-range-middle={modifiers.range_middle}
			className={merge(
				"relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-middle=true]:bg-muted data-[range-start=true]:bg-primary data-[selected-single=true]:bg-orange-50 data-[selected-single=true]:text-orange-500 data-[selected-single=true]:border data-[selected-single=true]:border-orange-300/50! [&>span]:text-xs [&>span]:opacity-70 data-[disabled=true]:opacity-30 data-[disabled=true]:pointer-events-none data-[disabled=true]:line-through",
				defaultClassNames.day,
				className,
			)}
			{...props}
		/>
	);
};
