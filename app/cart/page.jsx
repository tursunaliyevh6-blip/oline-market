"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(1);

  const handleDale = (id) => {
    console.log(id);
  };

  const carddata = [
    {
      id: 1,
      name: "Kids Winter Jacket",
      categoryname: "bolalar kiyimlari",
      price: "120 000",
      count: 12,
      img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
    },
    {
      id: 2,
      name: "Kids Winter Jacket",
      categoryname: "bolalar kiyimlari",
      price: "120 000",
      count: 12,
      img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
    },
  ];

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-bold">Savat</h1>

      <div className="p-2 mt-6 flex gap-8">
        <div className="w-[65%]  p-4">
          {carddata?.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 mb-6 border border-gray-300 rounded-xl overflow-hidden p-6"
            >
              <img src={item.img} alt="img" className="rounded-xl w-64" />

              <div className="w-full flex justify-between">
                <div>
                  <h1 className="text-xl font-bold hover:text-green-500">
                    {item.name}
                  </h1>
                  <p className="mt-2">{item.categoryname}</p>
                  <div className="border border-gray-300 p-3 rounded-xl flex gap-6 my-4 justify-center ">
                    <button onClick={() => setCount(count + 1)}>
                      <Plus />
                    </button>
                    <h1 className="text-xl">{count}</h1>
                    <button onClick={() => setCount(count - 1)}>
                      <Minus />
                    </button>
                  </div>
                </div>

                <div>
                  <h1 className="text-xl text-green-600 font-bold">
                    {item.price} so'm
                  </h1>
                  <p className="mt-2 ">{item.count} ta</p>
                  <button
                    onClick={() => handleDale(item.id)}
                    className="mt-2 text-red-400 active:scale-90 text-2xl"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 flex-1">
          <div className="flex-1 p-4 border border-gray-300 rounded-xl">
            <h1 className="text-xl font-bold mb-4">Buyurtma xulosasi</h1>
            <div className="h-[1px] w-full bg-gray-200"></div>

            <div className="flex justify-between mt-4">
              <p>Jami summa</p>
              <b>220000 so'm</b>
            </div>

            <div className="flex justify-between mt-4">
              <p>yetkazib berish</p>
              <b>25000 so'm</b>
            </div>

            <div className="h-[1px] mt-4 w-full bg-gray-200"></div>
            <div className="mt-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Jami</h1>
              <h2 className="text-xl text-green-600 font-bold">245000</h2>
            </div>
            <Link href={"/checkout"}>
              <button className="py-3 px-6 active:scale-90 rounded-xl w-full mt-3 bg-green-600 text-white">
                Rasmiylashtirish
              </button>
            </Link>
            <Link href={"/products"}>
              <button className="py-3 px-6 active:scale-90 rounded-xl w-full mt-3 bg-gray-100">
                Haridni davom ettirish
              </button>
            </Link>

            <div className="p-4 rounded-xl bg-[#F7FAF6] mt-6">
              <p className="text-[14px]">
                <b className="text-green-600">Bepul yetkazib berish</b> $50 dan
                yuqori buyurtmalar uchun
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
