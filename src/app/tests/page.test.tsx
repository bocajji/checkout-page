import Home from '@/app/page';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it, jest, beforeEach, afterEach } from '@jest/globals';
import { createPricesMock, createProductMock } from '@/app/tests/mocks/productMock';
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

	describe('total and balance logic', () => {
		enum TotalFlow {
			MULTIPLES_OF_ONE_PRODUCT,
			DELETE_WITH_MULTIPLES_OF_MULTIPLE_PRODUCT

		}
		const productOnePrice = 2.04;
		const productTwoPrice = 3.45;
		const totalFirstProduct = 2;
		const totalSecondProduct = 3;

		const totalSetup = (flow: TotalFlow) => {
			const getProducts = (flow: TotalFlow): Product[] => {
				switch (flow) {
					case TotalFlow.MULTIPLES_OF_ONE_PRODUCT:
						return [createProductMock({ stock: 5, totalAdded: totalFirstProduct, isInCheckout: true })];
					case TotalFlow.DELETE_WITH_MULTIPLES_OF_MULTIPLE_PRODUCT:
						return [
							createProductMock({ stock: 5, totalAdded: totalFirstProduct, isInCheckout: true }),
							createProductMock({
								stock: 5,
								isInCheckout: true,
								totalAdded: totalSecondProduct,
								prices: createPricesMock({
									salesPrice: {
										value: productTwoPrice,
										formattedValue: '3.45 €',
									}
								})
							})
						];
				}
			}

			renderComponent(getProducts(flow));
		}

		it('should display correct total and cost of two of the same product.', () => {
			totalSetup(TotalFlow.MULTIPLES_OF_ONE_PRODUCT);

			const checkoutList = screen.getByTestId('checkout-list');
			const checkoutBalance = screen.getByTestId('checkout-balance');
			const totalPrice = totalFirstProduct * productOnePrice;

			expect(checkoutList).toHaveTextContent(`${totalPrice.toFixed(2)} €`);
			expect(checkoutBalance).toHaveTextContent(`${totalPrice.toFixed(2)} €`);
			expect(checkoutBalance).toHaveTextContent('2 Produkte');
		})

		it('should display correct total and cost of multiple products, even after deleting product.', () => {
			totalSetup(TotalFlow.DELETE_WITH_MULTIPLES_OF_MULTIPLE_PRODUCT);

			const checkoutList = screen.getByTestId('checkout-list');
			const checkoutBalance = screen.getByTestId('checkout-balance');
			const deleteButton = screen.getAllByTestId('delete-button')[0];
			const euroTotalFirstProduct = totalFirstProduct * productOnePrice;
			const euroTotalSecondProduct = totalSecondProduct * productTwoPrice;
			const totalPrice = euroTotalFirstProduct + euroTotalSecondProduct;

			// before deleting first product
			expect(checkoutList).toHaveTextContent(`${euroTotalFirstProduct.toFixed(2)} €`);
			expect(checkoutList).toHaveTextContent(`${euroTotalSecondProduct.toFixed(2)} €`);
			expect(checkoutBalance).toHaveTextContent(`${totalPrice.toFixed(2)} €`);
			expect(checkoutBalance).toHaveTextContent('5 Produkte');

			fireEvent.click(deleteButton);

			// after deleting product
			expect(checkoutList).toHaveTextContent(`${euroTotalSecondProduct.toFixed(2)} €`);
			expect(checkoutBalance).toHaveTextContent(`${euroTotalSecondProduct.toFixed(2)} €`);
			expect(checkoutBalance).toHaveTextContent('3 Produkte');
		})
	})
})