import { merge } from "@bleakedev/bleake-core";
import { Check, ChevronDown, Search } from "lucide-react";
import type React from "react";
import { useCallback, useRef, useState } from "react";
import { Controller, type FieldPath, type FieldValues, type UseFormReturn } from "react-hook-form";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";
import { Popover } from "../../../ui/popover";
import { PopoverContent } from "../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../ui/popover/popover-trigger";
import { InfoCard } from "../../data-display/info-card";
import { Optional } from "../optional";

type FormAsyncSelectProps<T extends FieldValues> = {
	label: string;
	name: FieldPath<T>;
	form: UseFormReturn<T>;
	options: Option[];
	isLoading?: boolean;
	hasMore?: boolean;
	onSearch: (value: string) => void;
	onLoadMore?: () => void;
	placeholder?: string;
	searchPlaceholder?: string;
	required?: boolean;
	helperText?: string;
	className?: string;
	info?: string;
	disabled?: boolean;
	optional?: boolean;
	searchValue?: string;
	action?: React.ReactNode;
};

export const FormAsyncSelect = <T extends FieldValues>({
	label,
	name,
	form,
	options,
	isLoading = false,
	hasMore = false,
	onSearch,
	onLoadMore,
	placeholder = "Selecciona una opción",
	searchPlaceholder = "Buscar...",
	required = false,
	helperText,
	className,
	info,
	disabled = false,
	optional = false,
	action,
}: FormAsyncSelectProps<T>): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);
	const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

	const error = form.formState.errors[name];

	const handleSearch = useCallback(
		(value: string) => {
			setSearch(value);

			if (debounceRef.current) clearTimeout(debounceRef.current);
			debounceRef.current = setTimeout(() => onSearch(value), 300);
		},
		[onSearch],
	);

	return (
		<div className={merge("flex flex-col gap-2 w-full", className)}>
			<div className="flex items-center justify-between px-1 pr-1">
				<Label className="flex items-center flex-wrap gap-2">
					{label}
					{required && <span className="text-orange-500">*</span>}
					{optional && <Optional />}
				</Label>

				<div className="flex items-center gap-2">
					{info && (
						<InfoCard size="xs">
							<span className="max-w-52">{info}</span>
						</InfoCard>
					)}
					{action}
				</div>
			</div>

			<Controller
				control={form.control}
				name={name}
				render={({ field }) => {
					const selectedOption = options.find((option) => option.value === field.value);

					return (
						<Popover
							open={open}
							onOpenChange={(isOpen) => {
								setOpen(isOpen);
								if (!isOpen) setSearch("");
							}}
						>
							<PopoverTrigger asChild>
								<button
									type="button"
									disabled={disabled}
									className={merge(
										"flex h-8! w-full items-center justify-between gap-1.5 rounded-md border border-input bg-white px-2 py-1.5 text-xs/relaxed whitespace-nowrap transition-colors outline-none",
										"focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
										"disabled:cursor-not-allowed disabled:opacity-50",
										!field.value && "text-muted-foreground",
									)}
								>
									<span className="truncate">{selectedOption?.label ?? placeholder}</span>
									<ChevronDown className="pointer-events-none size-3.5 text-muted-foreground shrink-0" />
								</button>
							</PopoverTrigger>

							<PopoverContent
								className="p-0 gap-0 w-[var(--radix-popover-trigger-width)] min-w-32 overflow-x-hidden overflow-y-auto"
								align="start"
								side="bottom"
								sideOffset={4}
								onOpenAutoFocus={(event) => {
									event.preventDefault();
									requestAnimationFrame(() => inputRef.current?.focus());
								}}
							>
								{/* Search input */}
								<div className="flex items-center gap-2 px-2 py-2 sticky top-0 bg-white border-b border-gray-100 z-10">
									<Search className="size-3.5 text-gray-400 shrink-0" />
									<Input
										ref={inputRef}
										value={search}
										onChange={(event) => handleSearch(event.target.value)}
										placeholder={searchPlaceholder}
										className="h-7 text-xs bg-gray-50"
										onKeyDown={(event) => event.stopPropagation()}
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
											const isSelected = field.value === option.value;
											return (
												<button
													key={option.value}
													type="button"
													className={merge(
														"relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-md px-2 py-1 text-xs/relaxed outline-hidden select-none border border-transparent",
														"hover:bg-orange-50 hover:border-orange-200/50 hover:text-orange-500 hover:cursor-pointer",
														isSelected && "bg-orange-50 border-orange-200/50 text-orange-500",
													)}
													onClick={() => {
														field.onChange(isSelected ? "" : option.value);
														setSearch("");
														setOpen(false);
													}}
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

									{hasMore && onLoadMore && (
										<div className="border-t p-2">
											<button
												type="button"
												className="w-full py-1 text-xs text-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
												onClick={onLoadMore}
												disabled={isLoading}
											>
												{isLoading ? "Cargando..." : "Cargar más"}
											</button>
										</div>
									)}
								</div>
							</PopoverContent>
						</Popover>
					);
				}}
			/>

			{error && <span className="text-sm text-red-500">{String(error.message)}</span>}

			{!error && helperText && (
				<span className="text-[10px] text-muted-foreground">{helperText}</span>
			)}
		</div>
	);
};
