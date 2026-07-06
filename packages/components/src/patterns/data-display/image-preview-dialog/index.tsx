import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../../../ui/dialog";
import { PreviewContent } from "./Components/preview-content";

export const ImagePreviewDialog = ({
	src,
	alt = "image",
	mimeType,
	className,
	previewClassName,
	title,
	onDownload,
}: ImagePreviewDialogProps): React.ReactElement => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<img
					src={src}
					alt={alt}
					referrerPolicy="no-referrer"
					loading="lazy"
					decoding="async"
					className={merge(
						"cursor-pointer rounded-md object-contain transition hover:opacity-80 h-35",
						previewClassName,
					)}
				/>
			</DialogTrigger>

			<DialogContent className={merge("sm:max-w-3xl p-0 gap-0 overflow-hidden", className)}>
				<PreviewContent
					title={title}
					src={src}
					alt={alt}
					mimeType={mimeType}
					onDownload={onDownload}
				/>
			</DialogContent>
		</Dialog>
	);
};
