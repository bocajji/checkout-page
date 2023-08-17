import { Product } from '@/types/product';

function formatPackagingSizeDisplay(product: Product): string {
	return `${product.packagingSize} • ${product.dosageForm}`
}

export const ProductUtils = {
	formatPackagingSizeDisplay
}