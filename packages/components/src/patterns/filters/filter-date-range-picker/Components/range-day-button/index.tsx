import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { useEffect, useRef } from "react";
import type { DayButton } from "react-day-picker";
import { getDefaultClassNames } from "react-day-picker";
import { Button } from "../../../../../ui/button";

export const RangeDayButton = ({
	className,
	day,
	modifiers,
	...props
}: React.ComponentProps<typeof DayButton>): React.ReactElement => {
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
			data-day={day.date.toLocaleDateString()}
			data-selected-single={
				modifiers.selected &&
				!modifiers.range_start &&
				!modifiers.range_end &&
				!modifiers.range_middle
			}
			data-range-start={modifiers.range_start}
			data-range-end={modifiers.range_end}
			data-range-middle={modifiers.range_middle}
			className={merge(
				"relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal",
				// range start — naranja sólido, redondeado izquierdo
				"data-[range-start=true]:bg-orange-500 data-[range-start=true]:text-white data-[range-start=true]:rounded-r-none data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:hover:bg-orange-600",
				// range end — naranja sólido, redondeado derecho
				"data-[range-end=true]:bg-orange-500 data-[range-end=true]:text-white data-[range-end=true]:rounded-l-none data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:hover:bg-orange-600",
				// range middle — naranja suave, sin redondeo
				"data-[range-middle=true]:bg-orange-50 data-[range-middle=true]:text-orange-600 data-[range-middle=true]:rounded-none data-[range-middle=true]:hover:bg-orange-100",
				// selected single (cuando solo hay from sin to aún)
				"data-[selected-single=true]:bg-orange-500 data-[selected-single=true]:text-white data-[selected-single=true]:rounded-(--cell-radius) data-[selected-single=true]:hover:bg-orange-600",
				"[&>span]:text-xs [&>span]:opacity-70",
				defaultClassNames.day,
				className,
			)}
			{...props}
		/>
	);
};
