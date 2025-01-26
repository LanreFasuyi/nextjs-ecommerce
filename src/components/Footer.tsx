import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}

      <div className="flex gap-24 justify-between flex-col md:flex-row ">
        {/* left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 sm:w-full ">
          <Link href="/">
            <div className="text-2xl tracking-wide">LAMA</div>{" "}
          </Link>
          <p>3234 Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <span className="font-semibold ">admin@lama.com</span>
          <span className="font-semibold ">+234 506077 50</span>
          <div className="flex gap-4">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* center */}
        <div className="hidden lg:flex justify-between w-2/4">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about-us">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliate">Affiliate</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about-us">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliate">Affiliate</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about-us">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliate">Affiliate</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about updates and more events
            coming up
          </p>
          <div className="flex">
            <input
              type="text"
              name=""
              placeholder="Enter your email"
              id=""
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>

          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" width={40} height={20} alt="" />
            <Image src="/skrill.png" width={40} height={20} alt="" />
            <Image src="/paypal.png" width={40} height={20} alt="" />
            <Image src="/mastercard.png" width={40} height={20} alt="" />
            <Image src="/visa.png" width={40} height={20} alt="" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between gap-8 items-center mt-16">
        <div className="">&copy;2024 LAMA SHOP</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>

          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
