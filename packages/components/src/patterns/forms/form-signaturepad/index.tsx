import { CircleCheckBig, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, type FieldValues, useWatch } from "react-hook-form";
import { ImagePreviewDialog } from "../../data-display/image-preview-dialog";
import { SignaturePad } from "../signature-pad";
import { SignaturePadAlertDialog } from "./Components/signature-pad-alert-dialog";

export const FormSignaturePad = <T extends FieldValues>({
	name,
	form,
	required,
	className,
	upload,
	getFileUrl,
}: FormSignaturePadProps<T>) => {
	const [preview, setPreview] = useState<string | null>(null);
	const [resolvedUrl, setResolvedUrl] = useState<string | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(false);
	const pendingBlobRef = useRef<Blob | null>(null);
	const fieldOnChangeRef = useRef<((value: string) => void) | null>(null);

	const fileId = useWatch({
		control: form.control,
		name,
	});

	// Resolve a displayable URL for a stored file id via the optional callback.
	// Replaces the domain `useQueryFileUrl` hook.
	useEffect(() => {
		if (!fileId || typeof fileId !== "string" || !getFileUrl) {
			setResolvedUrl(null);
			return;
		}
		let cancelled = false;
		void getFileUrl(fileId)
			.then((url) => {
				if (!cancelled) setResolvedUrl(url);
			})
			.catch(() => {
				if (!cancelled) setResolvedUrl(null);
			});
		return () => {
			cancelled = true;
		};
	}, [fileId, getFileUrl]);

	const error = form.formState.errors[name];

	const uploadSignature = useCallback(
		async (blob: Blob, onChange: (value: string) => void) => {
			const file = new File([blob], "signature.png", {
				type: "image/png",
			});

			setPreview(URL.createObjectURL(file));
			setProgress(0);
			setIsUploading(true);

			try {
				// Decoupled from campaign-dash `useUploadFile`: the consumer owns the
				// upload engine and passes the resolution as a callback prop.
				const resultFileId = await upload(file, setProgress);
				onChange(resultFileId);
			} catch (err) {
				console.error(err);
			} finally {
				setIsUploading(false);
			}
		},
		[upload],
	);

	const handleDisclaimerConfirm = useCallback(() => {
		if (pendingBlobRef.current && fieldOnChangeRef.current) {
			void uploadSignature(pendingBlobRef.current, fieldOnChangeRef.current);
		}
		pendingBlobRef.current = null;
		fieldOnChangeRef.current = null;
		setDisclaimerOpen(false);
	}, [uploadSignature]);

	const handleDisclaimerCancel = useCallback(() => {
		pendingBlobRef.current = null;
		fieldOnChangeRef.current = null;
		setDisclaimerOpen(false);
	}, []);

	return (
		<div className={className}>
			<SignaturePadAlertDialog
				open={disclaimerOpen}
				onOpenChange={setDisclaimerOpen}
				onConfirm={handleDisclaimerConfirm}
				onCancel={handleDisclaimerCancel}
			/>

			<Controller
				control={form.control}
				name={name}
				rules={{ required: required ? "Este campo es requerido" : false }}
				render={({ field }) => {
					const imageSrc = resolvedUrl ?? preview;
					const hasSignature = !!imageSrc;

					const handleSignature = (blob: Blob) => {
						pendingBlobRef.current = blob;
						fieldOnChangeRef.current = field.onChange;
						setDisclaimerOpen(true);
					};

					const handleRemove = () => {
						setPreview(null);
						setResolvedUrl(null);
						setProgress(0);
						field.onChange("");
					};

					return (
						<div className="flex flex-col gap-2">
							{!hasSignature ? (
								<SignaturePad
									onSignature={handleSignature}
									disabled={isUploading}
								/>
							) : (
								<div className="border rounded-lg relative p-3">
									<button
										type="button"
										onClick={handleRemove}
										className="absolute top-2 right-2 cursor-pointer"
									>
										<X size={14} />
									</button>

									{imageSrc && (
										<ImagePreviewDialog
											src={imageSrc}
											title="Firma digital"
											alt={"vista previa de la firma"}
											previewClassName="w-full h-32 object-contain mb-2"
										/>
									)}

									{isUploading && (
										<div className="flex flex-col gap-2">
											<p className="text-xs text-gray-500">Subiendo... {progress}%</p>
											<div className="w-full bg-gray-200 rounded-full h-2">
												<div
													className="h-full bg-accent"
													style={{ width: `${progress}%` }}
												/>
											</div>
										</div>
									)}

									{progress === 100 && !isUploading && (
										<div className="flex items-center gap-2 text-green-600 text-xs">
											<CircleCheckBig size={12} />
											Firma subida
										</div>
									)}
								</div>
							)}
						</div>
					);
				}}
			/>

			{error && <span className="text-sm text-red-500">{String(error.message)}</span>}
		</div>
	);
};
