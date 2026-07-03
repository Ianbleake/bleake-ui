import { merge } from "@bleakedev/bleake-core";
import { OTPInput } from "input-otp";
import type React from "react";

export const InputOTP = ({
	className,
	containerClassName,
	...props
}: React.ComponentProps<typeof OTPInput> & {
	containerClassName?: string;
}): React.ReactElement => {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={merge(
				"cn-input-otp flex items-center has-disabled:opacity-50",
				containerClassName,
			)}
			spellCheck={false}
			className={merge("disabled:cursor-not-allowed", className)}
			{...props}
		/>
	);
};
