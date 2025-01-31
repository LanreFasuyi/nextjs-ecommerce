import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";
const HomePage = async () => {
  return (
    <div className="">
      <Slider />

      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            limit={4}
            categoryId={process.env.NEXT_PUBLIC_WIX_FEATURED_CATEGORY_ID!}
          />
        </Suspense>
      </div>

      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryList />
        </Suspense>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList
          categoryId={process.env.NEXT_PUBLIC_WIX_FEATURED_CATEGORY_ID!}
        />
      </div>
    </div>
  );
};

export default HomePage;
