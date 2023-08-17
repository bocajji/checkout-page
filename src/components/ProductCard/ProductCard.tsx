import React from 'react';
import { ProductImage } from '@/components/ProductCard/components/ProductImage';
import { Product } from '@/types/product';

interface Props {
 product: Product
}

export function ProductCard({ product }: Props) {
	const imageData = product.imageData
	return (
		<div className="w-[200px] flex flex-col">
			<p className="w-full align-right text-xs text-[#706F6F] text-right">pflichtangaben</p>
			<ProductImage url={imageData.url} alt={imageData.alt} />
		</div>
	)
}