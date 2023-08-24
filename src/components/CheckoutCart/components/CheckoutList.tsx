import React from 'react';
import { Product } from '@/types/product';
import { CheckoutCard } from '@/components/CheckoutCart/components/CheckoutCard';

interface Props {
	products: Product[]
}

export function CheckoutList({ products }: Props) {
	return (
		<div className="overflow-y-scroll flex-grow-1 hide-scrollbar max-h-[90vh]">
			<h3 className="text-lg text-secondaryDark">Zum warenkorb hinzugefügt</h3>
			<div data-testid="checkout-list" className="px-2 py-1 w-full min-w-[300px]">
				{products.map(product => <CheckoutCard key={`checkout-list-${product.code}`} product={product} />)}
			</div>
		</div>
	)
}