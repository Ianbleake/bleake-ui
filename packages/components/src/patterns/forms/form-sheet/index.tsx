import type React from "react";
import { Separator } from "../../../ui/separator";
import { Sheet } from "../../../ui/sheet";
import { SheetContent } from "../../../ui/sheet/sheet-content";
import { SheetDescription } from "../../../ui/sheet/sheet-description";
import { SheetFooter } from "../../../ui/sheet/sheet-footer";
import { SheetHeader } from "../../../ui/sheet/sheet-header";
import { SheetTitle } from "../../../ui/sheet/sheet-title";

export const FormSheet = ({
	open,
	onOpenChange,
	icon: Icon,
	title,
	description,
	maxWidth = "28rem",
	children,
	footer,
}: FormSheetProps): React.ReactElement => {
	return (
		<Sheet
			open={open}
			onOpenChange={onOpenChange}
		>
			<SheetContent
				side="right"
				style={{ maxWidth }}
			>
				{/* Header */}
				<SheetHeader className="py-5 px-6">
					<div className="flex items-center gap-2.5">
						<Icon className="size-4 text-orange-500" />
						<SheetTitle className="text-base font-semibold text-gray-900">{title}</SheetTitle>
					</div>
					{description && (
						<SheetDescription className="text-sm text-muted-foreground leading-snug">
							{description}
						</SheetDescription>
					)}
				</SheetHeader>

				<Separator />

				{/* Body */}
				{children}

				{/* Footer */}
				{footer && (
					<>
						<Separator />
						<SheetFooter className="flex flex-row items-center justify-end gap-3 py-5 px-6">
							{footer}
						</SheetFooter>
					</>
				)}
			</SheetContent>
		</Sheet>
	);
};
