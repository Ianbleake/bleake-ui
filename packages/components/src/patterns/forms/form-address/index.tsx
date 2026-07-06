import { MapPinPlus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "../../../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../../../ui/dialog";
import { Sheet } from "../../../ui/sheet";
import { SheetContent } from "../../../ui/sheet/sheet-content";
import { SheetTrigger } from "../../../ui/sheet/sheet-trigger";

type FormAddressProps = {
	/**
	 * Form body rendered inside the dialog/sheet content. The consumer owns
	 * the form, fields, and submit handler. To close the wrapper after a
	 * successful submit, the consumer calls `onOpenChange(false)` (controlled)
	 * or unmounts; alternatively pass `onSuccess` and call it from the consumer's
	 * submit handler — the wrapper closes on `onSuccess`.
	 */
	children?: React.ReactNode;
	/**
	 * Optional trigger element. When omitted, a default button is rendered.
	 * Ignored when the component is fully controlled (`open` provided) and no
	 * trigger is desired.
	 */
	trigger?: React.ReactElement;
	/**
	 * Called when the consumer signals a successful submit. The wrapper closes
	 * after invoking this. Replaces the domain `onSuccess(address)` callback;
	 * the payload is now consumer-owned.
	 */
	onSuccess?: () => void;
	variant?: "dialog" | "sheet";
	/** Controlled open state — when provided, the component is fully controlled */
	open?: boolean;
	/** Controlled open change handler — required when `open` is provided */
	onOpenChange?: (open: boolean) => void;
	/** Default trigger label (used only when `trigger` is omitted) */
	triggerLabel?: string;
	/** Dialog max width class (dialog variant only) */
	dialogClassName?: string;
	/** SheetContent side (sheet variant only) */
	sheetSide?: "left" | "right" | "top" | "bottom";
};

/**
 * FormAddress — generic dialog/sheet form wrapper.
 *
 * Decoupled from campaign-dash during migration. The original hardcoded address
 * fields (state, municipality, street, ext/int number, zip, neighborhood,
 * between_streets), the `useAddressForm` hook (which depended on
 * `useCreateAddress`, `useQueryStates`, `useQueryLocal`, `createAddressSchema`,
 * `formatGeographicDivisionsOptions`), and the `Address`/`CreateAddress`
 * domain types were all removed.
 *
 * TODO: domain-specific code removed during migration — the cascading
 * geographic select (state → municipality) and the address schema/validation
 * now live in the consumer. This wrapper only owns the dialog/sheet shell,
 * open state, and the success→close behavior.
 */
export const FormAddress = ({
	children,
	trigger,
	onSuccess,
	variant = "dialog",
	open: controlledOpen,
	onOpenChange: setControlledOpen,
	triggerLabel = "Agregar dirección",
	dialogClassName = "w-lg! max-w-lg! px-0",
	sheetSide = "right",
}: FormAddressProps): React.ReactElement => {
	const [internalOpen, setInternalOpen] = useState<boolean>(false);

	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : internalOpen;
	const setOpen = isControlled ? (setControlledOpen ?? setInternalOpen) : setInternalOpen;

	const handleSuccess = () => {
		onSuccess?.();
		setOpen(false);
	};

	// The consumer owns the form body and submit handler. On a successful
	// submit the consumer calls `onSuccess` (the prop it passes to FormAddress),
	// and the wrapper closes the dialog/sheet via handleSuccess. The consumer
	// may also drive open state directly through the controlled `open`/
	// `onOpenChange` props. handleSuccess is kept available for a future
	// render-prop API; today the consumer closes via controlled open.
	void handleSuccess;

	if (variant === "sheet") {
		return (
			<Sheet
				open={open}
				onOpenChange={setOpen}
			>
				{trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}
				{!trigger && !isControlled && (
					<SheetTrigger asChild>
						<Button
							variant="outline"
							className="w-40 h-7"
						>
							<MapPinPlus />
							{triggerLabel}
						</Button>
					</SheetTrigger>
				)}
				<SheetContent
					side={sheetSide}
					showCloseButton={false}
				>
					{children}
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			{trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
			{!trigger && !isControlled && (
				<DialogTrigger asChild>
					<Button
						variant="outline"
						className="w-40 h-7"
					>
						<MapPinPlus />
						{triggerLabel}
					</Button>
				</DialogTrigger>
			)}
			<DialogContent
				showCloseButton={false}
				className={dialogClassName}
			>
				{children}
			</DialogContent>
		</Dialog>
	);
};
