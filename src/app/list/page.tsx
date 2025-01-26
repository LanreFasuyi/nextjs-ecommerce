import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import { WixClientServer } from "@/lib/WixClientServer";
import { Suspense } from "react";
const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await WixClientServer();
  const categoryItems = await wixClient?.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  console.log("categoryItems", categoryItems);
  console.log("searchParams", searchParams);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-4 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />{" "}
        </div>
      </div>
      <Filter />
      {/* Products */}
      <h1 className="text-xl font-semibold mt-12">Shoes for you</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductList
          categoryId={
            categoryItems?.collection?._id ||
            "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
