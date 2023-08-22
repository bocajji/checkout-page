import React from 'react';
import { Product } from '@/types/product';
import { CheckoutList } from '@/components/CheckoutCart/components/CheckoutList';
import { CheckoutBalance } from '@/components/CheckoutCart/components/CheckoutBalance';

interface Props {
	products: Product[];
}

export function CheckoutCart({ products }: Props) {
	return (
		<div className="w-[420px] h-[80vh] rounded-lg py-4 px-6 shadow-standard flex flex-col justify-between">
			<div className="overflow-y-scroll flex-grow-1 hide-scrollbar">
				<h3 className="text-lg text-secondaryDark">Zum warenkorb hinzugefügt</h3>
				<CheckoutList products={products} />
			</div>
			<CheckoutBalance totalPrice={0} productCount={0} />
		</div>
	)
}