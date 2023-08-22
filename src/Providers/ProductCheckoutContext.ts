'use client'

import { createContext } from 'react';
import { Product } from '@/types/product';

interface ProductCheckout {
	products: Product[];
	checkoutProducts: Product[];
	addOneProduct: (code: string) => void;
	removeOneProduct: (code: string) => void;
	deleteProduct: (code: string) => void;
	isAvailable: (product: Product) => boolean;
}

export const ProductCheckoutContext = createContext<ProductCheckout | undefined>(undefined);
