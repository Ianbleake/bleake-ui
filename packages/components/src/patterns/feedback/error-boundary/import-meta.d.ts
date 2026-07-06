// Vite-compatible `import.meta.env` for library consumers.
// The source app had Vite client types providing `import.meta.env.DEV`;
// this ambient declaration restores that contract inside the library build
// without pulling in the full Vite client type package.
interface ImportMetaEnv {
	readonly DEV: boolean;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
