import { EllipsisVertical } from "lucide-react";
import type React from "react";
import { Button } from "../../ui/button";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuContent } from "../../ui/dropdown-menu/dropdown-menu-content";
import { DropdownMenuTrigger } from "../../ui/dropdown-menu/dropdown-menu-trigger";

type ActionsMenuProps = {
	children: React.ReactNode;
	align?: "start" | "center" | "end";
	triggerDirection?: "vertical" | "horizontal";
};

export const ActionsMenu = ({
	children,
	align = "end",
	triggerDirection = "vertical",
}: ActionsMenuProps): React.ReactElement => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
				>
					{triggerDirection === "vertical" ? (
						<EllipsisVertical />
					) : (
						<EllipsisVertical className="rotate-90" />
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				className="w-[--radix-dropdown-menu-trigger-width]"
				side="bottom"
				sideOffset={4}
				align={align}
				alignOffset={1}
			>
				{children}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
