type AppTabItem<TData> = {
	label: string;
	value: string;
	path?: string;
	icon?: import("lucide-react").LucideIcon;
	content: (data: TData) => import("react").ReactNode;
};

type AppTabsConfig<TData> = AppTabItem<TData>[];
