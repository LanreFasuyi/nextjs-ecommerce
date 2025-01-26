"use client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 gap-6 right-0 flex flex-col z-20">
      {!cartItems ? (
        <div className=""> Cart is Empty </div>
      ) : (
        <>
          <h2 className="text-xl">Shoping Cart</h2>
          <div className="flex flex-col gap-8">
            <div className=" flex gap-4">
              <Image
                src="/pexels-mlkbnl-28933556.jpg"
                alt=""
                width={32}
                height={32}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full  ">
                {/* Top */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">Available</div>
                  {/* Descriptiomn */}
                </div>

                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">QTY.2 </span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            <div className=" flex gap-4">
              <Image
                src="/pexels-mlkbnl-28933556.jpg"
                alt=""
                width={32}
                height={32}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col justify-between w-full  ">
                {/* Top */}
                <div className="">
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">Available</div>
                  {/* Descriptiomn */}
                </div>

                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">QTY.2 </span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center font-semibold">
              <span className="">Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">
                {" "}
                View Cart{" "}
              </button>
              <button className="rounded-md py-3 px-4 text-white bg-black">
                {" "}
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
