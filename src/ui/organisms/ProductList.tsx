import { ProductListItem } from "@/ui/molecules/ProductListItem";
import type { ProductItemType } from "@/ui/types";

export const ProductList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<div className="container mx-auto px-4">
			<ul
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</ul>
		</div>
	);
};
