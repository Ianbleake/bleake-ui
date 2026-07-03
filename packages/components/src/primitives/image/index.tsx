import { merge } from "@bleakedev/bleake-core";
import { CameraOff } from "lucide-react";
import type React from "react";

type ImageProps = {
	url: string | undefined;
	icon?: React.ElementType;
	label?: string;
	className?: string;
	imageClassName?: string;
	previewClassName?: string;
};

export const Image = ({
	url,
	icon,
	label,
	className,
	imageClassName,
	previewClassName,
}: ImageProps): React.ReactElement => {
	if (url === undefined) {
		return (
			<div
				className={merge(
					"py-3 my-2 rounded-lg border flex items-center justify-center bg-gray-100/50 h-35",
					className,
				)}
			>
				<CameraOff className="text-gray-400" />
			</div>
		);
	}

	const Icon = icon;

	return (
		<div className={merge("flex flex-col gap-1", className)}>
			<div className="flex flex-row items-center gap-2">
				{Icon && <Icon className="text-gray-500 h-5 w-5" />}
				{label && <p className="text-xs text-gray-500">{label}</p>}
			</div>

			<div
				className={merge("py-2 rounded-lg border flex items-center justify-center", imageClassName)}
			>
				{/* TODO: domain-specific code removed during migration.
				    Original used ImagePreviewDialog (a campaign-dash pattern). */}
				<img
					src={url}
					alt={label ?? ""}
					className={merge("max-h-full max-w-full object-contain", previewClassName)}
				/>
			</div>
		</div>
	);
};
