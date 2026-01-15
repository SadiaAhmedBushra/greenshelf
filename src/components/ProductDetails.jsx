'use client';

import Image from 'next/image';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name ?? 'Unnamed Product'}</h1>
      <Image
        src={product.image ?? '/default-image.png'}
        alt={product.name ?? 'Product Image'}
        width={640}
        height={256}
        className="object-cover rounded-md mb-6"
      />
      <p className="mb-4 text-neutral/90">{product.description ?? 'No description available.'}</p>
      <p className="text-xl font-semibold text-primary">${product.price ?? 'N/A'}</p>
    </div>
  );
};

export default ProductDetails;
