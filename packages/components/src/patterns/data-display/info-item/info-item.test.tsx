import { render, screen } from "@testing-library/react";
import { UserIcon } from "lucide-react";
import { describe, expect, it } from "vitest";
import { InfoItem } from "./index";

describe("InfoItem", () => {
	it("renders with value", () => {
		render(
			<InfoItem
				icon={UserIcon}
				label="Name"
				value="John Doe"
			/>,
		);
		expect(screen.getByText("John Doe")).toBeInTheDocument();
	});

	it("renders with children instead of value", () => {
		render(
			<InfoItem
				icon={UserIcon}
				label="Custom"
			>
				<span>Custom content</span>
			</InfoItem>,
		);
		expect(screen.getByText("Custom content")).toBeInTheDocument();
	});

	it("renders label when provided", () => {
		render(
			<InfoItem
				icon={UserIcon}
				label="Email"
				value="test@test.com"
			/>,
		);
		expect(screen.getByText("Email")).toBeInTheDocument();
	});

	it("renders icon", () => {
		render(
			<InfoItem
				icon={UserIcon}
				value="John"
			/>,
		);
		expect(document.querySelector("svg")).toBeInTheDocument();
	});
});
