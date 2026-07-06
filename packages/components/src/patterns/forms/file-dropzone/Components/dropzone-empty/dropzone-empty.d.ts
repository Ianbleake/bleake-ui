type DropzoneEmptyProps = {
	name: string;
	accept: string;
	acceptText: string;
	dragActive: boolean;
	onDragEnter: (event: React.DragEvent<HTMLButtonElement>) => void;
	onDragLeave: (event: React.DragEvent<HTMLButtonElement>) => void;
	onDrop: (event: React.DragEvent<HTMLButtonElement>) => void;
	onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
