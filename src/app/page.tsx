import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "abc",
		price: 123,
		category: "def",
		coverImage: {
			src: "p_1.jpeg",
			alt: "abc",
		},
	},
	{
		id: "2",
		name: "abc",
		price: 123,
		category: "def",
		coverImage: {
			src: "p_2.jpeg",
			alt: "abc",
		},
	},
	{
		id: "3",
		name: "abc",
		price: 123,
		category: "def",
		coverImage: {
			src: "p_3.jpeg",
			alt: "abc",
		},
	},
	{
		id: "4",
		name: "abc",
		price: 123,
		category: "def",
		coverImage: {
			src: "p_4.webp",
			alt: "abc",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<ProductList products={products} />
		</section>
	);
}
