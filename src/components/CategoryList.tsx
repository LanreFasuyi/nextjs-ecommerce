import Link from "next/link";
import Image from "next/image";
import { WixClientServer } from "@/lib/WixClientServer";

const CategoryList = async () => {
  const wixClient: any = await WixClientServer();
  const categoryQuery = await wixClient.collections.queryCollections().find();
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8 ">
        {categoryQuery.items.map((category: any) => (
          <Link
            key={category._id}
            href={`/list?cat=${category.slug}`}
            className="flex-shrink-0  w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative  bg-slate-100 w-full h-96">
              <Image
                src={category.media.items[0].image.url}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 text-xl tracking-wide font-light">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
