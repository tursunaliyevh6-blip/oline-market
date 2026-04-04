'use client'
import { BadgeDollarSign, Box, ChartNoAxesCombined, ShoppingCart } from "lucide-react"

const page = () => {

const statistika = [
    {
      id: 1,
      icon: <Box size={34} />,
      text: 'Jami mahsulotlar',
      count: 11,
    },
    {
      id: 2,
      icon: <ShoppingCart size={34}/>,
      text: 'Jami buyurtmalar',
      count: 11,
    },
    {
      id: 3,
      icon: <ChartNoAxesCombined size={34}/>,
      text: 'Yangi buyurtmalar',
      count: 11,
    },
    {
      id: 4,
      icon: <BadgeDollarSign size={34}/>,
      text: 'Jami tushum',
      count: 11,
    },
  ]




    return (
  <>
    <div className="px-12 py-12 px-24">
      <h1 className="text-3xl font-bold">Boshqaruv paneli</h1>
      <p className="text-xl">Do'kon bo'yicha umumiy ko'rinish</p>

      <div className="border my-12 grid grid-cols-4 gap-6">
        {
          statistika?.map((item) => (
            <div key={item.id}>
              <div>{item.icon}</div>
              <h1>{item.text}</h1>
              <h1>{item.count}</h1>
            </div>
          ))
        }
      </div>
    </div>
  </>
)
}
export default page