# @bleakedev/bleake-ui

A personal design system library built with React 19, TypeScript, Tailwind CSS v4, and Radix UI.

## Installation

```bash
npm install @bleakedev/bleake-ui
```

You also need React and React DOM as peer dependencies (if you don't have them already):

```bash
npm install react react-dom
```

## Usage

Import the compiled CSS once in your app entry point, then use the components:

```tsx
import "@bleakedev/bleake-ui/styles.css";
import { Button, Card, Input, Label, ThemeProvider } from "@bleakedev/bleake-ui";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Card className="p-6 max-w-sm">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Sign in</h2>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <Button className="w-full">Continue</Button>
        </div>
      </Card>
    </ThemeProvider>
  );
}
```

## Dark mode

The `ThemeProvider` uses `next-themes` under the hood with `attribute="class"`. This toggles a `.dark` class on your `<html>` element, which activates the dark token set.

```tsx
import { ThemeProvider, useTheme, Button } from "@bleakedev/bleake-ui";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </Button>
  );
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

## Theming — overriding tokens

All design tokens are defined as CSS custom properties (OKLCH color space). You can override them in your own CSS:

```css
:root {
  /* Override the primary color */
  --primary: oklch(0.6 0.2 250);
  --primary-foreground: oklch(0.98 0.01 250);
}

.dark {
  /* Override dark mode primary */
  --primary: oklch(0.7 0.2 250);
  --primary-foreground: oklch(0.15 0.02 250);
}
```

### Available tokens

| Token | Description | Default (light) |
|-------|-------------|-----------------|
| `--background` | Page background | `oklch(1 0 0)` |
| `--foreground` | Text color | `oklch(0.145 0 0)` |
| `--card` | Card background | `oklch(1 0 0)` |
| `--primary` | Primary action color | `oklch(0.65 0.22 50)` |
| `--secondary` | Secondary color | `oklch(0.95 0.02 90)` |
| `--muted` | Muted background | `oklch(0.97 0 0)` |
| `--accent` | Accent color | `oklch(0.72 0.18 55)` |
| `--destructive` | Destructive actions | `oklch(0.577 0.245 27.325)` |
| `--border` | Border color | `oklch(0.922 0 0)` |
| `--input` | Input border | `oklch(0.922 0 0)` |
| `--ring` | Focus ring | `oklch(0.65 0.22 50)` |
| `--radius` | Base border radius | `0.625rem` |

## Available components

### UI components (42)

accordion, alert-dialog, avatar, badge, breadcrumb, button-group, button, calendar, card, checkbox, collapsible, combobox, command, context-menu, dialog, dropdown-menu, hover-card, input-group, input-otp, input, item, label, menubar, pagination, popover, progress, radio-group, section-card, select, separator, sheet, sidebar, skeleton, sonner, spinner, switch, table, tabs, textarea, toggle-group, toggle, tooltip

### Primitives (7)

actions-menu, confirm-dialog, decorative (glow + wave-layer), image, modal, steps, truncated-text

### Patterns (14)

**Animations:** slide-up

**Feedback:** app-toaster, empty, error-boundary, skeletons (app, breadcrumb, button, page-header, page, page-title)

**Filters:** filter-date-range-picker, filter-select, search-filter-select, search-input

**Layouts:** landing-layout (slot-based), section-title

**Navigation:** app-breadcrumbs, app-tabs, table-pagination

### Hooks (2)

- `useDebounce` — debounced value with pending state
- `useSearch` — search input with debounce + external store sync

## Utils

```tsx
import { merge, twColors } from "@bleakedev/bleake-ui";

// merge — clsx + tailwind-merge
const className = merge("px-2 py-1", condition && "hidden", "px-4");
// → "py-1 px-4" (tailwind-merge resolves conflicts, last wins)

// twColors — full Tailwind color palette as hex values
twColors.colors.orange[500]; // "#f97316"
twColors.colors.blue[900];   // "#1e3a8a"
```

## Package structure

This umbrella package re-exports from three internal packages:

| Package | What it provides |
|---------|-----------------|
| `@bleakedev/bleake-core` | `merge`, `twColors`, `ThemeProvider`, `useTheme`, tokens.css |
| `@bleakedev/bleake-components` | All UI components + primitives |
| `@bleakedev/bleake-styles` | Compiled Tailwind v4 CSS (`styles.css`) |

You can install the umbrella for simplicity, or install individual packages if you only need parts.

## Tech stack

- **React 19** + **TypeScript** strict
- **Tailwind CSS v4** (CSS-first config, OKLCH tokens, compiled output)
- **Radix UI** (accessible primitives, tree-shakeable umbrella package)
- **CVA** (class-variance-authority) for component variants
- **next-themes** for dark mode

## License

MIT