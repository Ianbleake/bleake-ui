import type React from "react";
import { Outlet } from "react-router";

type LandingLayoutProps = {
	header?: React.ReactNode;
	footer?: React.ReactNode;
	children?: React.ReactNode;
};

export const LandingLayout = ({
	header,
	footer,
	children,
}: LandingLayoutProps): React.ReactElement => {
	return (
		<div className="relative min-h-screen bg-gray-50/80 max-w-screen flex flex-col justify-between">
			{header}

			<div className="flex-1 min-h-screen">{children ?? <Outlet />}</div>

			{footer}
		</div>
	);
};
