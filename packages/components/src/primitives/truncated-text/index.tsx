import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Tooltip } from "../../ui/tooltip";
import { TooltipContent } from "../../ui/tooltip/tooltip-content";
import { TooltipTrigger } from "../../ui/tooltip/tooltip-trigger";

type TruncatedTextProps = {
	text: string;
	className?: string;
	tooltipClassName?: string;
};

export const TruncatedText = ({
	text,
	className,
	tooltipClassName,
}: TruncatedTextProps): React.ReactElement => {
	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<span className={merge("block truncate min-w-0 w-full cursor-default", className)}>
					{text}
				</span>
			</TooltipTrigger>
			<TooltipContent className={tooltipClassName}>
				<span>{text}</span>
			</TooltipContent>
		</Tooltip>
	);
};
