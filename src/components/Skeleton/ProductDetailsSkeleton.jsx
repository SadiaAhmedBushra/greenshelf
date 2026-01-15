'use client';

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-base-200 rounded-xl shadow-lg shadow-neutral/10 animate-pulse">
      <div className="h-12 bg-base-300 rounded w-3/4 mb-6" />

      <div className="relative w-2/3 h-96 md:h-[400px] rounded-xl overflow-hidden mb-8 bg-base-300" />

      <div className="space-y-4 max-w-prose mb-8">
        <div className="h-4 bg-base-300 rounded w-full" />
        <div className="h-4 bg-base-300 rounded w-full" />
        <div className="h-4 bg-base-300 rounded w-5/6" />
      </div>

      <div className="h-10 bg-base-300 rounded w-1/4" />
    </div>
  );
};

export default ProductDetailsSkeleton;
