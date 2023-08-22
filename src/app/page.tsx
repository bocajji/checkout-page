import { ProductList } from '@/components/ProductList/ProductList';
import { CheckoutCart } from '@/components/CheckoutCart/CheckoutCart';
import { fetchProducts } from '@/api';
import { ProductCheckoutProvider } from '@/Providers/ProductCheckoutProvider';

const getProducts = async () => {
  return await fetchProducts();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <ProductCheckoutProvider productList={products}>
      <div className="w-full flex">
        <ProductList />
        <CheckoutCart />
      </div>
    </ProductCheckoutProvider>
  )
}
