type SortableHeadProps = {
	/** Campo de sort que este header controla (e.g. "name", "spending_cap") */
	field: string;
	/** Valor actual del sort (e.g. "name", "-name", undefined) */
	currentSort: string | undefined;
	/** Callback al clickear — recibe el field */
	onSort: (field: string) => void;
	/** Clases adicionales para el TableHead */
	className?: string;
	/** Label del header */
	children: import("react").ReactNode;
};
