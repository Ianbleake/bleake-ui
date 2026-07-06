import { merge } from "@bleakedev/bleake-core";
import { Check, ChevronsUpDown } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "../../../../ui/button";
import { Command } from "../../../../ui/command";
import { CommandEmpty } from "../../../../ui/command/command-empty";
import { CommandGroup } from "../../../../ui/command/command-group";
import { CommandInput } from "../../../../ui/command/command-input";
import { CommandItem } from "../../../../ui/command/command-item";
import { Popover } from "../../../../ui/popover";
import { PopoverContent } from "../../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../../ui/popover/popover-trigger";

type YearSelectProps = {
	value: number | null;
	onChange: (val: number) => void;
	years: number[];
	placeholder: string;
};

export const YearSelect = ({
	value,
	onChange,
	years,
	placeholder,
}: YearSelectProps): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	const currentYear = new Date().getFullYear();
	const targetYear = value ?? currentYear;

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					className="justify-between w-full"
				>
					{value ?? placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-50 p-0">
				<Command>
					<CommandInput placeholder="Buscar año..." />
					<CommandEmpty>No encontrado</CommandEmpty>

					<CommandGroup className="max-h-60 overflow-auto">
						{years.map((year) => (
							<CommandItem
								key={year}
								value={String(year)}
								ref={(el) => {
									if (!el) return;

									if (open && year === targetYear) {
										el.scrollIntoView({
											block: "center",
											behavior: "auto",
										});
									}
								}}
								onSelect={() => {
									onChange(year);
									setOpen(false);
								}}
							>
								{year}
								<Check
									className={merge("ml-auto h-4 w-4", value === year ? "opacity-100" : "opacity-0")}
								/>
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
