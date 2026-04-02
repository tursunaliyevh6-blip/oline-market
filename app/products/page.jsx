'use client'
import { ArrowRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import NewProducts from "@/components/NewProducts";



const page =()=>{
const notify = useGetNotify = () => {

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
}
const savat = () => {
  toast.success("Maxsulot savatga qo'shildi")
}

const liked = (id) => {
  console.log(id)
  notify('ok', 'sevimlilardan ochirildi')
}

    return (
        <div className="">
            <NewProducts/>
        </div>
    );
};

export default NewProducts;