import { merge } from "@bleakedev/bleake-core";
import type React from "react";
import { Tabs } from "../../../ui/tabs";
import { TabsContent } from "../../../ui/tabs/tabs-content";
import { TabsList } from "../../../ui/tabs/tabs-list";
import { TabsTrigger } from "../../../ui/tabs/tabs-trigger";

type AppTabsProps<TData> = {
	config: AppTabsConfig<TData>;
	data: TData;
	defaultValue?: string;
	className?: string;
	tabListClassname?: string;
	variant?: "default" | "line";
	size?: "default" | "sm" | "xs";
};

export const AppTabs = <TData,>({
	config,
	data,
	defaultValue,
	className,
	tabListClassname,
	variant = "default",
	size = "default",
}: AppTabsProps<TData>): React.ReactElement => {
	return (
		<Tabs
			defaultValue={defaultValue ?? config[0]?.value}
			className={className}
		>
			<TabsList
				className={merge("", tabListClassname)}
				variant={variant}
				size={size}
			>
				{config.map((tab) => {
					const Icon = tab.icon;

					return (
						<TabsTrigger
							key={tab.value}
							value={tab.value}
							className={merge(
								"",
								variant === "line" &&
									"text-sm text-gray-400 data-[state=active]:text-orange-600 data-[state=active]:shadow-none pb-5 after:bg-orange-600!",
							)}
						>
							{Icon && <Icon />}

							<span>{tab.label}</span>
						</TabsTrigger>
					);
				})}
			</TabsList>

			{config.map((tab) => (
				<TabsContent
					key={tab.value}
					value={tab.value}
				>
					{tab.content(data)}
				</TabsContent>
			))}
		</Tabs>
	);
};
