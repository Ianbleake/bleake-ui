import { merge } from "@bleakedev/bleake-core";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Card } from "../card";
import { SectionCardHeader } from "./sectionCardHeader";

type BaseSectionCardProps = {
	title: string;
	icon?: LucideIcon;
	action?: React.ReactNode;
	titleElement?: React.ReactNode;
	children: React.ReactNode;
	className?: string;
	contentClassName?: string;
	defaultOpen?: boolean;
	headerClassName?: string;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
};

type CardModeProps = BaseSectionCardProps & {
	mode?: "card";
};

type CollapsableModeProps = BaseSectionCardProps & {
	mode: "collapsable";
};

type SectionCardProps = CardModeProps | CollapsableModeProps;

export const SectionCard = ({
	title,
	icon: Icon,
	action,
	titleElement,
	children,
	className,
	contentClassName,
	headerClassName,
	mode = "card",
	defaultOpen = true,
	open: controlledOpen,
	onOpenChange,
}: SectionCardProps): React.ReactElement => {
	const isCollapsable = mode === "collapsable";

	const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
	const isControlled = controlledOpen !== undefined;
	const isOpen = isControlled ? controlledOpen : internalOpen;

	const handleToggle = () => {
		if (!isCollapsable) return;
		const next = !isOpen;
		if (isControlled) {
			onOpenChange?.(next);
		} else {
			setInternalOpen(next);
		}
	};

	return (
		<Card className={merge("pb-4 pt-0 gap-0 overflow-visible", className, isCollapsable && "pb-0")}>
			<SectionCardHeader
				headerClassName={headerClassName}
				title={title}
				icon={Icon}
				action={action}
				isCollapsable={isCollapsable}
				titleElement={titleElement}
				open={isOpen}
				onToggle={handleToggle}
			/>

			{!isCollapsable && (
				<div className={merge("p-4 flex flex-col gap-4", contentClassName)}>{children}</div>
			)}

			{isCollapsable && (
				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							initial={{
								height: 0,
								opacity: 0,
							}}
							animate={{
								height: "auto",
								opacity: 1,
							}}
							exit={{
								height: 0,
								opacity: 0,
							}}
							transition={{
								duration: 0.25,
								ease: "easeInOut",
							}}
							className="overflow-visible"
						>
							<div className={merge("p-4 flex flex-col gap-4", contentClassName)}>{children}</div>
						</motion.div>
					)}
				</AnimatePresence>
			)}
		</Card>
	);
};
