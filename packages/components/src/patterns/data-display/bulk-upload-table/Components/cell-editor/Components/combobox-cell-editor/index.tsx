import { merge } from "@bleakedev/bleake-core";
import { Check, ChevronDown, Search } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "../../../../../../../ui/input";

/**
 * Standalone searchable select for bulk upload FK fields.
 * Manages its own dropdown state to avoid re-render issues
 * from parent store updates destroying the popover.
 */
export const ComboboxCellEditor = ({
	column,
	value,
	onChange,
	hasError,
}: ComboboxCellEditorProps): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const [options, setOptions] = useState<BulkUploadSelectOption[]>(column.options ?? []);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [localValue, setLocalValue] = useState<string>(String(value ?? ""));
	const inputRef = useRef<HTMLInputElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

	// Sync external value into local state
	useEffect(() => {
		setLocalValue(String(value ?? ""));
	}, [value]);

	const selectedOption = options.find((option) => option.value === localValue);

	const handleSearch = useCallback(
		(searchValue: string) => {
			setSearch(searchValue);

			if (!column.searchFn) return;

			if (debounceRef.current) clearTimeout(debounceRef.current);
			debounceRef.current = setTimeout(async () => {
				setIsLoading(true);
				try {
					const results = await column.searchFn?.(searchValue);
					if (results) setOptions(results);
				} catch {
					// keep current options on error
				} finally {
					setIsLoading(false);
				}
			}, 300);
		},
		[column.searchFn],
	);

	// Load initial options on first open
	useEffect(() => {
		if (open && column.searchFn && options.length === 0) {
			handleSearch("");
		}
	}, [open, column.searchFn, options.length, handleSearch]);

	// Close on click outside
	useEffect(() => {
		if (!open) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setOpen(false);
				setSearch("");
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	// Cleanup debounce on unmount
	useEffect(() => {
		return () => {
			if (debounceRef.current) clearTimeout(debounceRef.current);
		};
	}, []);

	const pendingChangeRef = useRef<string | null>(null);

	// Flush pending onChange after the dropdown closes and re-render settles
	useEffect(() => {
		if (!open && pendingChangeRef.current !== null) {
			const val = pendingChangeRef.current;
			pendingChangeRef.current = null;
			onChange(val);
		}
	}, [open, onChange]);

	const handleSelect = (optionValue: string) => {
		const isSelected = localValue === optionValue;
		const newValue = isSelected ? "" : optionValue;
		setLocalValue(newValue);
		setSearch("");
		pendingChangeRef.current = newValue;
		setOpen(false);
	};

	return (
		<div
			ref={containerRef}
			className="relative"
		>
			{/* Trigger button */}
			<button
				type="button"
				onClick={() => {
					setOpen((prev) => !prev);
					if (!open) {
						requestAnimationFrame(() => inputRef.current?.focus());
					}
				}}
				className={merge(
					"flex h-7 w-full items-center justify-between gap-1.5 rounded-md border border-input bg-white px-2 py-1.5 text-xs/relaxed whitespace-nowrap transition-colors outline-none",
					"focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
					hasError && "border-red-400 bg-red-50/40",
					!localValue && "text-muted-foreground",
				)}
			>
				<span className="truncate">{selectedOption?.label ?? "Seleccionar"}</span>
				<ChevronDown className="pointer-events-none size-3.5 text-muted-foreground shrink-0" />
			</button>

			{/* Dropdown */}
			{open && (
				<div className="absolute top-full left-0 z-50 mt-1 w-full min-w-48 rounded-lg border border-border bg-white ring-1 ring-foreground/10 overflow-hidden">
					{/* Search input */}
					<div className="flex items-center gap-2 px-2 py-2 sticky top-0 bg-white border-b border-gray-100">
						<Search className="size-3.5 text-gray-400 shrink-0" />
						<Input
							ref={inputRef}
							value={search}
							onChange={(event) => handleSearch(event.target.value)}
							placeholder="Buscar..."
							className="h-7 text-xs bg-gray-50"
						/>
					</div>

					{/* Options list */}
					<div className="max-h-56 overflow-y-auto p-1">
						{isLoading && options.length === 0 ? (
							<div className="py-4 text-center text-xs text-gray-400">Buscando...</div>
						) : options.length === 0 ? (
							<div className="py-4 text-center text-xs text-gray-400">Sin resultados</div>
						) : (
							options.map((option) => {
								const isSelected = localValue === option.value;
								return (
									<button
										key={option.value}
										type="button"
										className={merge(
											"relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none border border-transparent",
											"hover:bg-orange-50 hover:border-orange-200/50 hover:text-orange-500 hover:cursor-pointer",
											isSelected && "bg-orange-50 border-orange-200/50 text-orange-500",
										)}
										onClick={() => handleSelect(option.value)}
									>
										<span className="truncate">{option.label}</span>
										{isSelected && (
											<span className="pointer-events-none absolute right-2 flex items-center justify-center">
												<Check className="size-3.5" />
											</span>
										)}
									</button>
								);
							})
						)}
					</div>
				</div>
			)}
		</div>
	);
};
