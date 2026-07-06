type SectionTitleProps = {
	icon: import("react").ElementType;
	title: string;
	/** Descripción opcional debajo del título (variante settings — icon grande) */
	description?: string;
	/** Nodo acción opcional a la derecha (botón, menú, etc.) */
	action?: import("react").ReactNode;
	/** Callback opcional para botón de edición inline (variante candidates — icon pequeño) */
	onEdit?: () => void;
	/** Label del botón de edición (default: "Editar") */
	editLabel?: string;
};
