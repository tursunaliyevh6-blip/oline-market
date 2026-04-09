'use client'
import { useState } from "react"

const page = () => {

    const [activeButton, setActiveButton] = useState(0)


    const button = [
        {
            id: 1,
            text: "Rarta orqali"
        },
        {
            id: 1,
            text: "Naxt pul orqali yetkazib berish punktida"
        },
    ]

    return (
        <div className="my-24">
            <h1 className="text-3xl ml-6 font-black">Rasmiylashtirish</h1>



            <div className="p-2 mt-6 flex gap-8">
                <div className="w-[60%] p-4">
                    <div className="gap-6 mb-6 border border-gray-300 rounded-xl overflow-hidden p-6">
                        <h1 className="text-xl font-bold mb-6">Yetkazib berish ma'lumotlari</h1>

                        <textarea placeholder="Yetkazib berish manzili" className="w-full p-4 outline-none border-2 border-gray-500 rounded-xl focus:border-green-500"></textarea>
                    </div>

                    <div className="border p-4 rounded-xl border-gray-300">
                        <h1 className="text-2xl">To'lov usulini tanlang</h1>

                        <div>
                            {
                                button.map((item) => (
                                    <h1 onClick={()=>setActiveButton(item.id)} className={` ${item.id== activeButton ?'bg-green-500 text-white' :""} border border-gray-300 p-4 mt-4 rounded-xl cursor-pointer active:bg-green-500 active:text-white text-xl bg-gray-100`}>
                                        {item.text}
                                    </h1>

                                ))
                            }


                        </div>
                    </div>


                    <button className="mt-6 text-xl bg-green-500 py-3 px-12 rounded-xl text-white active:scale-90">Buyurtma berish</button>
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


                        <div className="p-4 rounded-xl bg-[#F7FAF6] mt-6">
                            <p className="text-[14px]">
                                <b className="text-green-600">Bepul yetkazib berish</b> $50 dan yuqori buyurtmalar uchun
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default page