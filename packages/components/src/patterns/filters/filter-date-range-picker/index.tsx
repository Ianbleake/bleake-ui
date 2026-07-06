import { merge } from "@bleakedev/bleake-core";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ChevronDown } from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Button } from "../../../ui/button";
import { Calendar } from "../../../ui/calendar";
import { Popover } from "../../../ui/popover";
import { PopoverContent } from "../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../ui/popover/popover-trigger";
import { RangeDayButton } from "./Components/range-day-button";
import { normalizeRange, resolveClickedDay } from "./utils";
import { formatDateRange } from "./utils/formatDateRange";
import { parseDate } from "./utils/parseDate";

type Props = {
	dateFrom?: string;
	dateTo?: string;
	onChangeRange: (from?: string, to?: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
};

export const FilterDateRangePicker = ({
	dateFrom,
	dateTo,
	onChangeRange,
	placeholder = "Rango de fechas",
	disabled = false,
	className,
}: Props): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	const [pendingRange, setPendingRange] = useState<DateRange | undefined>();
	const [waitingForEnd, setWaitingForEnd] = useState<boolean>(false);

	const committedFrom = parseDate(dateFrom);
	const committedTo = parseDate(dateTo);
	const isActive = Boolean(dateFrom ?? dateTo);

	const rangeLabel = isActive ? formatDateRange(committedFrom, committedTo) : undefined;

	const handleOpenChange = (nextOpen: boolean) => {
		if (nextOpen) {
			setPendingRange({
				from: committedFrom,
				to: committedTo,
			});
			setWaitingForEnd(false);
		}

		setOpen(nextOpen);
	};

	const handleSelect = (range?: DateRange) => {
		if (!range?.from) {
			setPendingRange(undefined);
			setWaitingForEnd(false);
			return;
		}

		if (!waitingForEnd) {
			const clickedDay = resolveClickedDay(range, pendingRange);
			setPendingRange({ from: clickedDay, to: undefined });
			setWaitingForEnd(true);
			return;
		}

		const startDay = pendingRange?.from;
		const clickedDay = resolveClickedDay(range, pendingRange);

		// User clicked a day earlier than the pending start: restart the selection
		// with the earlier day as the new `from` instead of building a range.
		if (startDay && clickedDay.getTime() < startDay.getTime()) {
			setPendingRange({ from: clickedDay, to: undefined });
			return;
		}

		const start = startDay ?? clickedDay;
		const { from, to } = normalizeRange(start, clickedDay);

		setPendingRange({ from, to });
		onChangeRange(format(from, "yyyy-MM-dd"), format(to, "yyyy-MM-dd"));
		setWaitingForEnd(false);
		setOpen(false);
	};

	return (
		<Popover
			open={open}
			onOpenChange={handleOpenChange}
		>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					disabled={disabled}
					className={merge(
						"px-2! min-w-40 h-7 rounded-md! justify-between text-xs/relaxed font-normal bg-white! text-gray-900! cursor-pointer hover:border-gray-500",
						isActive && "bg-orange-50! border-orange-200/50 hover:border-orange-500!",
						disabled && "cursor-not-allowed opacity-50",
						className,
					)}
				>
					<span className={isActive ? "text-orange-500" : "text-gray-900"}>
						{rangeLabel ?? placeholder}
					</span>
					<ChevronDown className="size-3.5 opacity-50" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-auto p-0 py-2">
				<Calendar
					mode="range"
					showOutsideDays={false}
					selected={pendingRange}
					onSelect={handleSelect}
					locale={es}
					disabled={disabled}
					numberOfMonths={2}
					fixedWeeks
					classNames={{
						range_start: "rounded-r-none!",
						range_end: "rounded-l-none!",
						range_middle: "rounded-none!",
						month: "justify-start",
					}}
					components={{
						DayButton: RangeDayButton,
					}}
				/>
			</PopoverContent>
		</Popover>
	);
};
