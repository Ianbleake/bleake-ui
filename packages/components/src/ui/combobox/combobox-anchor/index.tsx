import { useRef } from "react";

export const useComboboxAnchor = (): React.RefObject<HTMLDivElement | null> => {
	return useRef<HTMLDivElement | null>(null);
};
