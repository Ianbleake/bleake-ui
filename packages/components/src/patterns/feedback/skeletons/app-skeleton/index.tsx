import type React from "react";
import { Skeleton } from "../../../../ui/skeleton";

export const AppSkeleton = (): React.ReactElement => {
	return (
		<div className="flex w-full min-h-screen">
			<aside className="hidden md:flex flex-col w-64 border-r bg-white p-4 gap-4">
				<Skeleton className="h-8 w-32" />

				<div className="flex flex-col gap-3 mt-6">
					<Skeleton className="h-6 w-full" />
					<Skeleton className="h-6 w-[90%]" />
					<Skeleton className="h-6 w-[80%]" />
					<Skeleton className="h-6 w-[85%]" />
				</div>
			</aside>

			<main className="flex-1 flex flex-col bg-gray-100">
				<section className="py-4 px-6 md:px-16 flex-1">
					<div className="flex items-center justify-between mb-6">
						<Skeleton className="h-8 w-40" />
						<Skeleton className="h-8 w-24" />
					</div>

					<div className="grid gap-6">
						<Skeleton className="h-40 w-full rounded-xl" />
						<Skeleton className="h-40 w-full rounded-xl" />
						<Skeleton className="h-40 w-full rounded-xl" />
					</div>
				</section>
			</main>

			<div className="fixed bottom-4 left-4 md:hidden">
				<Skeleton className="h-12 w-12 rounded-full" />
			</div>
		</div>
	);
};
