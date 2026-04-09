"use client"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const orders = [
    {
        id: "ORD-003",
        name: "Michael Chen",
        phone: "+1-555-345-6789",
        address: "Toshkent, Chilonzor 5-kvartal",
        products: ["Jensi", "Kofta"],
        amount: ["44.23", "53.73"],
        quantity: [1, 2],        // har bir mahsulot soni
        status: "yetkazilgan",
        date: "2024-02-28",
    },
    {
        id: "ORD-002",
        name: "Sarah Williams",
        phone: "+1-555-234-5678",
        address: "Toshkent, Yunusobod 12-kvartal",
        products: ["Kurtka", "Futbolka"],
        amount: ["12.21", "43.23"],
        quantity: [2, 3],
        status: "tasdiqlangan",
        date: "2024-03-02",
    },
    {
        id: "ORD-001",
        name: "Ali Johnson",
        phone: "+1-555-123-4567",
        address: "Toshkent, Sergeli 4-mavze",
        products: ["Jensi", "Kurtka"],
        amount: ["50.00", "109.97"],
        quantity: [1, 1],
        status: "yangi",
        date: "2024-03-04",
    },
];
const Page = () => {

    const { id } = useParams()

    const order = orders.find((o) => o.id === id)

    return (
        <div className="p-10">

            <Link href="/admin/orders">
                <h2 className="flex gap-3 text-xl text-green-600 items-center mb-6">
                    <ArrowLeft /> Buyurtmalarga qaytish
                </h2>
            </Link>

            <div className="border border-gray-200 rounded-xl p-6 space-y-3 bg-white">

                <h1 className="text-2xl font-bold">{order.id}</h1>

                <p className="text-xl ">Sana: {order.date}</p>
                <p className="text-xl font-[600]">Holat: {order.status}</p>

            </div>
            <div className=" mt-10 flex gap-8 ">
                <div className="w-[60%]  ">
                    <div className="gap-6 mb-6 border bg-white border-gray-300 rounded-xl overflow-hidden p-6">
                        <h1 className="text-2xl font-[600]">Mijoz ma'lumotlari</h1>

                        <div className="mt-5">
                            <p><span class="font-bold">Ism:</span>{order.name}</p>
                            <p><span className="font-bold">Telefon:</span> {order.phone}</p>
                            <p><span className="font-bold">Manzil:</span> {order.address}</p>
                        </div>

                    </div>

                    <div className="border p-4 rounded-xl bg-white border-gray-300">

                        <div>
                            <h1 className="text-2xl font-[600]">Buyurtmadagi mahsulotlar</h1>

                            <div className="flex justify-between items-center mt-8">
                                <h3 className="text-xl font-[500]">{order.products[0]}</h3>
                                <h3 className="text-green-600 font-[700] ">${order.amount[0]}</h3>
                            </div>

                            <p>Soni: {order.quantity[0]}</p>


                            <div className="border border-gray-300 my-2"></div>



                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-[500]">{order.products[1]}</h3>
                                <h3 className="text-green-600 font-[700] ">${order.amount[1]}</h3>
                            </div>

                            <p>Soni: {order.quantity[1]}</p>
                        </div>
                    </div>

                </div>




                <div className="p-4 flex-1 ">
                    <div className="flex-1 p-4 border bg-white border-gray-300 rounded-xl">


                        <h1 className="text-2xl font-bold">Buyurtma xulosasi</h1>
                        <div className="mt-7">
                            <div className="flex justify-between items-center">
                                <p>Oraliq jami</p>
                                <p>$97.96</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Yetkazib berish</p>
                                <p>Bepul</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>Soliq (10%)</p>
                                <p>$9.80</p>
                            </div>


                            <div className="flex justify-between items-center mt-5 font-[600] text-xl">
                                <p>Jami</p>
                                <p>$107.76</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page