import { merge } from "@bleakedev/bleake-core";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { Item } from "../../../ui/item";
import { ItemContent } from "../../../ui/item/item-content";
import { ItemDescription } from "../../../ui/item/item-description";
import { ItemMedia } from "../../../ui/item/item-media";
import { ItemTitle } from "../../../ui/item/item-title";

type BaseInfoItemProps = {
	icon: LucideIcon;
	label?: string;
	className?: string;
	copyable?: boolean;
	isLink?: boolean;
};

type InfoItemWithValue = BaseInfoItemProps & {
	value: string;
	children?: never;
};

type InfoItemWithChildren = BaseInfoItemProps & {
	children: ReactNode;
	value?: never;
};

type InfoItemProps = InfoItemWithValue | InfoItemWithChildren;

export const InfoItem = ({
	icon,
	label,
	value,
	children,
	className,
	copyable = false,
	isLink = false,
}: InfoItemProps): React.ReactElement => {
	const Icon = icon;

	const handleClick = async () => {
		if (!value) return;

		if (isLink) {
			window.open(value, "_blank", "noopener,noreferrer");
			return;
		}

		if (copyable) {
			try {
				await navigator.clipboard.writeText(value);

				toast.info("Copiado al portapapeles");
			} catch {
				toast.error("No se pudo copiar");
			}
		}
	};

	return (
		<Item
			variant={value || children ? "outline" : "muted"}
			size="xs"
			className={merge(
				"group transition-all duration-300 select-none",
				value || children ? "hover:bg-gray-50 hover:border-gray-300/50" : "border-gray-300/50",
				(copyable || isLink) && value ? "cursor-pointer" : "",
				className,
			)}
			onClick={handleClick}
		>
			<ItemMedia
				variant="icon"
				className={merge(
					"text-gray-500 transition-colors",
					value || children ? "group-hover:text-gray-950" : "",
				)}
			>
				<Icon size={18} />
			</ItemMedia>

			<ItemContent>
				{label && (
					<ItemTitle
						className={merge(
							"text-gray-500 transition-colors flex items-center",
							value || children ? "group-hover:text-gray-950" : "",
						)}
					>
						{label}
					</ItemTitle>
				)}

				<ItemDescription
					className={merge(
						"truncate text-gray-500 text-xs capitalize",
						value || children ? "group-hover:text-gray-700" : "",
					)}
				>
					{children ?? value ?? "-"}
				</ItemDescription>
			</ItemContent>
		</Item>
	);
};
