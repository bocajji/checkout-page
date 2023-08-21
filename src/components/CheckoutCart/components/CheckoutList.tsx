import React from 'react';
import { Product } from '@/types/product';
import { CheckoutCard } from '@/components/CheckoutCart/components/CheckoutCard';

interface Props {
	products: Product[]
}

export function CheckoutList({ products }: Props) {
	return (
		<div className="px-2 py-1 w-full">
			{products.map(product => <CheckoutCard key={product.code} product={product} />)}
		</div>
	)
}