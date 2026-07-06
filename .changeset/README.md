# Changesets

Changesets help manage versioning and changelogs for the bleake-ui packages.

## How it works

1. When you make a change, run `bunx changeset` to create a changeset describing the change
2. A changeset is a markdown file in this folder that says which packages changed and how (major/minor/patch)
3. When ready to release, run `bunx changeset version` to bump versions and update CHANGELOG.md
4. Then run `bun run build && npm publish` to publish

## Publishing flow

```bash
# 1. Create a changeset describing your change
bunx changeset

# 2. Version the packages (bumps version + updates changelogs)
bunx changeset version

# 3. Build all packages
bun run build

# 4. Publish (from root, changesets publishes all public packages)
npm publish --workspaces --access public
```

## Package groups

- `@bleakedev/bleake-core` — utils, tokens, theme provider
- `@bleakedev/bleake-components` — UI components
- `@bleakedev/bleake-styles` — compiled CSS
- `@bleakedev/bleake-ui` — umbrella package (re-exports all)

The playground (`@bleakedev/playground`) is private and never published.