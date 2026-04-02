'use client'
import NewProducts from "@/components/NewProducts"
import { Baby } from "lucide-react"
import { useParams } from "next/navigation"

const page = () => {

    const { id } = useParams()

    const categories = [
        {
            id: 1,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Bolalar kiyimlari"
        },
        {
            id: 2,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Ayollar kiyimlari"
        },
        {
            id: 3,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Erkaklar kiyimlari"
        },
        {
            id: 4,
            icon: <Baby size={30} className="text-green-500" />,
            name: "Aksessuarlar"
        }
    ]
  
    const element = categories.find((item) => item.id == id)
    console.log(element)

    return (
        <div className="mt-16">
            <div>
                <h1 className="text-3xl flex items-center gap-6 font-bold text-green-600">{element.icon}{element.name}</h1>
                <p className="mt-6">14ta maxsulot topildi</p>
            </div>
            <NewProducts/>
        </div>
    )
}
export default page