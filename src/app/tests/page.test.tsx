import Home from '@/app/page';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, jest, beforeEach, afterEach } from '@jest/globals';
import { createProductMock } from '@/app/tests/mocks/productMock';
import { ProductCheckoutProvider } from '@/Providers/ProductCheckoutProvider';
import { ProductList } from '@/components/ProductList/ProductList';
import { CheckoutCart } from '@/components/CheckoutCart/CheckoutCart';
import { Product } from '@/types/product';

describe('Checkout Page', () => {
	afterEach(() => {
		cleanup();
	})
	it('smoke test, renders without issue', async () => {
		render(
			<ProductCheckoutProvider productList={[createProductMock()]}>
				<div className="w-full flex">
					<ProductList />
					<CheckoutCart />
				</div>
			</ProductCheckoutProvider>
		);
		const expectedComponent = screen.getByTestId('checkout-balance');

		expect(expectedComponent).toHaveTextContent('Total');
	});

	describe('Availability Logic', () => {
		enum AvailabilityFLow {
			PRODUCT_NOT_AVAILABLE,
			PRODUCT_OUT_OF_STOCK,
			MAX_PRODUCTS_ADDED,
			PRODUCT_AVAILABLE,
			ONE_PRODUCT_LEFT,
		}
		const availabilitySetup = (flow: AvailabilityFLow) => {
			const getProducts = (flow: AvailabilityFLow): Product[] => {
				switch (flow) {
					case AvailabilityFLow.PRODUCT_OUT_OF_STOCK:
						return [createProductMock({ available: true, stock: 0 })];
					case AvailabilityFLow.PRODUCT_NOT_AVAILABLE:
						return [createProductMock({ available: false })];
					case AvailabilityFLow.MAX_PRODUCTS_ADDED:
						return [createProductMock({ available: true, stock: 3, totalAdded: 3 })]
					case AvailabilityFLow.PRODUCT_AVAILABLE:
						return [createProductMock({ available: true, stock: 3, totalAdded: 0 })]
					case AvailabilityFLow.ONE_PRODUCT_LEFT:
						return [createProductMock({ available: true, stock: 1, totalAdded: 0 })]
				}
			}

			render(
				<ProductCheckoutProvider productList={getProducts(flow)}>
					<div className="w-full flex">
						<ProductList />
						<CheckoutCart />
					</div>
				</ProductCheckoutProvider>
			)
		}

		it('should NOT allow user to add product when `available` is set to false', () => {
			availabilitySetup(AvailabilityFLow.PRODUCT_NOT_AVAILABLE);
			const button = screen.getAllByTestId('product-button');

			// only one element exists, so we know index [0] is correct
			expect(button[0]).toBeDisabled();
		})

		it('should NOT allow user to add product when `stock` is 0, even if availability is set to true', () => {
			availabilitySetup(AvailabilityFLow.PRODUCT_OUT_OF_STOCK);
			const button = screen.getAllByTestId('product-button');

			expect(button[0]).toBeDisabled();
		})

		it('should NOT allow user to add more products, once limit is reached', () => {
			availabilitySetup(AvailabilityFLow.MAX_PRODUCTS_ADDED);
			const button = screen.getAllByTestId('product-button');

			expect(button[0]).toBeDisabled();
		})

		it('should ALLOW user to add a product to the shopping cart, when available and items are in stock', () => {
			availabilitySetup(AvailabilityFLow.PRODUCT_AVAILABLE);
			const button = screen.getAllByTestId('product-button');
			const checkoutBalance = screen.getByTestId('checkout-balance')

			// before click
			expect(checkoutBalance).toHaveTextContent('0 Produkte');

			fireEvent.click(button[0]);

			// after click
			expect(checkoutBalance).toHaveTextContent('1 Produkt')
		})

		it('should ALLOW user to add a product when one is left, but disable button after adding.', () => {
			availabilitySetup(AvailabilityFLow.ONE_PRODUCT_LEFT);
			const button = screen.getAllByTestId('product-button');
			const checkoutBalance = screen.getByTestId('checkout-balance')

			// before click
			expect(checkoutBalance).toHaveTextContent('0 Produkte');

			fireEvent.click(button[0]);

			// after click
			expect(checkoutBalance).toHaveTextContent('1 Produkt')
			// now disabled
			expect(button[0]).toBeDisabled()
		})
	})
})