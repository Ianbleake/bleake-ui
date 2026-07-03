import { merge } from "@bleakedev/bleake-core";
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import type React from "react";

export const HoverCardContent = ({
	className,
	align = "center",
	sideOffset = 4,
	children,
	...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>): React.ReactElement => {
	return (
		<HoverCardPrimitive.Portal data-slot="hover-card-portal">
			<HoverCardPrimitive.Content
				data-slot="hover-card-content"
				align={align}
				sideOffset={sideOffset}
				className={merge(
					"z-50 w-fit max-w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg bg-popover px-3 py-2 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
					className,
				)}
				{...props}
			>
				{children}
				<HoverCardPrimitive.Arrow
					className="fill-popover"
					width={11}
					height={5}
				/>
			</HoverCardPrimitive.Content>
		</HoverCardPrimitive.Portal>
	);
};
