import Landing from "@/components/Home/Landing";
import Products from "@/components/Home/Products";
import Image from "next/image";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div className="">
      <ProductsPage />

      <Landing></Landing>
    </div>
  );
}
