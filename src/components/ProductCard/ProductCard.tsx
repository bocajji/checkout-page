import React from 'react';
import { ProductImage } from '@/components/ProductCard/components/ProductImage';
import { Product } from '@/types/product';
import { ProductInfo } from '@/components/ProductCard/components/ProductInfo';

interface Props {
 product: Product
}

export function ProductCard({ product }: Props) {
	return (
		<div className="w-[200px] flex flex-col">
			<p className="w-full align-right text-xs text-secondary text-right">pflichtangaben</p>
			<ProductImage url={product.imageData.url} alt={product.imageData.alt} />
			<ProductInfo product={product} />
		</div>
	)
}