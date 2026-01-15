'use client';

import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-200 rounded-lg shadow-md overflow-hidden flex flex-col">
      <Image
        src={product.image || '/default-image.png'}
        alt={product.name}
        width={400}     
        height={192} 
        className="object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="flex-grow text-neutral/80">
          {product.description?.slice(0, 80)}...
        </p>
        <p className="mt-3 font-bold text-primary">
          ${product.price}
        </p>
        <Link href={`/product/${product._id}`} className="mt-4 btn btn-primary btn-sm w-full">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
