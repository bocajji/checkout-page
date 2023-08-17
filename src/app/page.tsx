import { ProductList } from '@/components/ProductList/ProductList';
import { ProductMock } from '@/types/product';

const getProducts = async () => {
  return Promise.resolve([ProductMock, ProductMock, ProductMock, ProductMock, ProductMock])
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}
