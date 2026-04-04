'use client'
import { ArrowRight } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { useGetNotify } from "@/hook/nodifay";

const NewProducts = () => {
const notify = useGetNotify()

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
            img: "https://olcha.uz/image/600x600/products/supplier/stores/1/2023-07-21/1z7KzademhhdJasi0dp5fuPWagizasRwaWIVeDSYFAhL5OIl9JIOHEcasfL4.jpg",
            categoryname: "Bolalar kiyimlari",
            name: "Shim va fudbolka",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 10000,
            sanoq: 5,
            isliked: false
        }, {
            id: 3,
            img: "https://olcha.uz/image/700x700/products/supplier/stores/1/2023-07-21/lRK9fzv3Kd7srSMBXJTs8kFtragHVs7iPFdXtBGteXMgHeTLSUxA2PrYmyYV.jpg",
            categoryname: "Bolalar kiyimlari",
            name: "Fudbolka va shim",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 150000,
            sanoq: 10,
            isliked: true

        }, {
            id: 4,
            img: "https://i.pinimg.com/1200x/dd/9f/88/dd9f881fafdaf39d90feee09db318823.jpg",
            categoryname: "Bolalar kiyimlari",
            name: "Shim va fudbolka",
            desc: "Bolalar uchun baxorgi kiyim juda qulay va arzon narxlarda",
            price: 20000,
            sanoq: 50,
            isliked: false

        },
    ];
const savat = () => {
  toast.success("Maxsulot savatga qo'shildi")
}

const liked = (id) => {
  console.log(id)
  notify('ok', 'sevimlilardan ochirildi')
}


    return (
        <div className="py-24">

            <div className=" mx-auto">
                

            </div>
            <div className="mt-12  grid grid-cols-4 mt-12 gap-10">
                {products?.map((item) => (
                    <div key={item.id}>

                        <div className="border border-gray-300 p-6 rounded-xl relative" key={item.id}>
                            <img src={item.img} alt={item.name} className="mb-4 w-full h-[300px] object-cover object-top rounded-xl" />
                            <FaHeart onClick={()=>like(item.id)} className={`absolute top-7 right-7 ${item.isliked ? 'text-red-500' : 'text-gray-300'} text-3xl cursor-pointer active:scale-90`} />
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