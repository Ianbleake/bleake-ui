import { merge } from "@bleakedev/bleake-core";
import { Clock } from "lucide-react";
import React, { useLayoutEffect } from "react";
import { Popover } from "../../../../ui/popover";
import { PopoverContent } from "../../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../../ui/popover/popover-trigger";
import { toMinutes } from "../utils";

// ─── helpers ─────────────────────────────────────────────────────────────────

const pad = (n: number) => String(n).padStart(2, "0");

const generateHours = (minTime?: string, maxTime?: string): number[] => {
	const minH = minTime ? Number(minTime.split(":")[0]) : 0;
	const maxH = maxTime ? Number(maxTime.split(":")[0]) : 23;
	return Array.from({ length: maxH - minH + 1 }, (_, i) => i + minH);
};

const generateMinutes = (
	selectedHour: number | null,
	minuteStep: number,
	minTime?: string,
	maxTime?: string,
): number[] => {
	const all = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep);

	return all.filter((m) => {
		if (selectedHour === null) return true;
		const totalMin = selectedHour * 60 + m;
		const minMin = minTime ? toMinutes(minTime) : 0;
		const maxMin = maxTime ? toMinutes(maxTime) : 23 * 60 + 59;
		return totalMin >= minMin && totalMin <= maxMin;
	});
};

// ─── types ────────────────────────────────────────────────────────────────────

type Props = {
	value: string | null; // "HH:mm"
	onChange: (val: string) => void;
	placeholder?: string;
	minuteStep?: number;
	minTime?: string;
	maxTime?: string;
	className?: string;
};

// ─── scrollable column ────────────────────────────────────────────────────────

type ColumnProps = {
	items: number[];
	selected: number | null;
	onSelect: (val: number) => void;
	header: string;
};

const ScrollColumn = ({ items, selected, onSelect, header }: ColumnProps) => {
	const selectedRef = React.useRef<HTMLButtonElement>(null);
	const containerRef = React.useRef<HTMLDivElement>(null);

	// scroll selected item into view on open / change
	useLayoutEffect(() => {
		if (selectedRef.current && containerRef.current) {
			const container = containerRef.current;
			const el = selectedRef.current;
			const offset = el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2;
			container.scrollTo({ top: offset, behavior: "smooth" });
		}
	});

	return (
		<div className="flex flex-col w-20">
			{/* header */}
			<div className="sticky top-0 z-10 bg-popover text-center text-xs font-medium text-muted-foreground py-2 border-b border-border/50">
				{header}
			</div>

			{/* scrollable list */}
			<div
				ref={containerRef}
				className="overflow-y-auto h-50"
				style={{ scrollbarWidth: "thin" }}
			>
				{items.map((item) => {
					const isSelected = selected === item;
					return (
						<button
							key={item}
							ref={isSelected ? selectedRef : undefined}
							type="button"
							onClick={() => onSelect(item)}
							className={merge(
								"w-full text-center py-2 text-sm font-mono transition-colors duration-100 select-none",
								isSelected
									? "text-orange-500 font-medium bg-orange-50"
									: "text-gray-500 hover:text-orange-500 hover:bg-orange-50",
							)}
						>
							{pad(item)}
						</button>
					);
				})}
			</div>
		</div>
	);
};

// ─── main component ───────────────────────────────────────────────────────────

export const TimeSelect = ({
	value,
	onChange,
	placeholder = "HH:MM",
	minuteStep = 5,
	minTime,
	maxTime,
	className,
}: Props) => {
	const [open, setOpen] = React.useState<boolean>(false);

	// parse value
	const selectedHour = value ? Number(value.split(":")[0]) : null;
	const selectedMinute = value ? Number(value.split(":")[1]) : null;

	const hours = React.useMemo(() => generateHours(minTime, maxTime), [minTime, maxTime]);
	const minutes = React.useMemo(
		() => generateMinutes(selectedHour, minuteStep, minTime, maxTime),
		[selectedHour, minuteStep, minTime, maxTime],
	);

	const handleHourSelect = (h: number) => {
		// keep minute if valid, else pick first available
		const mins = generateMinutes(h, minuteStep, minTime, maxTime);
		const safeMinute =
			selectedMinute !== null && mins.includes(selectedMinute) ? selectedMinute : (mins[0] ?? 0);
		onChange(`${pad(h)}:${pad(safeMinute)}`);
	};

	const handleMinuteSelect = (m: number) => {
		const safeHour = selectedHour ?? hours[0] ?? 0;
		onChange(`${pad(safeHour)}:${pad(m)}`);
	};

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<button
					type="button"
					className={merge(
						"flex items-center gap-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
						"text-left transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						!value && "text-muted-foreground",
						className,
					)}
				>
					<Clock className="w-4 h-4 shrink-0 text-muted-foreground" />
					<span className="font-mono">{value ?? placeholder}</span>
				</button>
			</PopoverTrigger>

			<PopoverContent
				align="start"
				sideOffset={4}
				className="p-0 w-auto shadow-md"
			>
				<div className="flex divide-x divide-border">
					<ScrollColumn
						header="Hora"
						items={hours}
						selected={selectedHour}
						onSelect={handleHourSelect}
					/>
					<ScrollColumn
						header="Min"
						items={minutes}
						selected={selectedMinute}
						onSelect={handleMinuteSelect}
					/>
				</div>
			</PopoverContent>
		</Popover>
	);
};
