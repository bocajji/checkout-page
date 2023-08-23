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

	const renderComponent = (products: Product[]) => {
		render(
			<ProductCheckoutProvider productList={products}>
				<div className="w-full flex">
					<ProductList />
					<CheckoutCart />
				</div>
			</ProductCheckoutProvider>
		)
	}
	afterEach(() => {
		cleanup();
	})
	it('smoke test, renders without issue', async () => {
		renderComponent([createProductMock()]);
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

			renderComponent(getProducts(flow));
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

	describe('Incrementer logic', () => {
		enum IncrementerFlow {
			MAX_PRODUCT_COUNT,
			MIN_PRODUCT_COUNT,
			REACHES_MAX_COUNT_FROM_PRODUCT_LIST,
		}
		const incrementerSetup = (flow: IncrementerFlow) => {
			const getProducts = (flow: IncrementerFlow): Product[] => {
				switch (flow) {
					case IncrementerFlow.MAX_PRODUCT_COUNT:
						return [createProductMock({ isInCheckout: true, available: true, stock: 3, totalAdded: 3 })]
					case IncrementerFlow.MIN_PRODUCT_COUNT:
						return [createProductMock({ isInCheckout: true, available: true, stock: 3, totalAdded: 0 })]
					case IncrementerFlow.REACHES_MAX_COUNT_FROM_PRODUCT_LIST:
						return [createProductMock({ isInCheckout: true, available: true, stock: 3, totalAdded: 2 })]
				}
			}

			renderComponent(getProducts(flow));
		}

		it('should disable ADD button when max reached, but not subtract button.', () => {
			incrementerSetup(IncrementerFlow.MAX_PRODUCT_COUNT);

			const addButton = screen.getAllByTestId('incrementer-add')[0];
			const subtractButton = screen.getAllByTestId('incrementer-remove')[0];
			const incrementer = screen.getAllByTestId('incrementer')[0];

			// before click
			expect(addButton).toBeDisabled();
			expect(incrementer).toHaveTextContent('3');
			fireEvent.click(subtractButton);

			//after click
			expect(incrementer).toHaveTextContent('2');
		})

		it('should disable SUBTRACT button when min reached, but not add button.', () => {
			incrementerSetup(IncrementerFlow.MIN_PRODUCT_COUNT);

			const addButton = screen.getAllByTestId('incrementer-add')[0];
			const subtractButton = screen.getAllByTestId('incrementer-remove')[0];
			const incrementer = screen.getAllByTestId('incrementer')[0];

			// before click
			expect(subtractButton).toBeDisabled();
			expect(incrementer).toHaveTextContent('0');
			fireEvent.click(addButton);

			//after click
			expect(incrementer).toHaveTextContent('1');
		})

		it('should disable BOTH product and add button when max is reached, even when product button clicked.', () => {
			incrementerSetup(IncrementerFlow.REACHES_MAX_COUNT_FROM_PRODUCT_LIST);

			const addButton = screen.getAllByTestId('incrementer-add')[0];
			const productButton = screen.getAllByTestId('product-button')[0];
			const incrementer = screen.getAllByTestId('incrementer')[0];

			// before click
			expect(incrementer).toHaveTextContent('2');
			fireEvent.click(productButton);

			//after click
			expect(incrementer).toHaveTextContent('3');
			expect(addButton).toBeDisabled();
			expect(productButton).toBeDisabled();
		})
	})
})