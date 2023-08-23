export interface ImageData {
	url: string;
	alt: string;
}

export interface PriceValues {
	value: number;
	formattedValue: string;
}

export interface Prices {
	salesPrice: PriceValues;
	recommendedRetailPrice: PriceValues;
	savings: PriceValues;
	savingsPercentageFormatted: string;
}

export interface Product {
	code: string;
	name: string;
	imageData: ImageData;
	supplier: string;
	dosageForm: string;
	packagingSize: string;
	basePrice: string;
	available: boolean;
	stock: number;
	prices: Prices
	isInCheckout: boolean;
	totalAdded: number;
}