import { merge } from "@bleakedev/bleake-core";
import type React from "react";

export const InputOTPGroup = ({
	className,
	...props
}: React.ComponentProps<"div">): React.ReactElement => {
	return (
		<div
			data-slot="input-otp-group"
			className={merge(
				"flex items-center rounded-md has-aria-invalid:border-destructive has-aria-invalid:ring-2 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
				className,
			)}
			{...props}
		/>
	);
};
