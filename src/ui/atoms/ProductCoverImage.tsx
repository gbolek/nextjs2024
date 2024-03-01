export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md">
			<img
				width={320}
				height={320}
				alt={alt}
				src={`products/${src}`}
				className="h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};
