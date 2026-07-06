import {
	Badge,
	Button,
	Card,
	Input,
	Label,
	Separator,
	Switch,
	ThemeProvider,
	useTheme,
} from "@bleakedev/bleake-ui";
import { Github, Moon, Sun } from "lucide-react";
import { type ReactElement, useState } from "react";

function ThemeToggle(): ReactElement {
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

function Playground(): ReactElement {
	const [switchOn, setSwitchOn] = useState<boolean>(true);
	const [inputValue, setInputValue] = useState<string>("");

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="border-b border-border px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<h1 className="text-xl font-bold">bleake-ui</h1>
						<Badge variant="secondary">playground</Badge>
					</div>
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							asChild
						>
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
							>
								<Github className="h-5 w-5" />
							</a>
						</Button>
						<ThemeToggle />
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-4xl px-6 py-8">
				<h2 className="mb-6 text-2xl font-semibold">Components</h2>

				<div className="space-y-8">
					{/* Buttons */}
					<Card className="p-6">
						<h3 className="mb-4 text-lg font-medium">Buttons</h3>
						<div className="flex flex-wrap gap-3">
							<Button>Default</Button>
							<Button variant="secondary">Secondary</Button>
							<Button variant="destructive">Destructive</Button>
							<Button variant="outline">Outline</Button>
							<Button variant="ghost">Ghost</Button>
							<Button variant="link">Link</Button>
						</div>
						<div className="mt-4 flex flex-wrap gap-3">
							<Button size="sm">Small</Button>
							<Button size="default">Default</Button>
							<Button size="lg">Large</Button>
							<Button size="icon">
								<Sun className="h-4 w-4" />
							</Button>
						</div>
					</Card>

					{/* Form */}
					<Card className="p-6">
						<h3 className="mb-4 text-lg font-medium">Form</h3>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									placeholder="Enter your name"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
								/>
								{inputValue && (
									<p className="text-sm text-muted-foreground">You typed: {inputValue}</p>
								)}
							</div>
							<div className="flex items-center gap-3">
								<Switch
									checked={switchOn}
									onCheckedChange={setSwitchOn}
									id="switch-demo"
								/>
								<Label htmlFor="switch-demo">Switch is {switchOn ? "on" : "off"}</Label>
							</div>
						</div>
					</Card>

					{/* Badges */}
					<Card className="p-6">
						<h3 className="mb-4 text-lg font-medium">Badges</h3>
						<div className="flex flex-wrap gap-2">
							<Badge>Default</Badge>
							<Badge variant="secondary">Secondary</Badge>
							<Badge variant="destructive">Destructive</Badge>
							<Badge variant="outline">Outline</Badge>
						</div>
					</Card>

					{/* Separator */}
					<div>
						<Separator />
						<p className="mt-4 text-center text-sm text-muted-foreground">
							bleake-ui playground — built with React 19, Tailwind v4, Radix UI
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export const App = (): ReactElement => {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
		>
			<Playground />
		</ThemeProvider>
	);
};
