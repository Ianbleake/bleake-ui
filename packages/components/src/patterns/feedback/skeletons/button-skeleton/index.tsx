import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { type ButtonVariants, buttonVariants } from "../../../../ui/button/style-variants";
import { Skeleton } from "../../../../ui/skeleton";

type Props = Pick<ButtonVariants, "size"> & {
	className?: string;
	fullWidth?: boolean;
};

export const ButtonSkeleton = ({
	size = "default",
	className,
	fullWidth = false,
}: Props): React.ReactElement => {
	return (
		<Skeleton
			className={merge(
				buttonVariants({
					size,
				}),
				"min-w-40 pointer-events-none animate-pulse border-transparent bg-muted text-transparent hover:bg-muted",
				fullWidth && "w-full",
				size === "icon" && "size-9",
				className,
			)}
		/>
	);
};
