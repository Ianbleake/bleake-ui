import { MinusIcon } from "lucide-react";
import type React from "react";

export const InputOTPSeparator = ({
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="input-otp-separator"
			className="flex items-center [&_svg:not([class*='size-'])]:size-4"
			{...props}
		>
			<MinusIcon />
		</div>
	);
};
