# @bleakedev/bleake-components

## 0.0.6

### Patch Changes

- Fix: workspace:_ not resolved to real versions on npm publish
  Changed publish command from npm publish --workspaces to changeset publish
  which converts workspace:_ to actual version numbers before publishing
- Updated dependencies
  - @bleakedev/bleake-core@0.0.6

## 0.0.5

### Patch Changes

- Add form-field stories (10) and filters-wrapper headless story
  Add 133 tests across 4 batches (22 UI components, 8 patterns, 6 forms)
  Add jsdom mocks for ResizeObserver, IntersectionObserver, matchMedia, scrollIntoView
- Updated dependencies
  - @bleakedev/bleake-core@0.0.5

## 0.0.4

### Patch Changes

- Add 21 patterns: 6 data-display, 1 filters-wrapper, 14 forms
  Add useIsMobile hook to core
  Add react-hook-form and @hookform/resolvers as dependencies
  Desacoplar: useDownload → onDownload callback, useUploadFile → upload callback, filter-preset hooks → callback props
- Updated dependencies
  - @bleakedev/bleake-core@0.0.4

## 0.0.3

### Patch Changes

- Add 6 decoupled patterns: app-toaster, skeletons, filter-date-range-picker, search-filter-select, search-input, landing-layout (slot-based)
  Add useDebounce and useSearch hooks to core
  Add date-fns as dependency
- Updated dependencies
  - @bleakedev/bleake-core@0.0.3

## 0.0.2

### Patch Changes

- Add 8 generic patterns: slide-up, empty, error-boundary, filter-select, section-title, app-breadcrumbs, app-tabs, table-pagination
  Add react-router as dependency for app-breadcrumbs
  Fix pre-existing lint issues in separator test and item story
- Updated dependencies
  - @bleakedev/bleake-core@0.0.2

## 0.0.1

### Patch Changes

- Initial release of bleake-ui design system library
  - @bleakedev/bleake-core: merge() helper, twColors palette, OKLCH tokens, ThemeProvider
  - @bleakedev/bleake-components: 42 shadcn UI components + 7 design-system primitives
  - @bleakedev/bleake-styles: compiled Tailwind v4 CSS
  - @bleakedev/bleake-ui: umbrella package re-exporting all
- Updated dependencies
  - @bleakedev/bleake-core@0.0.1
