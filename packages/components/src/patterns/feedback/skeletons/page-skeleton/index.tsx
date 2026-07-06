import type React from "react";
import { Skeleton } from "../../../../ui/skeleton";
import { Spinner } from "../../../../ui/spinner";
import { ButtonSkeleton } from "../button-skeleton";

export const PageSkeleton = (): React.ReactElement => {
	return (
		<main className="flex-1 flex flex-col relative">
			<section className="py-4 px-6 md:px-16 flex-1">
				<div className="flex items-center justify-between mb-6">
					<Skeleton className="h-20 w-90" />
					<ButtonSkeleton />
				</div>

				<div className="grid gap-6">
					<Skeleton className="h-40 w-full rounded-xl" />
					<Skeleton className="h-40 w-full rounded-xl" />
					<Skeleton className="h-40 w-full rounded-xl" />
				</div>
			</section>

			<div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-row items-center gap-2">
				<Spinner className="size-5 text-orange-500" />

				<p className="text-base text-gray-500 font-medium">Validando permisos...</p>
			</div>
		</main>
	);
};
