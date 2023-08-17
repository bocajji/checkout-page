import React from 'react';

interface Props {
	salesPrice: string;
	savings: string;
}

export function PriceComparison({ salesPrice, savings }: Props) {
	return (
		<div className="flex items-center py-0.5">
			<span className="text-base font-semibold mr-1">{salesPrice}</span>
			<span className="text-base text-secondaryLight text-xs line-through">{savings}</span>
		</div>
	)
}