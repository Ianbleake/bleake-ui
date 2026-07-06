import { merge } from "@bleakedev/bleake-core";
import { CheckIcon, ChevronDown, Search } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Input } from "../../../ui/input";
import { Popover } from "../../../ui/popover";
import { PopoverContent } from "../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../ui/popover/popover-trigger";
import { Spinner } from "../../../ui/spinner";

const DEBOUNCE_MS = 300;

export const SearchFilterSelect = ({
	placeholder = "Seleccionar...",
	allLabel = "Todos",
	searchPlaceholder = "Buscar...",
	value,
	onChange,
	options,
	isLoading = false,
	onSearch,
	className,
}: SearchFilterSelectProps): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const isActive = !!value;
	const selectedLabel = options.find((option) => option.value === value)?.label;

	const handleSearchChange = (term: string) => {
		setSearchTerm(term);
		if (onSearch) {
			if (timerRef.current) clearTimeout(timerRef.current);
			timerRef.current = setTimeout(() => onSearch(term.trim() || ""), DEBOUNCE_MS);
		}
	};

	useEffect(() => {
		if (open) {
			const focusTimer = setTimeout(() => inputRef.current?.focus(), 50);
			return () => clearTimeout(focusTimer);
		}
		setSearchTerm("");
		if (onSearch) onSearch("");
		return undefined;
	}, [open, onSearch]);

	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	const handleSelect = (selectedValue: string | undefined) => {
		onChange(selectedValue);
		setOpen(false);
	};

	return (
		<div className={className}>
			<Popover
				open={open}
				onOpenChange={setOpen}
			>
				{/* Trigger — mismas clases que FilterSelect > SelectTrigger */}
				<PopoverTrigger asChild>
					<button
						type="button"
						role="combobox"
						aria-expanded={open}
						className={merge(
							"flex h-7 w-fit items-center justify-between gap-1.5 whitespace-nowrap rounded-md border border-input bg-white px-2 py-1.5 text-xs/relaxed cursor-pointer hover:border-gray-500 min-w-40 text-gray-900",
							isActive &&
								"bg-orange-50! border-orange-200/50 text-orange-500! hover:border-orange-500!",
						)}
					>
						<span className="truncate">{selectedLabel ?? placeholder}</span>
						<ChevronDown className="pointer-events-none size-3.5 text-muted-foreground" />
					</button>
				</PopoverTrigger>

				{/* Dropdown — mismo estilo que SelectContent */}
				<PopoverContent
					align="start"
					sideOffset={4}
					className="w-64 p-0 overflow-hidden"
					onWheel={(event) => event.stopPropagation()}
				>
					{/* Search input */}
					<div className="flex items-center gap-1.5 border-b px-2 py-1.5">
						<Search className="size-3.5 text-gray-400 shrink-0" />
						<Input
							ref={inputRef}
							value={searchTerm}
							onChange={(event) => handleSearchChange(event.target.value)}
							placeholder={searchPlaceholder}
							className="h-6 border-0 bg-transparent px-0 text-xs shadow-none focus-visible:ring-0"
						/>
					</div>

					{/* Options — mismo estilo que SelectItem */}
					<div className="max-h-52 overflow-y-auto">
						{isLoading ? (
							<div className="flex items-center justify-center py-3">
								<Spinner />
							</div>
						) : (
							<>
								{/* "All" option */}
								<button
									type="button"
									onClick={() => handleSelect(undefined)}
									className={merge(
										"relative flex min-h-7 w-full items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed cursor-pointer border border-transparent",
										!value
											? "bg-orange-50 border-orange-200/50 text-orange-500 font-medium"
											: "hover:bg-orange-50 hover:border-orange-200/50 hover:text-orange-500",
									)}
								>
									{allLabel}
									{!value && (
										<span className="pointer-events-none absolute right-2 flex items-center justify-center">
											<CheckIcon className="size-3.5 text-orange-500" />
										</span>
									)}
								</button>

								{options.map((option) => {
									const isSelected = value === option.value;
									return (
										<button
											type="button"
											key={option.value}
											onClick={() => handleSelect(option.value)}
											className={merge(
												"relative flex min-h-7 w-full items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed cursor-pointer border border-transparent",
												isSelected
													? "bg-orange-50 border-orange-200/50 text-orange-500 font-medium"
													: "hover:bg-orange-50 hover:border-orange-200/50 hover:text-orange-500",
											)}
										>
											<span className="truncate">{option.label}</span>
											{isSelected && (
												<span className="pointer-events-none absolute right-2 flex items-center justify-center">
													<CheckIcon className="size-3.5 text-orange-500" />
												</span>
											)}
										</button>
									);
								})}

								{options.length === 0 && !isLoading && (
									<p className="py-3 text-center text-xs text-gray-400">Sin resultados</p>
								)}
							</>
						)}
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
