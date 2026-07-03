import { merge } from "@bleakedev/bleake-core";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import type { Button } from "../button";
import { buttonVariants } from "../button/style-variants";
import { CalendarDayButton } from "./calendar-day-button";

export const Calendar = ({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = "label",
	buttonVariant = "ghost",
	locale,
	formatters,
	components,
	...props
}: React.ComponentProps<typeof DayPicker> & {
	buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}): React.ReactElement => {
	const defaultClassNames = getDefaultClassNames();

	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={merge(
				"group/calendar bg-background p-3 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(6)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
				String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
				String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
				className,
			)}
			captionLayout={captionLayout}
			locale={locale}
			formatters={{
				formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: "short" }),
				...formatters,
			}}
			classNames={{
				...defaultClassNames,
				root: merge("w-full min-w-70", defaultClassNames.root),
				months: merge("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
				month: merge(
					"flex w-full flex-col justify-center items-center gap-6",
					defaultClassNames.month,
				),
				caption_label: merge("text-sm font-semibold text-gray-900 capitalize"),
				month_caption: merge(
					"flex w-full items-center justify-center gap-2 py-1",
					defaultClassNames.month_caption,
				),
				dropdowns: merge("flex items-center gap-2", defaultClassNames.dropdowns),
				dropdown: merge("relative", defaultClassNames.dropdown),
				dropdown_root: merge("relative", defaultClassNames.dropdown_root),
				months_dropdown: merge(
					"appearance-none cursor-pointer rounded-md border border-gray-200 bg-background px-2 py-1 pr-6 text-sm font-semibold text-gray-900 capitalize focus:outline-none focus:ring-2 focus:ring-orange-300",
				),
				years_dropdown: merge(
					"appearance-none cursor-pointer rounded-md border border-gray-200 bg-background px-2 py-1 pr-6 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300",
				),
				month_grid: merge("w-full"),
				today: merge("bg-gray-100 rounded-lg"),
				weekdays: merge(" border-b border-orange-200 capitalize"),
				weekday: merge("pb-2"),
				nav: merge(
					"absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
					defaultClassNames.nav,
				),
				button_previous: merge(
					buttonVariants({ variant: buttonVariant }),
					"size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
					defaultClassNames.button_previous,
				),
				button_next: merge(
					buttonVariants({ variant: buttonVariant }),
					"size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
					defaultClassNames.button_next,
				),
				...classNames,
			}}
			components={{
				Root: ({ className, rootRef, ...props }) => (
					<div
						data-slot="calendar"
						ref={rootRef}
						className={merge(className)}
						{...props}
					/>
				),
				Chevron: ({ className, orientation, ...props }) => {
					if (orientation === "left")
						return (
							<ChevronLeftIcon
								className={merge("size-4", className)}
								{...props}
							/>
						);
					if (orientation === "right")
						return (
							<ChevronRightIcon
								className={merge("size-4", className)}
								{...props}
							/>
						);
					return (
						<ChevronDownIcon
							className={merge("size-4", className)}
							{...props}
						/>
					);
				},
				Dropdown: ({ value, onChange, options, className }) => (
					<div className="relative inline-flex items-center">
						<select
							value={value}
							onChange={onChange}
							className={merge(
								"appearance-none cursor-pointer rounded-md bg-transparent pl-2 pr-7 py-1 text-sm font-semibold text-gray-900 capitalize focus:outline-none",
								className,
							)}
						>
							{options?.map((option) => (
								<option
									key={option.value}
									value={option.value}
									disabled={option.disabled}
								>
									{option.label}
								</option>
							))}
						</select>
						<ChevronDownIcon className="pointer-events-none absolute right-1.5 top-1/2 size-3.5 -translate-y-1/2 text-gray-500" />
					</div>
				),
				DayButton: (props) => (
					<CalendarDayButton
						locale={locale}
						{...props}
					/>
				),
				...components,
			}}
			{...props}
		/>
	);
};
