import { Star } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Popover } from "../../../../ui/popover";
import { PopoverContent } from "../../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../../ui/popover/popover-trigger";
import { Spinner } from "../../../../ui/spinner";

export const PresetSaveButton = ({
	onSave,
	isSaving,
}: PresetSaveButtonProps): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	const [name, setName] = useState<string>("");

	// FIX 4: Only close + clear on success. Preserve typed name on failure.
	const handleSave = () => {
		const trimmed = name.trim();
		if (!trimmed) return;
		onSave(trimmed, () => {
			setName("");
			setOpen(false);
		});
	};

	return (
		<Popover
			open={open}
			onOpenChange={(nextOpen) => {
				setOpen(nextOpen);
				// Clear name when manually closed (user dismissed without saving)
				if (!nextOpen) setName("");
			}}
		>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="size-8 text-muted-foreground hover:text-amber-500 shrink-0"
					title="Guardar filtros actuales como vista"
					aria-label="Guardar filtros actuales como vista"
				>
					<Star
						className="size-4"
						aria-hidden="true"
					/>
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-64 p-3">
				<p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground">
					Guardar vista
				</p>
				<div className="flex items-center gap-2">
					<Input
						placeholder="Nombre de la vista"
						value={name}
						onChange={(event) => setName(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === "Enter") handleSave();
							if (event.key === "Escape") setOpen(false);
						}}
						className="h-8 flex-1 text-xs"
						maxLength={100}
						autoFocus
						aria-label="Nombre de la vista a guardar"
					/>
					<Button
						size="sm"
						variant="outline"
						onClick={handleSave}
						disabled={isSaving || name.trim().length === 0}
						className="shrink-0 h-8 px-2"
						aria-label="Confirmar guardar vista"
					>
						{isSaving ? <Spinner /> : "Guardar"}
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};
