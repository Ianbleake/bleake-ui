import { merge } from "@bleakedev/bleake-core";
import { Filter, Sparkles } from "lucide-react";
import type React from "react";
import { Button } from "../../../../ui/button";
import { Separator } from "../../../../ui/separator";
import { Sheet } from "../../../../ui/sheet";
import { SheetContent } from "../../../../ui/sheet/sheet-content";
import { SheetDescription } from "../../../../ui/sheet/sheet-description";
import { SheetFooter } from "../../../../ui/sheet/sheet-footer";
import { SheetHeader } from "../../../../ui/sheet/sheet-header";
import { SheetTitle } from "../../../../ui/sheet/sheet-title";
import { SheetTrigger } from "../../../../ui/sheet/sheet-trigger";
import { FilterButton } from "../filter-button";

type MobileFiltersProps = {
	activeFilterCount: number;
	hasActiveFilters: boolean;
	children: React.ReactElement;
	clearFilters: () => void;
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description: string;
};

export const MobileFilters = ({
	activeFilterCount,
	hasActiveFilters,
	children,
	clearFilters,
	isOpen,
	onOpenChange,
	title,
	description,
}: MobileFiltersProps): React.ReactElement => {
	return (
		<Sheet
			open={isOpen}
			onOpenChange={onOpenChange}
		>
			<SheetTrigger asChild>
				<FilterButton
					isOpen={isOpen}
					activeFilterCount={activeFilterCount}
					onClick={() => onOpenChange(!isOpen)}
				/>
			</SheetTrigger>

			<SheetContent side="right">
				<SheetHeader className="py-5 px-6">
					<div className="flex items-center gap-2.5">
						<Filter className="size-4 text-orange-500" />
						<SheetTitle className="text-base font-semibold text-gray-900">{title}</SheetTitle>
					</div>
					{description && (
						<SheetDescription className="text-sm text-muted-foreground leading-snug">
							{description}
						</SheetDescription>
					)}
				</SheetHeader>

				<Separator />

				<div className="flex flex-col gap-4 p-4 [&>div]:items-stretch [&_button]:w-full">
					{children}
				</div>

				<SheetFooter
					className={merge(
						"flex flex-row items-center gap-3 py-5 px-3 ",
						hasActiveFilters && "border-t",
					)}
				>
					{hasActiveFilters && (
						<Button
							variant={"outline"}
							onClick={() => {
								clearFilters();
								onOpenChange(false);
							}}
							className="text-sm text-muted-foreground w-full"
						>
							<Sparkles />
							Limpiar filtros
						</Button>
					)}
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};
