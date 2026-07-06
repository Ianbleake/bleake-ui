type PresetListItem = { id: string; name: string };

type PresetListButtonProps = {
	/**
	 * Presets to list. The wrapper may pass fuller objects (with `filters`);
	 * the button only reads `id`/`name` for display and forwards the original
	 * object to `onApply` so the wrapper can resolve the filter envelope.
	 */
	presets: Array<PresetListItem>;
	activePresetId: string | null;
	onApply: (preset: { id: string; name: string; filters: unknown }) => void;
	onDelete: (id: string) => void;
	/** Optional rename handler. When provided, the rename affordance is active. */
	onRename?: (id: string, name: string) => Promise<void> | void;
	/** Whether the preset list is loading. */
	isLoading?: boolean;
	/** Whether the preset list failed to load. */
	isError?: boolean;
	/** Called after a successful delete of the currently-active preset, so the screen can clear its activePresetId. */
	onDeleteActivePreset?: () => void;
};
