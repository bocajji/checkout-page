'use client'

import React, { useContext } from 'react';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';


export function ProductList() {
	const { products } = useContext(ProductCheckoutContext);
	return <div className="w-[840px] h-[80vh] overflow-y-scroll flex flex-row flex-wrap gap-2 flex-grow-1 hide-scrollbar">
		{products.map(product => {
			return <ProductCard key={`product-list-${product.code}`} product={product} />
		})}
	</div>
}