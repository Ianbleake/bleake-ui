import { merge } from "@bleakedev/bleake-core";
import { useCallback, useEffect, useState } from "react";
import {
	Controller,
	type ControllerRenderProps,
	type FieldValues,
	type Path,
	useWatch,
} from "react-hook-form";
import { DropzoneEmpty } from "./Components/dropzone-empty";
import { FilePreview } from "./Components/file-preview";
import { formatFileSize } from "./utils";

export const FileDropzone = <T extends FieldValues>({
	label,
	name,
	form,
	required = false,
	helperText,
	acceptText,
	className,
	upload,
	accept = "image/png, image/jpeg",
	maxSize = 10 * 1024 * 1024,
	previewSrc,
	getFileUrl,
	getPdfThumbnail,
}: FormFileUploaderProps<T>): React.ReactElement => {
	const uploadWithMeta = useCallback(
		async (
			file: File,
			onProgress: (pct: number) => void,
		): Promise<{ fileId: string; originalName: string; mimeType: string }> => {
			// Decoupled from campaign-dash `useUploadFile`: the consumer owns the
			// upload engine and passes the resolution as a required callback prop.
			const fileId = await upload(file, onProgress);
			return { fileId, originalName: file.name, mimeType: file.type };
		},
		[upload],
	);

	const [dragActive, setDragActive] = useState<boolean>(false);
	const [preview, setPreview] = useState<string | null>(null);
	const [fileName, setFileName] = useState<string | null>(null);
	const [mimeType, setMimeType] = useState<string | null>(null);
	const [fileSize, setFileSize] = useState<string | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [cleared, setCleared] = useState<boolean>(false);

	// Remote URL resolution — replaces the domain `useQueryFileUrl` hook.
	const [resolvedUrl, setResolvedUrl] = useState<string | undefined>(undefined);
	const [pdfThumbnailUrl, setPdfThumbnailUrl] = useState<string | null>(null);
	const [isPdfThumbnailLoading, setIsPdfThumbnailLoading] = useState<boolean>(false);

	const error = form.formState.errors[name];
	const resolvedAcceptText = acceptText ?? `Archivo permitido - máx ${formatFileSize(maxSize)}`;

	const handleFile = useCallback(
		async (file: File, onChange: (value: unknown) => void) => {
			form.clearErrors(name);

			if (file.size > maxSize) {
				form.setError(name, {
					type: "manual",
					message: `El archivo excede el tamaño máximo de ${formatFileSize(maxSize)}`,
				});
				return;
			}

			const acceptedTypes = accept.split(",").map((type) => type.trim());
			const isValidType = acceptedTypes.some((type) => file.type.includes(type.replace("*", "")));

			if (!isValidType) {
				form.setError(name, {
					type: "manual",
					message: "Tipo de archivo no permitido",
				});
				return;
			}

			setCleared(false);
			setFileName(file.name);
			setFileSize(formatFileSize(file.size));
			setMimeType(file.type);
			setProgress(0);
			setIsUploading(true);

			if (file.type.startsWith("image/")) {
				const reader = new FileReader();
				reader.onload = () => setPreview(reader.result as string);
				reader.readAsDataURL(file);
			} else {
				setPreview(null);
			}

			try {
				const result = await uploadWithMeta(file, setProgress);
				setFileName(result.originalName);
				setMimeType(result.mimeType);
				onChange(result.fileId);
			} catch (uploadError) {
				console.error(uploadError);
				form.setError(name, {
					type: "manual",
					message: "Error al subir el archivo",
				});
			} finally {
				setIsUploading(false);
			}
		},
		[uploadWithMeta, maxSize, accept, form, name],
	);

	const handleDrop = useCallback(
		(event: React.DragEvent<HTMLButtonElement>, onChange: (value: unknown) => void) => {
			event.preventDefault();
			setDragActive(false);
			const file = event.dataTransfer.files?.[0];
			if (file) void handleFile(file, onChange);
		},
		[handleFile],
	);

	const handleRemoveFile = (field: ControllerRenderProps<T, Path<T>>) => {
		setCleared(true);
		setFileName(null);
		setPreview(null);
		setFileSize(null);
		setMimeType(null);
		setProgress(0);
		setResolvedUrl(undefined);
		setPdfThumbnailUrl(null);
		field.onChange("");
		form.clearErrors(name);
	};

	const fileId = useWatch({ control: form.control, name });

	const effectivePreviewSrc = cleared ? undefined : previewSrc;

	// Resolve a remote URL for a stored file id when no local preview/previewSrc
	// is available. Replaces the domain `useQueryFileUrl` hook.
	useEffect(() => {
		if (!getFileUrl || !fileId || typeof fileId !== "string") {
			setResolvedUrl(undefined);
			return;
		}
		if (effectivePreviewSrc || preview) {
			setResolvedUrl(undefined);
			return;
		}
		let cancelled = false;
		void getFileUrl(fileId)
			.then((url) => {
				if (!cancelled) setResolvedUrl(url);
			})
			.catch(() => {
				if (!cancelled) setResolvedUrl(undefined);
			});
		return () => {
			cancelled = true;
		};
	}, [fileId, getFileUrl, effectivePreviewSrc, preview]);

	// Resolve a PDF thumbnail for a stored PDF file id. Replaces the domain
	// `usePdfThumbnail` hook.
	const resolvedMimeType = mimeType ?? null;
	const isPdf = resolvedMimeType === "application/pdf";

	useEffect(() => {
		if (!getPdfThumbnail || !fileId || typeof fileId !== "string" || !isPdf) {
			setPdfThumbnailUrl(null);
			setIsPdfThumbnailLoading(false);
			return;
		}
		let cancelled = false;
		setIsPdfThumbnailLoading(true);
		void getPdfThumbnail(fileId)
			.then((url) => {
				if (!cancelled) {
					setPdfThumbnailUrl(url);
					setIsPdfThumbnailLoading(false);
				}
			})
			.catch(() => {
				if (!cancelled) {
					setPdfThumbnailUrl(null);
					setIsPdfThumbnailLoading(false);
				}
			});
		return () => {
			cancelled = true;
		};
	}, [fileId, getPdfThumbnail, isPdf]);

	const previewImageUrl = effectivePreviewSrc ?? preview ?? resolvedUrl;
	const hasFile = !!fileName || !!previewImageUrl || !!preview || (!!fileId && isPdf);
	const isDone = progress === 100 && !isUploading;

	return (
		<div className={merge("flex flex-col gap-2 flex-1", className)}>
			{label && (
				<div className="flex items-center gap-2 min-w-0">
					<span className="wrap-break-word">{label}</span>
					{required && <span className="text-orange-500">*</span>}
				</div>
			)}

			{!label && required && (
				<div className="flex items-center gap-2 min-w-0">
					<span className="text-orange-500">*</span>
				</div>
			)}

			<Controller
				control={form.control}
				name={name}
				render={({ field }) => {
					const imageSrc = previewImageUrl ?? preview;
					const pdfSrc = isPdf ? (resolvedUrl ?? effectivePreviewSrc ?? null) : null;

					return hasFile ? (
						<FilePreview
							fileId={typeof fileId === "string" ? fileId : null}
							fileName={fileName}
							fileSize={fileSize}
							mimeType={resolvedMimeType}
							isPdf={isPdf}
							imageSrc={imageSrc ?? undefined}
							pdfSrc={pdfSrc}
							label={label}
							progress={progress}
							isUploading={isUploading}
							isDone={isDone}
							onRemove={() => handleRemoveFile(field)}
							pdfThumbnailUrl={pdfThumbnailUrl}
							isPdfThumbnailLoading={isPdfThumbnailLoading}
						/>
					) : (
						<DropzoneEmpty
							name={name}
							accept={accept}
							acceptText={resolvedAcceptText}
							dragActive={dragActive}
							onDragEnter={(event) => {
								event.preventDefault();
								setDragActive(true);
							}}
							onDragLeave={(event) => {
								event.preventDefault();
								setDragActive(false);
							}}
							onDrop={(event) => handleDrop(event, field.onChange)}
							onFileSelect={(event) => {
								const file = event.target.files?.[0];
								if (file) void handleFile(file, field.onChange);
							}}
						/>
					);
				}}
			/>

			{error && <span className="text-sm text-red-500">{String(error.message)}</span>}
			{!error && helperText && <span className="text-xs text-muted-foreground">{helperText}</span>}
		</div>
	);
};
