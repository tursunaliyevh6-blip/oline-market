"use client";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { useGetNotify } from "@/hook/nodifay";

const NewProducts = ({ products }) => {
  const notify = useGetNotify();

  const savat = () => {
    toast.success("Maxsulot savatga qo'shildi");
  };

  const liked = (id) => {
    console.log(id);
    notify("ok", "sevimlilardan ochirildi");
  };

  return (
    <div className="py-24">
      <div className=" mx-auto"></div>
      <div className="mt-12  grid grid-cols-4 mt-12 gap-10">
        {products?.map((item) => (
          <div key={item.id}>
            <div className="border border-gray-300 p-6 rounded-xl relative">
              <Link key={item.id} href={`/products/${item.id}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-4 w-full h-[300px] object-cover object-top rounded-xl"
                />
                <FaHeart
                  onClick={() => like(item.id)}
                  className={`absolute top-7 right-7 ${item.isliked ? "text-red-500" : "text-gray-300"} text-3xl cursor-pointer active:scale-90`}
                />
                <p className="bg-gray-100 py-1 px-3 rounded-xs inline">
                  {item.categoryname}
                </p>
                <h2 className="text-2xl my-3">{item.name}</h2>
                <p className="text-gray-700">{item.desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <h1 className="text-3xl font-bold text-green-600">
                    {item.price} so'm
                  </h1>
                  <p>{item.sanoq} qoldi</p>
                </div>
              </Link>
              <button
                onClick={() => savat()}
                className="flex items-center justify-center gap-2 bg-green-500 text-white text-lg font-semibold mt-6 w-full py-3 rounded-2xl shadow-md hover:bg-green-7            00 hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <ShoppingCart size={20} />
                <span>Savatga qo‘shish</span>
              </button>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default NewProducts;
