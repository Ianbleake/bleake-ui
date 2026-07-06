import { useIsMobile } from "@bleakedev/bleake-core";
import type React from "react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ClearFilters } from "./clear-filters";
import { ExpandedFilters } from "./expanded-filters";
import { FilterButton } from "./filter-button";
import { MobileFilters } from "./mobile-filters";
import { PresetListButton } from "./preset-list-button";
import { PresetSaveButton } from "./preset-save-button";

export const FiltersWrapper = ({
	activeFilterCount,
	hasActiveFilters,
	children,
	clearFilters,
	direction = "right",
	variant = "inline",
	mobileTitle = "Filtros",
	mobileDescription = "Ajusta tus filtros para encontrar lo que buscas",
	presets,
}: FiltersWrapperProps): React.ReactElement => {
	const isMobile = useIsMobile();
	const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

	// Preset list state — loaded via callback, replacing the domain useFilterPresets hook.
	const [presetList, setPresetList] = useState<FilterPreset[]>([]);
	const [isPresetsLoading, setIsPresetsLoading] = useState<boolean>(false);
	const [isPresetsError, setIsPresetsError] = useState<boolean>(false);
	const [isSavingPreset, setIsSavingPreset] = useState<boolean>(false);

	const loadPresets = async () => {
		if (!presets?.onLoadPresets) {
			setPresetList([]);
			return;
		}
		setIsPresetsLoading(true);
		setIsPresetsError(false);
		try {
			const list = await presets.onLoadPresets();
			setPresetList(list);
		} catch {
			setIsPresetsError(true);
		} finally {
			setIsPresetsLoading(false);
		}
	};

	// Load presets on mount and whenever the scope or loader changes. We refetch
	// when the scope changes so a different screen's presets are fetched.
	// biome-ignore lint/correctness/useExhaustiveDependencies: loadPresets closes over presets?.onLoadPresets
	useEffect(() => {
		void loadPresets();
	}, [presets?.scope, presets?.onLoadPresets]);

	// Save flow — replaces the domain useCreateFilterPreset mutation.
	const handleSavePreset = async (name: string, onSuccess: () => void) => {
		if (!presets?.onSavePreset) return;
		const envelope = presets.onSerialize();
		setIsSavingPreset(true);
		try {
			await presets.onSavePreset(name, envelope);
			toast.success(`Vista "${name}" guardada.`);
			onSuccess();
			// Refresh the list so the new preset appears.
			await loadPresets();
		} catch {
			toast.error("No se pudo guardar la vista.");
		} finally {
			setIsSavingPreset(false);
		}
	};

	const handleApplyPreset = (preset: FilterPreset) => {
		if (!presets) return;
		presets.onApply(preset.filters);
		presets.setActivePresetId(preset.id);
	};

	const handleDeletePreset = async (id: string) => {
		if (!presets?.onDeletePreset) return;
		try {
			await presets.onDeletePreset(id);
			await loadPresets();
		} catch {
			toast.error("No se pudo eliminar la vista.");
		}
	};

	const triggerElement = (
		<FilterButton
			isOpen={filtersOpen}
			activeFilterCount={activeFilterCount}
			onClick={() => setFiltersOpen((prev) => !prev)}
		/>
	);

	const clearElement = hasActiveFilters ? <ClearFilters clearFilters={clearFilters} /> : null;

	const renderPresetListButton = () =>
		presets ? (
			<PresetListButton
				presets={presetList}
				activePresetId={presets.activePresetId}
				onApply={handleApplyPreset}
				onDelete={(id) => void handleDeletePreset(id)}
				isLoading={isPresetsLoading}
				isError={isPresetsError}
				onDeleteActivePreset={() => presets.setActivePresetId(null)}
			/>
		) : null;

	const renderPresetSaveButton = () =>
		presets && hasActiveFilters ? (
			<PresetSaveButton
				onSave={(name, onSuccess) => void handleSavePreset(name, onSuccess)}
				isSaving={isSavingPreset}
			/>
		) : null;

	if (variant === "headless") {
		const headlessChildren = children as (args: HeadlessRenderArgs) => React.ReactElement;

		const panelRender = (content: React.ReactElement): React.ReactElement => {
			if (isMobile) {
				return (
					<MobileFilters
						isOpen={filtersOpen}
						onOpenChange={setFiltersOpen}
						activeFilterCount={activeFilterCount}
						hasActiveFilters={hasActiveFilters}
						clearFilters={clearFilters}
						title={mobileTitle}
						description={mobileDescription}
					>
						{content}
					</MobileFilters>
				);
			}

			return (
				<ExpandedFilters
					isOpen={filtersOpen}
					hasActiveFilters={hasActiveFilters}
					direction={direction}
					variant="panel"
					clearFilters={clearFilters}
				>
					{content}
				</ExpandedFilters>
			);
		};

		return headlessChildren({
			trigger: isMobile ? null : triggerElement,
			clear: isMobile ? null : clearElement,
			panel: panelRender,
			presetList: isMobile ? null : renderPresetListButton(),
			presetSave: isMobile ? null : renderPresetSaveButton(),
		});
	}

	const standardChildren = children as React.ReactElement;

	if (isMobile) {
		return (
			<MobileFilters
				isOpen={filtersOpen}
				onOpenChange={setFiltersOpen}
				activeFilterCount={activeFilterCount}
				hasActiveFilters={hasActiveFilters}
				clearFilters={clearFilters}
				title={mobileTitle}
				description={mobileDescription}
			>
				{standardChildren}
			</MobileFilters>
		);
	}

	if (variant === "panel") {
		return (
			<div className="flex flex-col w-full">
				<div className="flex items-center gap-1">
					{triggerElement}
					{clearElement}
				</div>

				<ExpandedFilters
					isOpen={filtersOpen}
					hasActiveFilters={hasActiveFilters}
					direction={direction}
					variant="panel"
					clearFilters={clearFilters}
				>
					{standardChildren}
				</ExpandedFilters>
			</div>
		);
	}

	const presetListButton = renderPresetListButton();
	// Save button shows only when there are active filters to save —
	// regardless of whether the filters panel is expanded or collapsed.
	const presetSaveButton = renderPresetSaveButton();

	return (
		<div className="flex items-center gap-1 min-w-0 overflow-x-auto">
			{/* Preset list button: placed left of the funnel (between search input and funnel) */}
			{presetListButton}

			{direction === "left" ? (
				<>
					<ExpandedFilters
						isOpen={filtersOpen}
						hasActiveFilters={hasActiveFilters}
						direction={direction}
						variant="inline"
						clearFilters={clearFilters}
					>
						{standardChildren}
					</ExpandedFilters>

					{triggerElement}
				</>
			) : (
				<>
					{triggerElement}

					<ExpandedFilters
						isOpen={filtersOpen}
						hasActiveFilters={hasActiveFilters}
						direction={direction}
						variant="inline"
						clearFilters={clearFilters}
					>
						{standardChildren}
					</ExpandedFilters>
				</>
			)}

			{/* Save view button: only visible when there are active filters */}
			{presetSaveButton}
		</div>
	);
};
