import { Sparkles } from "lucide-react";
import type React from "react";
import { Button } from "../../../../ui/button";

type ClearFiltersProps = {
	clearFilters: () => void;
};

export const ClearFilters = ({ clearFilters }: ClearFiltersProps): React.ReactElement => {
	return (
		<Button
			variant="ghost"
			size="sm"
			className="h-7 px-2 text-xs text-gray-400 hover:text-gray-600 shrink-0"
			onClick={clearFilters}
		>
			<Sparkles className="size-3" />
			Limpiar
		</Button>
	);
};
