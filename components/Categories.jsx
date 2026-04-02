import { Baby } from "lucide-react"
import Link from "next/link"

const Categories = () => {
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
    return (
        <div className="mt-16 grid grid-cols-4 gap-4">
            {categories?.map((item) => (
                <Link key={item.id} href={`/catagoriya/${item.id}`}>
                    <div className="border border-gray-300 rounded-xl p-6 hover:shadow-xl transition-all">
                        <div className="bg-green-50 rounded-xl flex justify-center items-center p-4 w-18 h-18 mx-auto">{item.icon}</div>
                        <h1 className="text-xl font-bold mt-4 text-center">{item.name}</h1>
                    </div>
                </Link>
            ))}


        </div>
    )
}
export default Categories