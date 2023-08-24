import { ProductList } from '@/components/ProductList/ProductList';
import { CheckoutCart } from '@/components/CheckoutCart/CheckoutCart';
import { fetchProducts } from '@/api';
import { ProductCheckoutProvider } from '@/Providers/ProductCheckoutProvider';

export default async function Home() {
  const products = await fetchProducts();
  if (!products) {
    return null
  }
  return (
    <ProductCheckoutProvider productList={products}>
      <div className="w-full flex flex-col large:flex-row">
        <div className="relative px-4 pt-4 large:px-74 large:pt-74">
          <ProductList />
        </div>
        <div className="relative z-10 large:flex-grow-1 large:p-74">
          <CheckoutCart />
        </div>
      </div>
    </ProductCheckoutProvider>
  )
}
