'use client'

import React, { ReactElement, useEffect, useState } from 'react';
import { ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';
import { Product } from '@/types/product';

interface Props {
	productList: Product[];
	children: ReactElement | ReactElement[];
}

export function ProductCheckoutProvider({ children, productList }: Props) {
	const [products, setProducts] = useState<Product[]>([]);
	const [checkoutProducts, setCheckoutProducts] = useState<Product[]>([])

	useEffect(() => {
		setProducts(productList);
	}, [productList])

	const addOneProduct = (code: string) => {

	}

	const removeOneProduct = (code: string) => {

	}

	const deleteProduct = (code: string) => {

	}

	const value = {
		products,
		addOneProduct,
		removeOneProduct,
		deleteProduct,
		checkoutProducts,
	}

	return (
		<ProductCheckoutContext.Provider value={value} >
			{children}
		</ProductCheckoutContext.Provider>
	)
}