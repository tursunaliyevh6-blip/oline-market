import Link from "next/link";

const Footer = () => {
  return (
    <div>
    <div className="border-t border-gray-200"></div>
    <div className="w-full  border-gray-200 bg-white py-8">
      <div className="flex items-center justify-center gap-10 font-[600]">
        <Link href="/">
          <span className="hover:text-green-600 transition cursor-pointer">
            Bosh sahifa
          </span>
        </Link>

        <Link href="/products">
          <span className="hover:text-green-600 transition cursor-pointer">
            Mahsulotlar
          </span>
        </Link>

        <Link href="/admin">
          <span className="hover:text-green-600 transition cursor-pointer">
            Boshqaruv
          </span>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Footer;
