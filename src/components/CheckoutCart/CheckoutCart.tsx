'use client'

import React, { useContext } from 'react';
import { CheckoutList } from '@/components/CheckoutCart/components/CheckoutList';
import { CheckoutBalance } from '@/components/CheckoutCart/components/CheckoutBalance';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';

export function CheckoutCart() {
	const { checkoutProducts, getTotalProductCount, calculateTotalCost } = useContext(ProductCheckoutContext);

	return (
		<div
			data-testid="checkout-cart"
			className="w-[420px] h-[80vh] rounded-lg py-4 px-6 shadow-standard flex flex-col justify-between"
		>
			<div className="overflow-y-scroll flex-grow-1 hide-scrollbar">
				<h3 className="text-lg text-secondaryDark">Zum warenkorb hinzugefügt</h3>
				<CheckoutList products={checkoutProducts} />
			</div>
			<CheckoutBalance totalPrice={calculateTotalCost()} productCount={getTotalProductCount()} />
		</div>
	)
}