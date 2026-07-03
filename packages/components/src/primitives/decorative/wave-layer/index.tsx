import type React from "react";

type WaveLayerProps = {
	className: string;
	path: string;
	fill: string;
	viewBox?: string;
	transform?: string;
};

export const WaveLayer = ({
	className,
	path,
	fill,
	viewBox = "0 0 700 600",
	transform,
}: WaveLayerProps): React.ReactElement => {
	return (
		<svg
			className={className}
			viewBox={viewBox}
			fill="none"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<path
				d={path}
				fill={fill}
				transform={transform}
			/>
		</svg>
	);
};
