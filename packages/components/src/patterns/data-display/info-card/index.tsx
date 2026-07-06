import { merge } from "@bleakedev/bleake-core";
import { Info } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { HoverCard } from "../../../ui/hover-card";
import { HoverCardContent } from "../../../ui/hover-card/hover-card-content";
import { HoverCardTrigger } from "../../../ui/hover-card/hover-card-trigger";

type InfoCardProps = {
	children: React.ReactElement;
	size?: "xs" | "sm" | "md" | "lg";
	position?: "top" | "right" | "left" | "bottom";
};

export const InfoCard = ({
	children,
	size = "md",
	position = "top",
}: InfoCardProps): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);

	const sizeStyles = {
		xs: "h-3.5 w-3.5",
		sm: "h-5 w-5",
		md: "h-8 w-8",
		lg: "h-10 w-10",
	};

	return (
		<HoverCard
			open={open}
			onOpenChange={setOpen}
			openDelay={100}
			closeDelay={100}
		>
			<HoverCardTrigger asChild>
				<button
					type="button"
					onClick={() => setOpen((prev) => !prev)}
					className="cursor-pointer"
				>
					<Info className={merge("text-orange-600", sizeStyles[size])} />
				</button>
			</HoverCardTrigger>

			<HoverCardContent
				side={position}
				className="text-left"
				sideOffset={8}
				collisionPadding={12}
			>
				{children}
			</HoverCardContent>
		</HoverCard>
	);
};
