# bleake-ui

A personal design system library built with React 19, TypeScript, Tailwind CSS v4, and Radix UI.

Published to npm as [`@bleakedev/bleake-ui`](https://www.npmjs.com/package/@bleakedev/bleake-ui).

## Structure

```
bleake-ui/
├── packages/
│   ├── core/           # @bleakedev/bleake-core — merge(), twColors, tokens, ThemeProvider
│   ├── components/     # @bleakedev/bleake-components — 42 UI + 7 primitives
│   ├── styles/         # @bleakedev/bleake-styles — compiled Tailwind v4 CSS
│   └── bleake-ui/      # @bleakedev/bleake-ui — umbrella (re-exports all)
├── apps/
│   └── playground/     # Vite app for local dev and visual testing
├── .storybook/         # Storybook 10 config
└── .changeset/         # Versioning config
```

## Getting started

```bash
bun install
```

## Commands

| Command | Description |
|---------|-------------|
| `bun run build` | Build all packages (turbo, dependency order) |
| `bun run dev` | Start all dev servers (turbo) |
| `bun run storybook` | Start Storybook on port 6006 |
| `bun run build-storybook` | Build Storybook as static site |
| `bun run test` | Run all tests (Vitest) |
| `bun run test:watch` | Run tests in watch mode |
| `bun run lint` | Lint + format with Biome |
| `bun run changeset` | Create a new changeset |
| `bun run version-packages` | Bump versions + update changelogs |
| `bun run release` | Build + publish all public packages to npm |

## Publishing flow

```bash
# 1. Create a changeset describing what changed
bunx changeset

# 2. Version the packages (bumps version + generates changelogs)
bunx changeset version

# 3. Commit the version bump
git add -A && git commit -m "chore: version packages"

# 4. Build + publish
bun run release
```

You need an npm access token configured in `~/.npmrc`:

```bash
npm config set //registry.npmjs.org/:_authToken=YOUR_TOKEN
```

## Tech stack

- **Runtime:** React 19
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config, OKLCH tokens)
- **Primitives:** Radix UI (umbrella package) + Base UI (combobox only)
- **Variants:** CVA (class-variance-authority)
- **Dark mode:** next-themes
- **Build:** tsup (ESM + CJS + .d.ts)
- **Package manager:** Bun (workspaces)
- **Orchestration:** Turbo (cached builds)
- **Versioning:** Changesets
- **Linting:** Biome
- **Testing:** Vitest + Testing Library
- **Docs:** Storybook 10

## License

MIT