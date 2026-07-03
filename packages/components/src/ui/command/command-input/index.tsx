import { merge } from "@bleakedev/bleake-core";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";
import type React from "react";
import { InputGroup, InputGroupAddon } from "../../input-group";

export const CommandInput = ({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Input>): React.ReactElement => {
	return (
		<div
			data-slot="command-input-wrapper"
			className="p-1 pb-0"
		>
			<InputGroup className="h-8! bg-input/20 dark:bg-input/30">
				<CommandPrimitive.Input
					data-slot="command-input"
					className={merge(
						"w-full text-xs/relaxed outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
						className,
					)}
					{...props}
				/>
				<InputGroupAddon>
					<SearchIcon className="size-3.5 shrink-0 opacity-50" />
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
};
