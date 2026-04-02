'use client'
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

const NewProducts = () => {

  const products = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
      categoryname: "Bolalar kiyimlari",
      name: "Fudbolka va shim",
      desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
      price: 65000,
      sanoq: 99,
      isliked: true

    }, {
      id: 2,
      img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
      categoryname: "Bolalar kiyimlari",
      name: "Fudbolka va shim",
      desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
      price: 65000,
      sanoq: 99,
      isliked: true
    }, {
      id: 3,
      img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
      categoryname: "Bolalar kiyimlari",
      name: "Fudbolka va shim",
      desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
      price: 65000,
      sanoq: 99,
      isliked: true

    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
      categoryname: "Bolalar kiyimlari",
      name: "Fudbolka va shim",
      desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
      price: 65000,
      sanoq: 99,
      isliked: true

    },

  ];
  const savat = () => {
    toast.success("Sevimlilarga qoshilda")
  }
  const like = (id) => {
    console.log(id);
  }

  return (
    <div className="">

      <div className="mt-12">

        <h1 className="text-3xl text-green-600">Sizning sevimli maxsulotlaringiz</h1>

      </div>
      <div className="grid grid-cols-4 mt-12 gap-6">
        {products?.map((item) => (
          <div key={item.id}>

            <div className="border border-gray-300 p-6 rounded-xl relative" key={item.id}>
              <img src={item.img} alt={item.name} className="mb-4 w-full h-[300px] object-cover object-top rounded-xl" />
              <FaHeart onClick={() => like(item.id)} className={`absolute top-7 right-7 ${item.isliked ? 'text-red-500' : 'text-gray-300'} text-3xl cursor-pointer active:scale-90`} />
              <p className="bg-gray-100 py-1 px-3 rounded-xs inline">{item.categoryname}</p>
              <h2 className="text-2xl my-3">{item.name}</h2>
              <p className="text-gray-700">{item.desc}</p>
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-3xl font-bold text-green-600">{item.price} so'm</h1>
                <p>{item.sanoq} qoldi</p>
              </div>
              <button onClick={() => savat()} className="bg-green-600 text-white text-xl mt-6 w-full py-3 rounded-xl hover:bg-green-500 active:scale-95">Savatga</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NewProducts;