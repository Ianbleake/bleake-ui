import type { VariantProps } from "class-variance-authority";
import { createContext } from "react";
import type { toggleVariants } from "../../toggle/style-variants";

export const ToggleGroupContext = createContext<
	VariantProps<typeof toggleVariants> & {
		spacing?: number;
		orientation?: "horizontal" | "vertical";
	}
>({
	size: "default",
	variant: "default",
	spacing: 0,
	orientation: "horizontal",
});
