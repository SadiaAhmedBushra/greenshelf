// 'use client';

// import Image from 'next/image';
// import ScrollFade from '@/components/Animations/ScrollFade';

// const ProductDetails = ({ product }) => {
//   if (!product) {
//     return (
//       <div className="text-center py-20 text-xl font-semibold text-red-500">
//         Product not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-base-200 rounded-xl shadow-lg shadow-neutral/10">
//       <ScrollFade>
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
//           {product.name ?? 'Unnamed Product'}
//         </h1>
//       </ScrollFade>

//       <ScrollFade delay={0.15}>
//         <div className="relative w-full h-96 md:h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg shadow-primary/20">
//           <Image
//             src={product.image ?? '/default-image.png'}
//             alt={product.name ?? 'Product Image'}
//             fill
//             sizes="(max-width: 768px) 100vw, 640px"
//             style={{ objectFit: 'cover' }}
//             priority
//             className="rounded-xl"
//           />
//         </div>
//       </ScrollFade>

//       <ScrollFade delay={0.3}>
//         <p className="mb-8 text-lg leading-relaxed text-neutral/90 max-w-prose">
//           {product.description ?? 'No description available.'}
//         </p>
//       </ScrollFade>

//       <ScrollFade delay={0.45}>
//         <p className="text-3xl font-extrabold text-primary">
//           ${product.price ?? 'N/A'}
//         </p>
//       </ScrollFade>
//     </div>
//   );
// };

// export default ProductDetails;



// 'use client';

// import Image from 'next/image';
// import ScrollFade from '@/components/Animations/ScrollFade';
// import ProductDetailsSkeleton from '@/components/Skeleton/ProductDetailsSkeleton';

// const ProductDetails = ({ product }) => {
//     if (loading) {
//     return <ProductDetailsSkeleton />;
//   }
//   // if (product === undefined) {
//   //   return <ProductDetailsSkeleton />;
//   // }

//   if (!product) {
//     return (
//       <div className="text-center py-20 text-xl font-semibold text-red-500">
//         Product not found
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-base-200 rounded-xl shadow-lg shadow-neutral/10">
//       <ScrollFade>
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
//           {product.name ?? 'Unnamed Product'}
//         </h1>
//       </ScrollFade>

//       <ScrollFade delay={0.15}>
//         <div className="relative w-full h-96 md:h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg shadow-primary/20">
//           <Image
//             src={product.image ?? '/default-image.png'}
//             alt={product.name ?? 'Product Image'}
//             fill
//             sizes="(max-width: 768px) 100vw, 640px"
//             style={{ objectFit: 'cover' }}
//             priority
//             className="rounded-xl"
//           />
//         </div>
//       </ScrollFade>

//       <ScrollFade delay={0.3}>
//         <p className="mb-8 text-lg leading-relaxed text-neutral/90 max-w-prose">
//           {product.description ?? 'No description available.'}
//         </p>
//       </ScrollFade>

//       <ScrollFade delay={0.45}>
//         <p className="text-3xl font-extrabold text-primary">
//           ${product.price ?? 'N/A'}
//         </p>
//       </ScrollFade>
//     </div>
//   );
// };

// export default ProductDetails;



'use client';

import Image from 'next/image';
import ScrollFade from '@/components/Animations/ScrollFade';
import ProductDetailsSkeleton from '@/components/Skeleton/ProductDetailsSkeleton';

const ProductDetails = ({ product, loading }) => {
  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-base-200 rounded-xl shadow-lg shadow-neutral/10">
      <ScrollFade>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
          {product.name ?? 'Unnamed Product'}
        </h1>
      </ScrollFade>

      <ScrollFade delay={0.15}>
        <div className="relative w-full h-96 md:h-[400px] rounded-xl overflow-hidden mb-8 shadow-lg shadow-primary/20">
          <Image
            src={product.image ?? '/default-image.png'}
            alt={product.name ?? 'Product Image'}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            style={{ objectFit: 'cover' }}
            priority
            className="rounded-xl"
          />
        </div>
      </ScrollFade>

      <ScrollFade delay={0.3}>
        <p className="mb-8 text-lg leading-relaxed text-neutral/90 max-w-prose">
          {product.description ?? 'No description available.'}
        </p>
      </ScrollFade>

      <ScrollFade delay={0.45}>
        <p className="text-3xl font-extrabold text-primary">
          ${product.price ?? 'N/A'}
        </p>
      </ScrollFade>
    </div>
  );
};

export default ProductDetails;
