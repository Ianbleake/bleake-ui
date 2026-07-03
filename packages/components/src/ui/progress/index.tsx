import { merge } from "@bleakedev/bleake-core";
import type React from "react";

interface ProgressProps {
	value: number | null; // null = indeterminate
	className?: string;
}

export const Progress = ({ value, className }: ProgressProps): React.ReactElement => {
	const isIndeterminate = value === null;

	return (
		<div className={merge("relative h-1 w-full overflow-hidden rounded-full bg-muted", className)}>
			<div
				className={merge(
					"h-full rounded-full bg-[oklch(0.65_0.22_50)]",
					isIndeterminate
						? "w-2/3 animate-pulse"
						: "motion-safe:transition-[width] duration-150 ease-out",
				)}
				style={isIndeterminate ? undefined : { width: `${Math.min(100, Math.max(0, value))}%` }}
			/>
		</div>
	);
};
