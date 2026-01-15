import { getProducts } from '@/actions/server/product';
import ProductCard from '@/components/Cards/ProductCard';

const ProductsPage = async () => {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return <div className="text-center py-20">No products available</div>;
  }

  return (
    <main className="bg-base-100 min-h-screen overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 py-20">

        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sustainable Products
          </h1>
          <p className="text-neutral/80 max-w-xl mx-auto">
            Explore our curated collection of eco-friendly products designed to reduce waste and promote a greener lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

      </section>
    </main>
  );
};

export default ProductsPage;
