import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Label } from "../../../ui/label";
import { Select } from "../../../ui/select";
import { SelectContent } from "../../../ui/select/select-content";
import { SelectGroup } from "../../../ui/select/select-group";
import { SelectItem } from "../../../ui/select/select-item";
import { SelectTrigger } from "../../../ui/select/select-trigger";
import { SelectValue } from "../../../ui/select/select-value";

type FilterSelectProps = {
	label?: string;
	options: Option[];
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	labelClassName?: string;
	inputClassName?: string;
};

export const FilterSelect = ({
	label,
	options,
	value,
	onChange,
	placeholder = "Seleccionar...",
	disabled = false,
	className,
	labelClassName,
	inputClassName,
}: FilterSelectProps): React.ReactElement => {
	const isActive = value && value !== "all" && value !== "";
	return (
		<div className={merge("flex flex-col gap-2", className)}>
			{label && (
				<Label
					className={labelClassName}
					htmlFor={label}
				>
					{label}
				</Label>
			)}

			<Select
				value={value ?? ""}
				onValueChange={onChange}
				disabled={disabled}
			>
				<SelectTrigger
					id={label}
					className={merge(
						"min-w-40 bg-white! text-gray-900! cursor-pointer hover:border-gray-500",
						isActive &&
							"bg-orange-50! border-orange-200/50 **:text-orange-500! hover:border-orange-500!",
						disabled && "cursor-not-allowed opacity-50",
						inputClassName,
					)}
				>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>

				<SelectContent position="popper">
					<SelectGroup>
						{options.map((option) => (
							<SelectItem
								key={option.value}
								value={option.value}
							>
								{option.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};
