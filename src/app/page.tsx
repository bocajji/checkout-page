import { ProductList } from '@/components/ProductList/ProductList';
import { CheckoutCart } from '@/components/CheckoutCart/CheckoutCart';
import { fetchProducts } from '@/api';

const getProducts = async () => {
  return await fetchProducts();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="w-full flex">
      <ProductList products={products} />
      <CheckoutCart products={products} />
    </div>
  )
}
