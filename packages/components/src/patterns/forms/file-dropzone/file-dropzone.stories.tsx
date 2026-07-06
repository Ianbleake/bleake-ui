import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { FileDropzone } from "./index";

const meta: Meta<typeof FileDropzone> = {
	title: "Design System/Patterns/Forms/FileDropzone",
	component: FileDropzone,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof FileDropzone>;

// Decoupled: the consumer owns the upload engine. This no-op lets the story
// render without a backend.
const noopUpload = (_file: File, _onProgress: (pct: number) => void) =>
	Promise.resolve("mock-file-id");

export const Default: Story = {
	render: () => {
		const form = useForm({ defaultValues: { file: "" } });
		return (
			<div className="w-96">
				<FileDropzone
					label="Upload file"
					name="file"
					form={form}
					upload={noopUpload}
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const form = useForm({ defaultValues: { file: "" } });
		return (
			<div className="w-96">
				<FileDropzone
					label="Company logo"
					name="file"
					form={form}
					required
					upload={noopUpload}
				/>
			</div>
		);
	},
};

export const ImageOnly: Story = {
	render: () => {
		const form = useForm({ defaultValues: { avatar: "" } });
		return (
			<div className="w-96">
				<FileDropzone
					label="Profile picture"
					name="avatar"
					form={form}
					accept="image/png, image/jpeg, image/webp"
					acceptText="PNG, JPG or WebP — max 5 MB"
					maxSize={5 * 1024 * 1024}
					upload={noopUpload}
				/>
			</div>
		);
	},
};

export const PDFOnly: Story = {
	render: () => {
		const form = useForm({ defaultValues: { document: "" } });
		return (
			<div className="w-96">
				<FileDropzone
					label="Contract"
					name="document"
					form={form}
					accept="application/pdf"
					acceptText="PDF only — max 10 MB"
					upload={noopUpload}
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const form = useForm({ defaultValues: { file: "" } });
		return (
			<div className="w-96">
				<FileDropzone
					label="Supporting document"
					name="file"
					form={form}
					helperText="Upload any supporting documentation for this campaign."
					upload={noopUpload}
				/>
			</div>
		);
	},
};
