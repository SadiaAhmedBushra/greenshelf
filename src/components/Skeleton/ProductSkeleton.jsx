import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="card bg-base-200 animate-pulse h-full flex flex-col">
      
      <div className="h-48 bg-base-300 rounded-t-lg" />

      <div className="card-body flex flex-col flex-1 space-y-4 p-6">
        <div className="h-6 bg-base-300 rounded w-3/4" />
        <div className="h-4 bg-base-300 rounded w-full" /> 
        <div className="h-4 bg-base-300 rounded w-full" />  
        <div className="flex-grow" />
        <div className="h-8 bg-base-300 rounded w-1/4 self-start" /> 
      </div>
    </div>
  );
};

export default ProductSkeleton;
