import { merge } from "@bleakedev/bleake-core";
import {
	AlertCircle,
	Bookmark,
	BookmarkCheck,
	Check,
	ListFilter,
	Pencil,
	Trash2,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { ConfirmDialog } from "../../../../primitives/confirm-dialog";
import { Button } from "../../../../ui/button";
import { Input } from "../../../../ui/input";
import { Popover } from "../../../../ui/popover";
import { PopoverContent } from "../../../../ui/popover/popover-content";
import { PopoverTrigger } from "../../../../ui/popover/popover-trigger";
import { Spinner } from "../../../../ui/spinner";

export const PresetListButton = ({
	presets,
	activePresetId,
	onApply,
	onDelete,
	onRename,
	isLoading = false,
	isError = false,
	onDeleteActivePreset,
}: PresetListButtonProps): React.ReactElement | null => {
	const [renamingId, setRenamingId] = useState<string | null>(null);
	const [renameValue, setRenameValue] = useState<string>("");
	const [isRenameSubmitting, setIsRenameSubmitting] = useState<boolean>(false);

	const handleRenameStart = (preset: { id: string; name: string }) => {
		setRenamingId(preset.id);
		setRenameValue(preset.name);
	};

	// Keep edit state on failure (only clear on success). Surface errors via toast.
	const handleRenameConfirm = async (presetId: string) => {
		const trimmed = renameValue.trim();
		if (!trimmed) return;
		if (!onRename) return;
		setIsRenameSubmitting(true);
		try {
			await onRename(presetId, trimmed);
			setRenamingId(null);
			setRenameValue("");
		} catch {
			toast.error("No se pudo renombrar la vista.");
		} finally {
			setIsRenameSubmitting(false);
		}
	};

	const hasPresets = presets.length > 0;

	// Show trigger when there are presets OR when loading OR on error.
	// Only hide when we have a definitive empty state (loaded, no error, empty array).
	const shouldShowTrigger = isLoading || isError || hasPresets;

	if (!shouldShowTrigger) return null;

	const handleDelete = (preset: { id: string; name: string }) => {
		const isActive = preset.id === activePresetId;
		onDelete(preset.id);
		// Clear activePresetId when the active preset is deleted
		if (isActive) {
			onDeleteActivePreset?.();
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="size-8 text-muted-foreground hover:text-foreground shrink-0"
					title="Ver vistas guardadas"
					aria-label="Ver vistas guardadas"
				>
					<ListFilter
						className="size-4"
						aria-hidden="true"
					/>
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className="w-76 p-1.5"
				align="start"
			>
				<div className="flex items-center justify-between px-2 pt-1.5 pb-2">
					<span className="text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground">
						Vistas guardadas
					</span>
					{hasPresets && (
						<span className="text-[0.6875rem] font-medium tabular-nums text-muted-foreground/70">
							{presets.length}
						</span>
					)}
				</div>

				{/* loading state — reachable because trigger stays visible while loading */}
				{isLoading && (
					<div className="flex items-center justify-center py-6">
						<Spinner />
					</div>
				)}

				{/* error state — communicate distinctly from loading and empty */}
				{isError && !isLoading && (
					<div className="flex items-center gap-2 px-2 py-4 text-sm text-destructive">
						<AlertCircle
							className="size-4 shrink-0"
							aria-hidden="true"
						/>
						<span>No se pudieron cargar las vistas.</span>
					</div>
				)}

				{/* Empty state — only shown when loaded successfully with no presets */}
				{!isLoading && !isError && !hasPresets && (
					<p className="px-2 py-4 text-center text-sm text-muted-foreground">
						No hay vistas guardadas.
					</p>
				)}

				{hasPresets && (
					<ul className="flex flex-col">
						{presets.map((preset) => {
							const isActive = preset.id === activePresetId;
							const isRenaming = renamingId === preset.id;

							if (isRenaming) {
								return (
									<li
										key={preset.id}
										className="flex items-center gap-1.5 rounded-md bg-muted/50 px-1.5 py-1"
									>
										<Input
											value={renameValue}
											onChange={(event) => setRenameValue(event.target.value)}
											onKeyDown={(event) => {
												if (event.key === "Enter") void handleRenameConfirm(preset.id);
												if (event.key === "Escape") setRenamingId(null);
											}}
											className="h-8 flex-1 text-sm"
											maxLength={100}
											autoFocus
											aria-label="Nuevo nombre de la vista"
										/>
										<Button
											size="icon"
											variant="ghost"
											className="size-8 shrink-0 text-primary"
											onClick={() => void handleRenameConfirm(preset.id)}
											disabled={isRenameSubmitting}
											title="Confirmar nombre"
											aria-label="Confirmar nombre"
										>
											{isRenameSubmitting ? (
												<Spinner />
											) : (
												<Check
													className="size-4"
													aria-hidden="true"
												/>
											)}
										</Button>
									</li>
								);
							}

							return (
								<li
									key={preset.id}
									className={merge(
										"group flex items-center rounded-md transition-colors not-last:border-b not-last:border-border/40",
										isActive ? "bg-muted" : "hover:bg-muted/60",
									)}
								>
									{/* The name itself is the apply affordance */}
									<button
										type="button"
										onClick={() =>
											onApply(preset as { id: string; name: string; filters: unknown })
										}
										title={isActive ? "Vista aplicada" : `Aplicar "${preset.name}"`}
										aria-label={
											isActive ? `Vista aplicada: ${preset.name}` : `Aplicar vista: ${preset.name}`
										}
										className="flex min-w-0 flex-1 items-center gap-2.5 rounded-md py-2.5 pl-2.5 pr-1 text-left"
									>
										{isActive ? (
											<BookmarkCheck
												className="size-4 shrink-0 text-primary"
												aria-hidden="true"
											/>
										) : (
											<Bookmark
												className="size-4 shrink-0 text-muted-foreground/60"
												aria-hidden="true"
											/>
										)}
										<span
											className={merge(
												"flex-1 truncate text-sm",
												isActive ? "font-medium text-foreground" : "text-foreground/90",
											)}
										>
											{preset.name}
										</span>
									</button>

									{/* Actions: revealed on hover/focus, full-size targets */}
									<div className="flex items-center gap-0.5 pr-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
										{onRename && (
											<Button
												size="icon"
												variant="ghost"
												className="size-8 text-muted-foreground hover:text-foreground"
												onClick={() => handleRenameStart(preset)}
												title="Renombrar vista"
												aria-label={`Renombrar vista: ${preset.name}`}
											>
												<Pencil
													className="size-3.5"
													aria-hidden="true"
												/>
											</Button>
										)}

										<ConfirmDialog
											title="¿Eliminar vista?"
											description={`Se eliminará "${preset.name}" de forma permanente.`}
											confirmText="Eliminar"
											onConfirm={() => handleDelete(preset)}
										>
											<Button
												size="icon"
												variant="ghost"
												className="size-8 text-muted-foreground hover:text-destructive"
												title="Eliminar vista"
												aria-label={`Eliminar vista: ${preset.name}`}
											>
												<Trash2
													className="size-3.5"
													aria-hidden="true"
												/>
											</Button>
										</ConfirmDialog>
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</PopoverContent>
		</Popover>
	);
};
