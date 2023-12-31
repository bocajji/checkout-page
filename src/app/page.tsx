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
      <div className="w-full flex flex-col large:flex-row large:p-74">
          <ProductList />
          <CheckoutCart />
      </div>
    </ProductCheckoutProvider>
  )
}
