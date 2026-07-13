import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AlertDialog } from "./index";
import { AlertDialogTrigger } from "./alert-dialog-trigger";
import { AlertDialogContent } from "./alert-dialog-content";
import { AlertDialogTitle } from "./alert-dialog-title";

describe("AlertDialog", () => {
	it("does not show content when closed", () => {
		render(
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<button type="button">Delete</button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogTitle>Are you sure?</AlertDialogTitle>
				</AlertDialogContent>
			</AlertDialog>,
		);
		expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();
	});

	it("renders trigger", () => {
		render(
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<button type="button">Delete</button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogTitle>Are you sure?</AlertDialogTitle>
				</AlertDialogContent>
			</AlertDialog>,
		);
		expect(screen.getByText("Delete")).toBeInTheDocument();
	});
});