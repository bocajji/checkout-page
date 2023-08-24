import React from 'react';
import { ProductImage } from '@/components/ProductCard/components/ProductImage';
import { Product } from '@/types/product';
import { ProductInfo } from '@/components/ProductCard/components/ProductInfo';

interface Props {
 product: Product
}

export function ProductCard({ product }: Props) {
	return (
		<div className="w-full large:w-[200px] flex flex-row justify-between large:flex-col my-2">
			<ProductImage product={product}/>
			<ProductInfo product={product} />
		</div>
	)
}