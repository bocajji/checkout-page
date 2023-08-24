import React from 'react';
import { ProductUtils as utils } from '@/shared/utils/product-utils';
import { Line } from '@/components/Line/Line';

interface Props {
	totalPrice: number;
	productCount: number;
	isMobile: boolean;
	onClick: () => void;
	shouldDisplayCart: boolean;
}

export function CheckoutBalance({ totalPrice, productCount, isMobile, onClick, shouldDisplayCart }: Props) {
	const productCountText = productCount === 1
		? '1 Produkt'
		: `${productCount} Produkte`;
	return (
		<div className="large:py-1 w-full text-secondaryDark" data-testid="checkout-balance">
			{isMobile && !shouldDisplayCart ? (
				<MobileCTA text={productCountText} onClick={onClick} />
			) : (
				<>
					<p className="text-xl pb-2 font-semibold">Total</p>
					<div className="flex justify-between">
						<p className="text-sm">{`Summe (${productCountText})`}</p>
						<p className="text-sm">{utils.formatEuroAmount(totalPrice)}</p>
					</div>
				</>
			)}
		</div>
	)
}

interface MobileProps {
	text: string;
	onClick: () => void
}

const MobileCTA = ({ text, onClick }: MobileProps) => {
	return (
		<div onDrag={onClick}>
			<div className="flex justify-center items-center">
				<button onClick={onClick} className="w-[60px] h-[20px]">
					<Line pixelHeight={4} />
				</button>
			</div>
			<div className="flex justify-between items-center">
				<p className="text-sm">{text}</p>
				<button onClick={onClick} className="bg-primary text-center rounded-lg">
					<p className="text-base font-semibold text-white px-2.5 py-5">Zur Übersicht</p>
				</button>
			</div>
		</div>
	)
}