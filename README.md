# bleake-ui

A personal design system library built with React 19, TypeScript, Tailwind CSS v4, and Radix UI.

## Structure

```
bleake-ui/
├── packages/
│   ├── core/           # @bleakedev/bleake-core — cn(), tokens, ThemeProvider
│   ├── components/     # @bleakedev/bleake-components — shadcn base + primitives
│   ├── styles/         # @bleakedev/bleake-styles — compiled Tailwind CSS
│   └── bleake-ui/      # @bleakedev/bleake-ui — umbrella package (re-exports all)
├── apps/
│   └── playground/     # Vite app for local development and testing
└── docs/
```

## Getting started

```bash
bun install
bun run build
```

## License

MIT# bleake-ui
