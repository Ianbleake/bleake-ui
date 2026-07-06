import { merge } from "@bleakedev/bleake-core";
import { Upload, X } from "lucide-react";
import type React from "react";
import { useCallback, useRef, useState } from "react";

const ACCEPTED_TYPES = [
	"text/csv",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const ACCEPTED_EXTENSIONS = [".csv", ".xlsx"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const BulkFileDropzone = ({
	onFileSelected,
	error,
	isParsing = false,
	fileName,
	onClear,
}: BulkFileDropzoneProps): React.ReactElement => {
	const [dragActive, setDragActive] = useState<boolean>(false);
	const [localError, setLocalError] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const validate = useCallback((file: File): string | null => {
		const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
		if (!ACCEPTED_EXTENSIONS.includes(ext) && !ACCEPTED_TYPES.includes(file.type)) {
			return "Tipo de archivo no permitido. Formatos aceptados: .csv, .xlsx";
		}
		if (file.size > MAX_FILE_SIZE) {
			return "El archivo excede el tamaño máximo de 10 MB";
		}
		return null;
	}, []);

	const handleFile = useCallback(
		(file: File) => {
			const validationError = validate(file);
			if (validationError) {
				setLocalError(validationError);
				return;
			}
			setLocalError(null);
			const ext = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
			onFileSelected(file, ext);
		},
		[validate, onFileSelected],
	);

	const handleDrop = useCallback(
		(event: React.DragEvent<HTMLButtonElement>) => {
			event.preventDefault();
			setDragActive(false);
			const file = event.dataTransfer.files?.[0];
			if (file) handleFile(file);
		},
		[handleFile],
	);

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const file = event.target.files?.[0];
			if (file) handleFile(file);
			// Reset input so the same file can be re-selected after a clear
			if (inputRef.current) inputRef.current.value = "";
		},
		[handleFile],
	);

	const displayedError = error ?? localError;

	if (fileName) {
		return (
			<div className="flex items-center justify-between rounded-lg border border-dashed border-border bg-muted/30 p-4">
				<div className="flex items-center gap-3">
					<Upload className="size-5 shrink-0 text-muted-foreground" />
					<span className="text-sm font-medium truncate max-w-xs">{fileName}</span>
					{isParsing && (
						<span className="text-xs text-muted-foreground animate-pulse">Procesando…</span>
					)}
				</div>
				{onClear && !isParsing && (
					<button
						type="button"
						onClick={onClear}
						className="rounded-md p-1 hover:bg-muted transition-colors"
						aria-label="Quitar archivo"
					>
						<X className="size-4 text-muted-foreground" />
					</button>
				)}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-2">
			<button
				type="button"
				aria-label="Zona de carga de archivo — arrastra o haz clic"
				onDragEnter={(event) => {
					event.preventDefault();
					setDragActive(true);
				}}
				onDragLeave={(event) => {
					event.preventDefault();
					setDragActive(false);
				}}
				onDragOver={(event) => event.preventDefault()}
				onDrop={handleDrop}
				onClick={() => inputRef.current?.click()}
				className={merge(
					"flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-10 cursor-pointer transition-colors select-none w-full bg-white",
					dragActive
						? "border-orange-400 bg-orange-50/40"
						: "border-border hover:border-orange-300 hover:bg-white",
					displayedError && "border-red-400",
				)}
			>
				<Upload className="size-8 text-muted-foreground" />
				<div className="text-center">
					<p className="text-sm font-medium">Arrastra un archivo o haz clic para seleccionar</p>
					<p className="text-xs text-muted-foreground mt-1">CSV o XLSX — máx. 10 MB</p>
				</div>
			</button>

			<input
				ref={inputRef}
				type="file"
				accept=".csv,.xlsx,text/csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
				className="sr-only"
				onChange={handleInputChange}
				tabIndex={-1}
			/>

			{displayedError && <span className="text-sm text-red-500">{displayedError}</span>}
		</div>
	);
};
