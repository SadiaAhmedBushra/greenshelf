import ProductDetailsSkeleton from "@/components/Skeleton/ProductDetailsSkeleton";

const Loading = () => (
  <div className="flex justify-center items-center py-20 text-lg">
    <ProductDetailsSkeleton></ProductDetailsSkeleton>
  </div>
);

export default Loading;
