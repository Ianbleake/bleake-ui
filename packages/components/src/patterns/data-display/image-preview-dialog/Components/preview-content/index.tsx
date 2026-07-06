import { merge } from "@bleakedev/bleake-core";
import { Download, FileX } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../../ui/button";
import { DialogTitle } from "../../../../../ui/dialog";
import { Separator } from "../../../../../ui/separator";
import { inferFileType } from "../../utils";

export const PreviewContent = ({
	title,
	src,
	alt,
	mimeType,
	downloadFilename,
	onDownload,
}: PreviewContentProps): React.ReactElement => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [hasError, setHasError] = useState<boolean>(false);

	const fileTypeLabel = inferFileType(src, mimeType);

	const handleDownload = () => {
		onDownload?.(src, downloadFilename ?? alt ?? "archivo");
	};

	return (
		<>
			<div className="flex items-center justify-between px-5 py-3">
				<div className="flex flex-col gap-0.5">
					{title && <DialogTitle className="text-sm font-medium">{title}</DialogTitle>}
					<span className="text-xs text-muted-foreground">{fileTypeLabel}</span>
				</div>
				{onDownload && (
					<Button
						variant="ghost"
						size="sm"
						className="mr-4 hover:bg-orange-100 hover:text-orange-600 hover:border hover:border-orange-600"
						onClick={handleDownload}
					>
						<Download className="size-3.5" />
						Descargar
					</Button>
				)}
			</div>

			<Separator />

			<div className="flex items-center justify-center p-6 bg-muted/30">
				{isLoading && <div className="w-full h-64 animate-pulse bg-muted rounded-lg" />}
				{hasError && (
					<div className="flex flex-col items-center gap-2 py-12 text-muted-foreground">
						<FileX className="size-8" />
						<span className="text-xs">No se pudo cargar el archivo</span>
					</div>
				)}
				<img
					src={src}
					alt={alt}
					referrerPolicy="no-referrer"
					decoding="async"
					onLoad={() => setIsLoading(false)}
					onError={() => {
						setIsLoading(false);
						setHasError(true);
					}}
					className={merge(
						"max-h-[70vh] w-auto object-contain rounded-md transition-opacity duration-200",
						isLoading && "opacity-0 absolute",
						hasError && "hidden",
					)}
				/>
			</div>
		</>
	);
};
