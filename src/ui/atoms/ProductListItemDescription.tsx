import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: {
		name: string;
		category: string;
		price: number;
	};
};

export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<h3>{name}</h3>
			<p>{category}</p>
			<p>{formatMoney(price)}</p>
		</div>
	);
};
