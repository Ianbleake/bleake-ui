type SearchFilterSelectProps = {
	/** Placeholder del trigger cuando no hay selección */
	placeholder?: string;
	/** Label de la opción "todos" (e.g. "Todas las campañas") */
	allLabel?: string;
	/** Placeholder del input de búsqueda */
	searchPlaceholder?: string;
	/** Valor seleccionado (ID) o undefined */
	value: string | undefined;
	/** Callback al cambiar selección — undefined = limpiar */
	onChange: (value: string | undefined) => void;
	/** Opciones disponibles */
	options: Option[];
	/** Está cargando las opciones */
	isLoading?: boolean;
	/** Callback de búsqueda — se llama con debounce para buscar en el backend */
	onSearch?: (term: string) => void;
	/** Clases adicionales para el contenedor */
	className?: string;
};
