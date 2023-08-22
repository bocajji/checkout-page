import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard/ProductCard';

interface Props {
 products: Product[]
}

export function ProductList({ products }: Props) {
	return <div className="w-[840px] h-[80vh] overflow-y-scroll flex flex-row flex-wrap gap-2 flex-grow-1 hide-scrollbar">
		{products.map(product => {
			return <ProductCard key={product.code} product={product} />
		})}
	</div>
}