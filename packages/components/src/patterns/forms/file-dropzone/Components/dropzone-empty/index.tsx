import { merge } from "@bleakedev/bleake-core";
import { CloudUpload } from "lucide-react";

const DropzoneEmpty = ({
	name,
	accept,
	acceptText,
	dragActive,
	onDragEnter,
	onDragLeave,
	onDrop,
	onFileSelect,
}: DropzoneEmptyProps): React.ReactElement => (
	<button
		type="button"
		className={merge(
			"w-full flex flex-col items-center gap-3 py-8 px-4 rounded-lg border-2 transition-all cursor-pointer border-dashed",
			dragActive ? "border-accent bg-accent-muted" : "border-border-default bg-surface-0",
		)}
		onDragEnter={onDragEnter}
		onDragLeave={onDragLeave}
		onDragOver={(event) => event.preventDefault()}
		onDrop={onDrop}
	>
		<input
			type="file"
			className="hidden"
			id={name}
			accept={accept}
			onChange={onFileSelect}
		/>

		<label
			htmlFor={name}
			className="cursor-pointer flex flex-col items-center gap-3"
		>
			<div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/15 bg-gray-100">
				<CloudUpload className="h-6 w-6 text-gray-500" />
			</div>

			<div className="flex flex-col items-center gap-2">
				<p className="text-xs font-semibold text-gray-600">
					Arrastra o clickea para subir tu archivo
				</p>
				<p className="text-xs text-gray-500 font-light">{acceptText}</p>
			</div>
		</label>
	</button>
);

export { DropzoneEmpty };
