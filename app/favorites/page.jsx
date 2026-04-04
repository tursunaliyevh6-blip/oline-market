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
   <NewProducts products={products}/>

    </div>
  );
};

export default NewProducts;