'use client'

import React from 'react';
import { Product } from '@/types/product';
import { ProductUtils as utils } from '@/shared/utils/product-utils';
import { PriceComparison } from '@/components/ProductCard/components/PriceComparison';
import { ProductButton } from '@/components/ProductCard/components/ProductButton';

interface Props {
	product: Product;
}

export function ProductInfo({ product }: Props) {
	return (
		<div className="mx-1 my-0.5">
			<h3 className="text-base w-full h-[56px] font-semibold py-0.5">{product.name}</h3>
			<p className="text-sm text-secondary py-0.5">{utils.formatPackagingSizeDisplay(product)}</p>
			<p className="text-sm text-secondary truncate py-0.5">{product.supplier}</p>
			<PriceComparison
				salesPrice={product.prices.salesPrice.formattedValue}
				savings={product.prices.savings.formattedValue}
			/>
			<p className="text-sm text-secondary">{product.basePrice}</p>
			<ProductButton onClick={() => {}} />
	</div>
	)
}