'use client'

import React, { ReactElement, useEffect, useState } from 'react';
import { ProductCheckout, ProductCheckoutContext } from '@/Providers/ProductCheckoutContext';
import { Product } from '@/types/product';

interface Props {
	productList: Product[];
	children: ReactElement | ReactElement[];
}

export function ProductCheckoutProvider({ children, productList }: Props) {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		setProducts(productList);
	}, [productList])

	const findProduct = (code: string) => products.find(entry => entry.code === code);
	const isAvailable = (product: Product) =>
		product.available && product.stock > 0 && product.stock > product.totalAdded;


	const addOneProduct = (code: string) => {
		const product = findProduct(code);
		if (product && isAvailable(product)) {
			product.totalAdded = product.totalAdded + 1;
			if (!product.isInCheckout) {
				product.isInCheckout = true;
			}
			setProducts([...products])
		}
	}

	const removeOneProduct = (code: string) => {
		const product = findProduct(code);

		if (product && product.totalAdded > 0) {
			product.totalAdded = product.totalAdded - 1;
			setProducts([...products])
		}
	}

	const deleteProduct = (code: string) => {
		const product = findProduct(code);

		if (product) {
			product.totalAdded = 0;
			product.isInCheckout = false;
			setProducts([...products])
		}
	}

	const calculateTotalCost = (): number => {
		let total = 0;
		products.forEach(product => {
			total = total + (product.prices.salesPrice.value * product.totalAdded);
		})

		return total;
	}

	const getTotalProductCount = (): number => {
		let total = 0;
		products.forEach(product => {
			total = total + product.totalAdded;
		})

		return total
	}

	const value: ProductCheckout = {
		products,
		addOneProduct,
		removeOneProduct,
		deleteProduct,
		isAvailable,
		calculateTotalCost,
		getTotalProductCount,
		checkoutProducts: products.filter(product => product.isInCheckout),
	}

	return (
		<ProductCheckoutContext.Provider value={value} >
			{children}
		</ProductCheckoutContext.Provider>
	)
}