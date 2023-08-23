// Mock data to be used for rendering components. Will be removed when data fetch is implemented.
import { Product } from '@/types/product';

const productMock: Product = {
	code: '14024547',
	name: 'Paracetamol',
	supplier: 'Apotheke',
	dosageForm: 'Tabletten',
	packagingSize: '2 x 14 St',
	basePrice: '0,07 €/St.',
	available: true,
	stock: -1,
	isInCheckout: false,
	totalAdded: 0,
	imageData: {
		url: 'https://media.docmorris.de/produkte-pzn/14024547/dextro-energy-dextrose-sport-tablets-2-x-14-st-14024547-default-300-1662679355.jpg',
		alt: 'test alt test'
	},
	prices: {
		salesPrice: {
			value: 2.04,
			formattedValue: '2,04 €'
		},
		recommendedRetailPrice: {
			value: 2.4,
			formattedValue: '2,40 €'
		},
		savings: {
			value: 0.36,
			formattedValue: '0,36 €'
		},
		savingsPercentageFormatted: '15%'
	},
}

export const createProductMock = (override: Partial<Product> = {}) => ({
	...productMock,
	...override
})
