type PresetSaveButtonProps = {
	/**
	 * Called with the trimmed name when the user confirms save.
	 * Receives a success callback to invoke after the mutation succeeds —
	 * the button defers closing and clearing the input until onSuccess is called.
	 */
	onSave: (name: string, onSuccess: () => void) => void;
	isSaving: boolean;
};
