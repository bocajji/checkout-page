'use client'

import React, { useContext } from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';
import { Icon } from '@/components/Icon/Icon';
import { IconType } from '@/components/Icon/icon.types';
import { Incrementer } from '@/components/Incrementer/Incrementer';
import { ProductUtils as utils } from '@/shared/utils/product-utils';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';

interface Props {
	product: Product
}

export function CheckoutCard({ product }: Props) {
	const {
		addOneProduct,
		removeOneProduct,
		deleteProduct,
		isAvailable,
	} = useContext(ProductCheckoutContext);

	const onLeftClickHandler = () => {
		removeOneProduct(product.code);
	}

	const onRightClickHandler = () => {
		addOneProduct(product.code);
	}

	const onDeleteHandler = () => {
		deleteProduct(product.code);
	}

	const isRightDisabled = !isAvailable(product);
	const isLeftDisabled = product.totalAdded <= 0;
	const totalProductPrice = product.totalAdded * product.prices.salesPrice.value
	return (
		<div className="w-full py-4 flex text-secondaryDark gap-4">
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
					<button onClick={onDeleteHandler}>
						<Icon iconType={IconType.TRASH} size={20} />
					</button>
				</div>
				{product.supplier && product.basePrice &&
					<p className="text-sm text-secondary pyb-0.5">{utils.formatPackagingSizeDisplay(product)}</p>
				}
				{product.code &&
          <p className="text-sm text-secondary pyb-0.5">{`PZN: ${product.code}`}</p>
				}
				<p className="text-sm text-secondary pb-2">{`einzelpreis: ${product.prices.salesPrice.formattedValue}`}</p>
				<div className="flex flex-row items-center justify-between">
					<Incrementer
						count={product.totalAdded}
						onLeftClick={onLeftClickHandler}
						onRightClick={onRightClickHandler}
						isLeftDisabled={isLeftDisabled}
						isRightDisabled={isRightDisabled}
					/>
					<p className="text-sm font-semibold">{utils.formatEuroAmount(totalProductPrice)}</p>
				</div>
			</div>
		</div>
	)
}