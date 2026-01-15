import { getProductById } from '@/actions/server/product';
import ProductDetails from '@/components/ProductDetails';

const ProductPage = async ({ params }) => {
  const resolvedParams = await params; 
  const product = await getProductById(resolvedParams.id);

  if (!product) {
    return <div className="text-center py-20 text-xl">Product not found</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;

