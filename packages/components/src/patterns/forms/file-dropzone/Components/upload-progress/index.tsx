import { CircleCheckBig } from "lucide-react";
import { Separator } from "../../../../../ui/separator";

const UploadProgress = ({
	fileName,
	fileSize,
	progress,
	isUploading,
	isDone,
}: UploadProgressProps): React.ReactElement => (
	<>
		<Separator />
		<div className="px-3 py-3">
			{isUploading && (
				<div className="flex flex-col gap-2">
					<p className="text-xs text-gray-500 font-light">Subiendo... {progress}%</p>
					<div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
						<div
							className="h-full bg-accent transition-all"
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
			)}

			{isDone && (
				<div className="flex flex-col gap-2">
					<div className="flex flex-row items-center justify-between">
						<p className="text-sm font-medium text-gray-900">{fileName}</p>
						<div className="flex flex-row items-center gap-1">
							<CircleCheckBig className="h-3 w-3 text-green-600" />
							<p className="text-xs text-green-600">Subido</p>
						</div>
					</div>
					<p className="text-xs font-light text-gray-500">{fileSize}</p>
				</div>
			)}
		</div>
	</>
);

export { UploadProgress };
