import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-200 animate-pulse h-full flex flex-col">
      
      {/* Image placeholder */}
      <div className="h-48 bg-base-300 rounded-t-lg" />

      {/* Content placeholder */}
      <div className="card-body flex flex-col flex-1 space-y-4 p-6">
        <div className="h-6 bg-base-300 rounded w-3/4" /> {/* Title */}
        <div className="h-4 bg-base-300 rounded w-full" />  {/* Description line 1 */}
        <div className="h-4 bg-base-300 rounded w-full" />  {/* Description line 2 */}
        <div className="flex-grow" />
        <div className="h-8 bg-base-300 rounded w-1/4 self-start" /> {/* Price placeholder */}
      </div>
    </div>
  );
};

export default ProductSkeleton;
