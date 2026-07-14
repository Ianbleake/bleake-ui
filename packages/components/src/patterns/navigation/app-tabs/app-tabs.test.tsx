import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserIcon } from "lucide-react";
import { describe, expect, it } from "vitest";
import { AppTabs } from "./index";

const CONFIG: AppTabsConfig<{ name: string }> = [
	{ value: "profile", label: "Profile", icon: UserIcon, content: (data) => <div>{data.name}</div> },
	{ value: "settings", label: "Settings", content: () => <div>Settings content</div> },
];

describe("AppTabs", () => {
	it("renders tab triggers from config", () => {
		render(
			<AppTabs
				config={CONFIG}
				data={{ name: "John" }}
			/>,
		);
		expect(screen.getByText("Profile")).toBeInTheDocument();
		expect(screen.getByText("Settings")).toBeInTheDocument();
	});

	it("shows first tab content by default", () => {
		render(
			<AppTabs
				config={CONFIG}
				data={{ name: "John" }}
			/>,
		);
		expect(screen.getByText("John")).toBeInTheDocument();
	});

	it("switches content when clicking a tab", async () => {
		const user = userEvent.setup();
		render(
			<AppTabs
				config={CONFIG}
				data={{ name: "John" }}
			/>,
		);
		await user.click(screen.getByText("Settings"));
		expect(screen.getByText("Settings content")).toBeInTheDocument();
	});

	it("accepts defaultValue", () => {
		render(
			<AppTabs
				config={CONFIG}
				data={{ name: "John" }}
				defaultValue="settings"
			/>,
		);
		expect(screen.getByText("Settings content")).toBeInTheDocument();
	});
});
