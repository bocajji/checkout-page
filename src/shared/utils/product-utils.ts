import { Product } from '@/types/product';

function formatPackagingSizeDisplay(product: Product): string {
	return `${product.packagingSize} • ${product.dosageForm}`;
}

function formatEuroAmount(num: number): string {
	return `${num.toFixed(2)} €`;
}

export const ProductUtils = {
	formatPackagingSizeDisplay,
	formatEuroAmount,
}