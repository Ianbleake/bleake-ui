import { merge } from "@bleakedev/bleake-core";
import type React from "react";

type GlowProps = {
	className: string;
	background: string;
};

export const Glow = ({ className, background }: GlowProps): React.ReactElement => {
	return (
		<div
			className={merge("absolute rounded-full", className)}
			style={{ background }}
		/>
	);
};
