import React from 'react';

interface Props {
	totalPrice: number;
	productCount: number;
}

export function CheckoutBalance({ totalPrice, productCount }: Props) {
	const productCountText = totalPrice === 1
		? '1 produkt'
		: `${productCount} produkte`;
	return (
		<div className="px-2 py-1 w-full">
			<p className="text-xl pb-2 font-semibold text-secondaryDark">Total</p>
			<div className="flex justify-between">
				<p className="text-secondaryDark text-sm">{`Summe (${productCountText})`}</p>
				<p className="text-secondaryDark text-sm">{`${totalPrice} €`}</p>
			</div>
		</div>
	)
}