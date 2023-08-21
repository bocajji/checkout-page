import React from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';
import { Icon } from '@/components/Icon/Icon';
import { IconType } from '@/components/Icon/icon.types';
import { Incrementer } from '@/components/Incrementer/Incrementer';

interface Props {
	product: Product
}

export function CheckoutCard({ product }: Props) {
	return (
		<div className="w-full py-4 flex text-secondaryDark">
			<Image
				src={product.imageData.url}
				alt={product.imageData.alt}
				width={110}
				height={110}
				className="flex-1"
			/>
			<div className="w-full flex-2">
				<div className="flex flex-row items-center justify-between pb-2">
					<p className="text-sm font-semibold max-w-[210px] line-clamp-2">{product.name}</p>
					<button>
						<Icon iconType={IconType.TRASH} size={20} />
					</button>
				</div>
			</div>
		</div>
	)
}