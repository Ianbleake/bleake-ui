import type React from "react";
import { Fragment } from "react";
import { Link } from "react-router";
import { Breadcrumb } from "../../../../../ui/breadcrumb";
import { BreadcrumbItem } from "../../../../../ui/breadcrumb/breadcrumb-item";
import { BreadcrumbList as BreadcrumbListPrimitive } from "../../../../../ui/breadcrumb/breadcrumb-list";
import { BreadcrumbPage } from "../../../../../ui/breadcrumb/breadcrumb-page";
import { BreadcrumbSeparator } from "../../../../../ui/breadcrumb/breadcrumb-separator";

export type BreadcrumbItemConfig =
	| { label: string; href: string }
	| { label: string; href?: never };

type BreadcrumbListProps = {
	items: BreadcrumbItemConfig[];
};

export const BreadcrumbList = ({ items }: BreadcrumbListProps): React.ReactElement => {
	return (
		<Breadcrumb>
			<BreadcrumbListPrimitive>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<Fragment key={`${item.label}-${index}`}>
							<BreadcrumbItem>
								{item.href ? (
									<Link to={item.href}>{item.label}</Link>
								) : (
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								)}
							</BreadcrumbItem>
							{!isLast && <BreadcrumbSeparator />}
						</Fragment>
					);
				})}
			</BreadcrumbListPrimitive>
		</Breadcrumb>
	);
};
