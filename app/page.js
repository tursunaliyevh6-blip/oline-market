'use client'

import Carusel from "@/components/Carusel";
import Categories from "@/components/Categories";
import NewProducts from "@/components/NewProducts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
            isliked: false
        }, {
            id: 3,
            img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: true

        }, {
            id: 4,
            img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: false

        }, {
            id: 5,
            img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: false

        }, {
            id: 6,
            img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: false

        }, {
            id: 7,
            img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: false

        }, {
            id: 8,
            img: "https://i.pinimg.com/originals/0b/7a/ae/0b7aae748f53262be435533b73fbc7b4.png",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 65000,
            sanoq: 99,
            isliked: false

        },
    ];
  return (
  <div className="mt-16">
    <Categories />
    <Carusel />
    <div className="flex justify-between items-center mt-12">
                    <h1 className="text-3xl font-bold">Tavsiya etilgan mahsulotlar</h1>
                    <Link href={"/products"} className="flex items-center gap-2 justify-center text-green-700 hover:text-green-500">Barchasini ko‘rish<ArrowRight /></Link>
                </div>
    <NewProducts products={products}/>
  </div>
  );
}
 