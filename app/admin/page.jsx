'use client'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

import { BadgeDollarSign, Box, ChartNoAxesCombined, ShoppingCart } from "lucide-react"

const page = () => {

    const data = [
        { label: 'Yetkazilgan', value: 400, color: '#0088FE' },
        { label: 'Yangi', value: 300, color: '#00C49F' },
        { label: 'Tastiqlangan', value: 300, color: '#FFBB28' },
    ];



    const settings = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        hideLegend: true,
    };

    const props = {
        height: 300,
        xAxis: [{ data: ['Bolalar kiyimlari', 'Ayollar kiyimlari', 'Eskaklar kiyimlari'], scaleType: 'band' }],
        yAxis: [{ width: 50 }],
    };


    // jadval


    const newOrders = [
  {
    id: "ORD-003",
    mijoz: "Habibullayev Saidabbos",
    maxsulotlar: 2,
    summa: 1200000,
    holat: "Yetkazilgan",
    sana: "2026-02-28"
  },  {
    id: "ORD-003",
    mijoz: "Habibullayev Saidabbos",
    maxsulotlar: 2,
    summa: 1200000,
    holat: "Yetkazilgan",
    sana: "2026-02-28"
  },
    {
    id: "ORD-003",
    mijoz: "Habibullayev Saidabbos",
    maxsulotlar: 2,
    summa: 1200000,
    holat: "Yetkazilgan",
    sana: "2026-02-28"
  },
    {
    id: "ORD-003",
    mijoz: "Habibullayev Saidabbos",
    maxsulotlar: 2,
    summa: 1200000,
    holat: "Yetkazilgan",
    sana: "2026-02-28"
  },
  

]

    const statistika = [
        {
            id: 1,
            icon: <Box size={34} />,
            text: 'Jami mahsulotlar',
            count: 11,
            color: 'text-green-500'
        },
        {
            id: 2,
            icon: <ShoppingCart size={34} />,
            text: 'Jami buyurtmalar',
            count: 11,
            color: 'text-green-500'

        },
        {
            id: 3,
            icon: <ChartNoAxesCombined size={34} />,
            text: 'Yangi buyurtmalar',
            count: 11,
        },
        {
            id: 4,
            icon: <BadgeDollarSign size={34} />,
            text: 'Jami tushum',
            count: 11,
        },
    ]




    return (
        <>
            <div className="px-12 py-12 px-24">
                <h1 className="text-3xl font-bold">Boshqaruv paneli</h1>
                <p className="text-xl">Do'kon bo'yicha umumiy ko'rinish</p>

                <div className="my-12 grid grid-cols-4 gap-6">
                    {
                        statistika?.map((item) => (
                            <div className="bg-white p-6 rounded-xl border border-gray-300 space-y-4" key={item.id}>
                                <div className={item.color}>{item.icon}</div>
                                <h1 className="text-xl">{item.text}</h1>
                                <h1 className="text-3xl font-black">{item.count}</h1>
                            </div>
                        ))
                    }


                </div>
                <div className='my-12 flex gap-6'>
                    <div className='bg-white p-6 border rounded-xl border-gray-200 w-[400px]'>
                        <PieChart
                            series={[{ innerRadius: 50, outerRadius: 100, data,  }]}
                            {...settings}
                        />

                    </div>
                    <div className='bg-white p-6 border rounded-xl flex-1 border-gray-200'>
                        <BarChart
                            {...props}
                            series={[
                                {
                                    data: [24, 13, 20],
                                },
                            ]}
                        />

                    </div>
                </div>


                <div className="bg-white my-12 rounded-xl gap-6 border border-gray-300 p-6">
  <h1 className="text-xl font-bold">So'nggi buyurtmalar</h1>

  <table className="mt-12 w-full">
    <thead>
      <tr className="border-b border-b-gray-200">
        <th className="p-3 text-left">Buyurtma ID</th>
        <th className="p-3 text-left">Mijoz</th>
        <th className="p-3 text-left">Mahsulotlar</th>
        <th className="p-3 text-left">Summa</th>
        <th className="p-3 text-left">Holat</th>
        <th className="p-3 text-left">Sana</th>
      </tr>
    </thead>
    <tbody>
      {
        newOrders?.map((item) => (
          <tr key={item.id} className="border-b border-b-gray-100">
            <td className="p-3 ">{item.id}</td>
            <td className="p-3 ">{item.mijoz}</td>
            <td className="p-3 ">{item.maxsulotlar}</td>
            <td className="p-3 ">{item.summa}</td>
            <td className="p-3 ">{item.holat}</td>
            <td className="p-3 ">{item.sana}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
            </div>
        </>
    )
}
export default page