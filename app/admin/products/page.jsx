'use client'

import React, { useState } from "react";
import AdminOchirishModal from "@/components/AdminOchirishModal";
import AdminYangilash from "@/components/AdminYangilash";
import { Pen, Plus, Trash2 } from "lucide-react";

const Page = () => {

  const [mahsulotlar, setMahsulotlar] = useState([
    {
      id: 1,
      name: "Bolalar hudi sviteri",
      toifa: "bolalar kiyimlari",
      price: 39.99,
      ombor: 78,
      rasm: "https://cdn-img.birbir.uz/i/800x800-fit/files/11/f8/89cf978fa8a236331d4dd29954a0.jpg",
    },
    {
      id: 2,
      name: "Bolalar hudi sviteri",
      toifa: "bolalar kiyimlari",
      price: 39.99,
      ombor: 78,
      rasm: "https://cdn-img.birbir.uz/i/800x800-fit/files/11/f8/89cf978fa8a236331d4dd29954a0.jpg",
    },
    {
      id: 3,
      name: "Bolalar hudi sviteri",
      toifa: "bolalar kiyimlari",
      price: 39.99,
      ombor: 78,
      rasm: "https://cdn-img.birbir.uz/i/800x800-fit/files/11/f8/89cf978fa8a236331d4dd29954a0.jpg",
    },    {
      id: 4,
      name: "Bolalar hudi sviteri",
      toifa: "bolalar kiyimlari",
      price: 39.99,
      ombor: 78,
      rasm: "https://cdn-img.birbir.uz/i/800x800-fit/files/11/f8/89cf978fa8a236331d4dd29954a0.jpg",
    },    {
      id: 5,
      name: "Bolalar hudi sviteri",
      toifa: "bolalar kiyimlari",
      price: 39.99,
      ombor: 78,
      rasm: "https://cdn-img.birbir.uz/i/800x800-fit/files/11/f8/89cf978fa8a236331d4dd29954a0.jpg",
    },
  ]);

  const handleUpdate = (updatedItem) => {
    setMahsulotlar((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  return (
    <div className="px-12 py-10">

      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-3xl font-black">Mahsulotlar</h1>
          <p className="text-[18px] mt-[5px]">
            Mahsulot katalogini boshqaring ({mahsulotlar.length} ta)
          </p>
        </div>

        <div>
          <button className="flex items-center ml-auto gap-3 text-xl hover:bg-green-700 bg-green-600 px-3 py-2 rounded-xl text-white">
            <Plus size={25} />
            Mahsulot qo'shish
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder="Nomi yoki toifasi bo'yicha mahsulot qidiring..."
        className="w-full mt-10 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-500"
      />

      <div className="mt-10 rounded-xl overflow-hidden border-gray-200 border">
        <table className="w-full">
          <thead className="border-b bg-[#f9fafb] border-gray-200">
            <tr>
              <th className="text-left p-3">Mahsulot</th>
              <th className="text-left p-3">Toifa</th>
              <th className="text-left p-3">Narx</th>
              <th className="text-left p-3">Ombor</th>
              <th className="text-left p-3">Holat</th>
              <th className="p-3">Amallar</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {mahsulotlar.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">

                <td className="p-3 flex items-center gap-3">
                  <img src={item.rasm} className="w-12 h-12 rounded-lg" />
                  <div>
                    <h1 className="font-semibold">{item.name}</h1>
                    <p className="text-sm">ID: {item.id}</p>
                  </div>
                </td>

                <td className="p-3">{item.toifa}</td>

                <td className="p-3 text-green-600 font-semibold">
                  ${item.price}
                </td>

                <td className="p-3">{item.ombor} dona</td>

                <td className="p-3 text-green-600">Omborda bor</td>

                <td className="p-3 flex gap-4">

                  <AdminYangilash item={item} onSave={handleUpdate}>
                    <button className="text-green-600 flex gap-2 items-center">
                      <Pen size={18} />
                      Tahrirlash
                    </button>
                  </AdminYangilash>

                  <AdminOchirishModal id={item.id}>
                    <button className="flex gap-2 items-center text-red-500">
                      <Trash2 size={18} />
                      O‘chirish
                    </button>
                  </AdminOchirishModal>

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Page;