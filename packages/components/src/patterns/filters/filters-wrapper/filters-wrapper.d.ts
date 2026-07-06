/**
 * A stored filter preset. Decoupled from campaign-dash domain schema: the
 * `filters` payload is opaque (`unknown`) so each screen owns its own shape.
 */
type FilterPreset = {
	id: string;
	name: string;
	filters: unknown;
};

type HeadlessRenderArgs = {
	trigger: React.ReactElement | null;
	clear: React.ReactElement | null;
	panel: (content: React.ReactElement) => React.ReactElement;
	/** PresetListButton element, or null if no presets config is provided. */
	presetList: React.ReactElement | null;
	/** PresetSaveButton element, or null if no presets config or no active filters. */
	presetSave: React.ReactElement | null;
};

/**
 * Optional preset configuration for FiltersWrapper.
 * When provided, the wrapper renders preset save/list controls.
 * Decoupled from campaign-dash: hooks are replaced by callbacks and the
 * filter envelope is `unknown` (each screen owns its own shape).
 */
type FiltersWrapperPresetsConfig = {
	/** The scope identifier for this screen (e.g. "candidates_global"). */
	scope: string;
	/**
	 * Zero-arg function that reads current filter state and serializes it to an
	 * opaque envelope. The screen closes over its own store — the wrapper stays
	 * filter-shape-agnostic.
	 */
	onSerialize: () => unknown;
	/**
	 * Apply a stored preset envelope back to the screen's filter store.
	 * Called when the user clicks Apply in the preset list.
	 */
	onApply: (envelope: unknown) => void;
	/**
	 * Persist a new preset. Replaces the domain `useCreateFilterPreset` hook.
	 * The wrapper tracks pending state and surfaces errors via toast.
	 */
	onSavePreset?: (name: string, filters: unknown) => Promise<void>;
	/**
	 * Load available presets for this scope. Replaces `useFilterPresets`.
	 * Returns an empty array when omitted.
	 */
	onLoadPresets?: () => Promise<FilterPreset[]>;
	/**
	 * Delete a preset by id. Replaces `useDeleteFilterPreset`.
	 */
	onDeletePreset?: (id: string) => Promise<void>;
	/** Currently active preset id. Null if no preset is active. */
	activePresetId: string | null;
	/** Setter for activePresetId, owned by the screen. */
	setActivePresetId: (id: string | null) => void;
};

type FiltersWrapperBaseProps = {
	activeFilterCount: number;
	hasActiveFilters: boolean;
	clearFilters: () => void;
	direction?: "left" | "right";
	mobileTitle?: string;
	mobileDescription?: string;
	/** Optional preset configuration. When provided, renders preset save/list controls. */
	presets?: FiltersWrapperPresetsConfig;
};

type FiltersWrapperStandardProps = FiltersWrapperBaseProps & {
	variant?: "inline" | "panel";
	children: React.ReactElement;
};

type FiltersWrapperHeadlessProps = FiltersWrapperBaseProps & {
	variant: "headless";
	children: (args: HeadlessRenderArgs) => React.ReactElement;
};

type FiltersWrapperProps = FiltersWrapperStandardProps | FiltersWrapperHeadlessProps;
