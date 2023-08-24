import React, { useContext } from 'react';
import Image from 'next/image';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';
import { useIsMobile } from '@/shared/hooks/useIsMobile';
import { ProductButton } from '@/components/ProductCard/components/ProductButton';
import { Product } from '@/types/product';

interface Props {
	product: Product;
}

export function ProductImage({ product }: Props) {
	const { addOneProduct, isAvailable } = useContext(ProductCheckoutContext);
	const isMobile = useIsMobile();

	const onClickHandler = () => {
		addOneProduct(product.code)
	}

	return (
		<div className="flex large:flex-col-reverse flex-col">
			<div className="w-full items-center relative min-w-[180px] w-[180px] h-[180px]">
				<Image
					src={product.imageData.url}
					alt={product.imageData.alt}
					fill
					sizes="max-height: 180px"
					style={{
						objectFit: 'contain',
						flex: 1,
					}}
				/>
		</div>
			<p className="w-full large:align-right text-xs text-secondary text-left large:text-right">pflichtangaben</p>
			{isMobile && (
				<div className="pt-2">
					<ProductButton onClick={onClickHandler} isDisabled={!isAvailable(product)}/>
				</div>
			)}
		</div>
	);
}