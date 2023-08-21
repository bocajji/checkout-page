import { ProductList } from '@/components/ProductList/ProductList';
import { ProductMock } from '@/types/product';
import { CheckoutCart } from '@/components/CheckoutCart/CheckoutCart';

const getProducts = async () => {
  return Promise.resolve([ProductMock, ProductMock, ProductMock, ProductMock, ProductMock])
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
