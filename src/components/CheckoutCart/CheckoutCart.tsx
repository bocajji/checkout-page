'use client'

import React, { useContext, useState } from 'react';
import { CheckoutList } from '@/components/CheckoutCart/components/CheckoutList';
import { CheckoutBalance } from '@/components/CheckoutCart/components/CheckoutBalance';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { Draggable } from '@/components/Draggable/Draggable';

export function CheckoutCart() {
	const { checkoutProducts, getTotalProductCount, calculateTotalCost } = useContext(ProductCheckoutContext);
	const [shouldDisplayCart, setShouldDisplayCart] = useState(false);
	const isMobile = useIsMobile();

	const onClickHandler = () => {
		setShouldDisplayCart(!shouldDisplayCart);
	}
	const mobileCSS = 'fixed bottom-[0] bg-white';
	return (
		<div
			data-testid="checkout-cart"
			className={`${isMobile ? mobileCSS : ''}
			w-full large:w-[420px] large:h-[80vh] rounded-lg py-4 px-6 shadow-standard flex flex-col justify-between`}
		>
			{isMobile ? (
				<Draggable onClick={onClickHandler} displayContent={shouldDisplayCart}>
            <CheckoutList products={checkoutProducts}/>
				</Draggable>
			) : (
				<CheckoutList products={checkoutProducts} />
			)}
			<CheckoutBalance
				totalPrice={calculateTotalCost()}
				productCount={getTotalProductCount()}
				isMobile={isMobile}
				shouldDisplayCart={shouldDisplayCart}
				onClick={onClickHandler}
			/>
		</div>
	)
}