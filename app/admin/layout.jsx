'use client'
import AdminNav from "@/components/AdminNavbar"
import { Grip, LucideLogOut, PackageSearch, Settings, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const layout = ({ children }) => {
    const [activeBtn, setActiveBtn] = useState(1)

    const sidebarlinks = [

        {
            id: 1,
            text: "Boshqaruv paneli",
            icon: <Grip />,
            link: '/'
        },
        {
            id: 2,
            text: "Mahsulotlar",
            icon: <PackageSearch />,
            link: '/products'

        },
        {
            id: 3,
            text: "Buyurtmalar",
            icon: <ShoppingCart />,
            link: '/orders'

        },
        {
            id: 4,
            text: "Sozlamalar",
            icon: <Settings />,
            link: '/settings'

        },

    ]

    return (
        <div className="flex">
            <div className="w-[300px] bg-white h-screen p-4">
                {

                    sidebarlinks.map((item) => (
                        <Link href={`/admin${item.link}`} key={item.id} onClick={() => setActiveBtn(item.id)} className={`${item.id == activeBtn ? 'bg-gray-100 text-white' : "bg-white hover:bg-gray-100"} flex  transition-all gap-2 items-center bg-green-500 p-3 rounded-xl`}>{item.icon} {item.text}</Link>
                    ))

                }
                <div className="h-[1px] w-full bg-gray-200">

                </div>
                <Link href={`/`} className=" flex mt-4 transition-all gap-2 items-center hover:bg-gray-100 p-3 rounded-xl"><LucideLogOut/>Chiqish</Link>


            </div>
            <div className="flex-1 bg[#F9FAFB]">
                <AdminNav/>
                {children}
            </div>
        </div>
    )
}

export default layout