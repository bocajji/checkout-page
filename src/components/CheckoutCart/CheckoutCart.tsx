'use client'

import React, { useContext, useState } from 'react';
import { CheckoutList } from '@/components/CheckoutCart/components/CheckoutList';
import { CheckoutBalance } from '@/components/CheckoutCart/components/CheckoutBalance';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';
import { useIsMobile } from '@/shared/hooks/useIsMobile';

export function CheckoutCart() {
	const { checkoutProducts, getTotalProductCount, calculateTotalCost } = useContext(ProductCheckoutContext);
	const [shouldDisplayCart, setShouldDisplayCart] = useState(false);
	const isMobile = useIsMobile();

	const onClickHandler = () => {
		setShouldDisplayCart(!shouldDisplayCart);
	}
	// Always on, if not mobile layout.
	const displayCheckout = isMobile ? shouldDisplayCart : true;
	const mobileCSS = 'fixed bottom-[0] bg-white';
	return (
		<div
			data-testid="checkout-cart"
			className={`${isMobile ? mobileCSS : ''}
			w-full large:w-[420px] large:h-[80vh] rounded-lg py-4 px-6 shadow-standard flex flex-col justify-between`}
		>
			{displayCheckout && (
				<div className="overflow-y-scroll flex-grow-1 hide-scrollbar">
					<h3 className="text-lg text-secondaryDark">Zum warenkorb hinzugefügt</h3>
					<CheckoutList products={checkoutProducts}/>
				</div>
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