import { merge } from "@bleakedev/bleake-core";
import type { LucideIcon } from "lucide-react";
import { Facebook, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import type React from "react";
import { Item } from "../../../ui/item";
import { ItemContent } from "../../../ui/item/item-content";
import { ItemDescription } from "../../../ui/item/item-description";
import { ItemMedia } from "../../../ui/item/item-media";
import { ItemTitle } from "../../../ui/item/item-title";
import { formatLabel } from "./formatLabel";

type SocialMediaProps = {
	socialMedia: SocialMedia;
};

const SocialMediaIcons: Record<string, LucideIcon> = {
	facebook: Facebook,
	twitter: Twitter,
	instagram: Instagram,
	linkedin: Linkedin,
	other: Globe,
};

const SocialMediaColors: Record<string, string> = {
	facebook: "group-hover:text-[#1877F2]",
	twitter: "group-hover:text-[#000000]",
	instagram: "group-hover:text-[#E4405F]",
	linkedin: "group-hover:text-[#0A66C2]",
	other: "group-hover:text-[#4B5563]",
};

export const SocialMedia = ({ socialMedia }: SocialMediaProps): React.ReactElement => {
	const Icon = SocialMediaIcons[socialMedia.platform] || Globe;

	const handleOpen = () => {
		if (!socialMedia.url) return;

		window.open(socialMedia.url, "_blank", "noopener,noreferrer");

		return;
	};

	return (
		<Item
			variant="outline"
			size="xs"
			className="group cursor-pointer transition-all duration-300 hover:bg-gray-50 hover:border-gray-300/50 overflow-hidden"
			onClick={handleOpen}
		>
			<ItemMedia
				variant="icon"
				className={merge(
					"text-gray-500 transition-colors",
					SocialMediaColors[socialMedia.platform] || SocialMediaColors.other,
				)}
			>
				<Icon size={18} />
			</ItemMedia>

			<ItemContent>
				<ItemTitle className="text-gray-800 group-hover:text-gray-950 transition-colors">
					{formatLabel(socialMedia.platform === "other" ? "Sitio web" : socialMedia.platform)}
				</ItemTitle>

				<ItemDescription className="truncate text-gray-500 group-hover:text-gray-700">
					{socialMedia.url}
				</ItemDescription>
			</ItemContent>
		</Item>
	);
};
