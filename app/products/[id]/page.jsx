"use client";
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  const maxsulot = {
    categoryname: "Bolalar kyimlari",
    decs: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
    id: 1,
    img: "https://images.uzum.uz/d2bblpd2lln4bo5djuag/original.jpg",
    name: "Fudbolka va shim",
    price: 65000,
    sanoq: 99,
    qulaylik: "Mustahkam va qulay jinsi shim. Faol bolalar uchun yaxshi tanlov",
    sana: "2024-01-12",
  };

  const savat = (id) => {
    console.log(id);
    toast.success(`${maxsulot.name} savatga qo'shildi`);
  };

  const sevimlilar = (id) => {
    console.log(id);
    setLiked(true);
    toast.success(`${maxsulot.name} sevimlilarga qo'shildi`);
  };

  const removeSevimlilar = (id) => {
    console.log(id);
    setLiked(false);
    toast.error(`${maxsulot.name} sevimlilardan o'chirildi`);
  };

  const toggleSevimli = () => {
    if (liked) {
      removeSevimlilar(maxsulot.id);
    } else {
      sevimlilar(maxsulot.id);
    }
  };

  const increment = () => {
    setCount((prev) => (prev < maxsulot.sanoq ? prev + 1 : prev));
  };

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="py-5 pb-50">
      <div className="flex gap-4">
        <Link className="text-green-600" href={"/products"}>
          Mahsulotlar
        </Link>
        <p>/</p>
        <Link className="text-green-600" href={"/products"}>
          Mahsulotlar
        </Link>
        <p>/</p>
        <p>{maxsulot.name}</p>
      </div>

      <div className="py-10 flex gap-10 ">
        <img className="w-150 h-150 rounded-2xl" src={maxsulot.img} />

        <div>
          <p className="bg-gray-100 block w-30 rounded-xl p-1 font-[400]">
            {maxsulot.categoryname}
          </p>

          <h1 className="text-4xl pt-5 font-[650]">{maxsulot.name}</h1>
          <h1 className="text-4xl text-green-600 pt-5 font-[650]">
            ${maxsulot.price}
          </h1>

          <h3 className="pt-3 font-[500]">Omborda bor ({maxsulot.sanoq})</h3>

          <h4 className="text-xl py-5">{maxsulot.qulaylik}.</h4>

          <div className="pt-10">
            <p>Miqdor</p>

            <div className="border p-2 rounded-xl flex gap-6 my-4 w-40 justify-center">
              <button onClick={increment}>
                <Plus />
              </button>

              <h1 className="text-xl">{count}</h1>

              <button onClick={decrement}>
                <Minus />
              </button>
            </div>

            <button
              onClick={() => savat(maxsulot.id)}
              className="flex bg-green-600 hover:bg-green-700 py-3 px-70 text-white text-xl gap-3 font-[600] rounded-2xl items-center"
            >
              <ShoppingCart size={25} />
              Savatga qo'shish
            </button>

            <button
              onClick={toggleSevimli}
              className={`flex border py-3 px-65 mt-5 text-xl gap-3 font-[600] rounded-2xl items-center transition-all duration-300 ${
                liked
                  ? "bg-green-50 text-green-600 border-green-50"
                  : "bg-gray-100 border-gray-200 hover:bg-gray-50 hover:text-gray-500"
              }`}
            >
              <Heart
                size={25}
                className={liked ? "fill-green-600 text-green-600" : ""}
              />
              {liked ? "Sevimlilarga qo'shildi" : "Sevimlilarga qo'shish"}
            </button>

            <Link
              className="flex items-center gap-4 mt-10 text-green-700 text-[20px]"
              href={"/products"}
            >
              <ArrowLeft />
              Mahsulotlarga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
