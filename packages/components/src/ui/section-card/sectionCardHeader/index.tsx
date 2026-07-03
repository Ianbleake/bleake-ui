import { merge } from "@bleakedev/bleake-core";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import type React from "react";

export type SectionCardHeaderProps = {
	title: string;
	icon?: LucideIcon;
	action?: React.ReactNode;
	titleElement?: React.ReactNode;
	isCollapsable: boolean;
	open: boolean;
	onToggle: () => void;
	headerClassName?: string;
};

export const SectionCardHeader = ({
	title,
	icon: Icon,
	action,
	titleElement,
	isCollapsable,
	open,
	onToggle,
	headerClassName,
}: SectionCardHeaderProps): React.ReactElement => (
	<div
		className={merge(
			"w-full px-4 py-3 border-b border-gray-200 flex items-center gap-4",
			headerClassName,
		)}
	>
		<button
			type="button"
			onClick={onToggle}
			disabled={!isCollapsable}
			className={merge(
				"flex flex-1 items-center gap-2 min-w-0 text-left",
				isCollapsable ? "cursor-pointer select-none" : "cursor-default",
			)}
		>
			{Icon && <Icon className="size-4 text-orange-500 shrink-0" />}
			<span className="text-sm font-medium text-gray-700 truncate">{title}</span>
			{titleElement && titleElement}
		</button>

		{action && <div className="flex items-center shrink-0">{action}</div>}

		{isCollapsable && (
			<motion.button
				type="button"
				onClick={onToggle}
				aria-label={open ? "Contraer sección" : "Expandir sección"}
				animate={{ rotate: open ? 180 : 0 }}
				transition={{ duration: 0.2 }}
				className="shrink-0 cursor-pointer"
			>
				<ChevronDown className="size-4 text-gray-500" />
			</motion.button>
		)}
	</div>
);
