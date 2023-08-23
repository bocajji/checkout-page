import React from 'react';
import { ProductUtils as utils } from '@/shared/utils/product-utils';

interface Props {
	totalPrice: number;
	productCount: number;
}

export function CheckoutBalance({ totalPrice, productCount }: Props) {
	const productCountText = productCount === 1
		? '1 Produkt'
		: `${productCount} Produkte`;
	return (
		<div className="py-1 w-full" data-testid="checkout-balance">
			<p className="text-xl pb-2 font-semibold text-secondaryDark">Total</p>
			<div className="flex justify-between">
				<p className="text-secondaryDark text-sm">{`Summe (${productCountText})`}</p>
				<p className="text-secondaryDark text-sm">{utils.formatEuroAmount(totalPrice)}</p>
			</div>
		</div>
	)
}