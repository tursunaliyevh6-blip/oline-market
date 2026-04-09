"use client";
import { Eye, Funnel } from "lucide-react";
import Link from "next/link"
import { useState } from "react";

const orders = [
  {
    id: "ORD-003",
    name: "Michael Chen",
    phone: "+1-555-345-6789",
    products: 2,
    amount: 97.96,
    status: "yetkazilgan",
    date: "2024-02-28",
  },
  {
    id: "ORD-002",
    name: "Sarah Williams",
    phone: "+1-555-234-5678",
    products: 2,
    amount: 69.98,
    status: "tasdiqlangan",
    date: "2024-03-02",
  },
  {
    id: "ORD-001",
    name: "Ali Johnson",
    phone: "+1-555-123-4567",
    products: 2,
    amount: 159.97,
    status: "yangi",
    date: "2024-03-04",
  },
];

const Page = () => {
  const [filter, setFilter] = useState("barchasi");

  const filteredOrders =
    filter === "barchasi"
      ? orders
      : orders.filter((o) => o.status === filter);

  const btnClass = (name) =>
    `px-4 py-2 rounded-lg text-sm border transition
     ${filter === name
      ? "bg-green-600 text-white border-green-600"
      : "border-gray-200 hover:bg-gray-50"
    }`;

  return (
    <div className="px-12 py-8">
      <h1 className="text-3xl font-bold  mb-1">Buyurtmalar</h1>
      <p className="text-gray-600  mb-6">
        Barcha buyurtmalar   ({orders.length} ta)
      </p>

      <div className="grid grid-cols-4 gap-4 mb-6 bg-white text-xl ">
        <Card title="Jami buyurtmalar" value={orders.length} />
        <Card
          title="Yangi"
          value={orders.filter(o => o.status === "yangi").length}
          green
        />
        <Card
          title="Tasdiqlangan"
          value={orders.filter(o => o.status === "tasdiqlangan").length}
          green
        />
        <Card
          title="Yetkazilgan"
          value={orders.filter(o => o.status === "yetkazilgan").length}
        />
      </div>

      <div className="flex gap-5 mb-5 items-center ">
        <div><Funnel /></div>
        <button onClick={() => setFilter("barchasi")} className={btnClass("barchasi")}>
          Barchasi
        </button>
        <button onClick={() => setFilter("yangi")} className={btnClass("yangi")}>
          yangi
        </button>
        <button onClick={() => setFilter("tasdiqlangan")} className={btnClass("tasdiqlangan")}>
          tasdiqlangan
        </button>
        <button onClick={() => setFilter("yetkazilgan")} className={btnClass("yetkazilgan")}>
          yetkazilgan
        </button>
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="p-4 text-left">Buyurtma ID</th>
              <th className="p-4 text-left">Mijoz</th>
              <th className="p-4 text-left">Mahsulotlar</th>
              <th className="p-4 text-left">Summa</th>
              <th className="p-4 text-left">Holat</th>
              <th className="p-4 text-left">Sana</th>
              <th className="p-4 text-left">Amallar</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {filteredOrders.map((o) => (
              <tr key={o.id} className="border-t border-gray-200">
                <td className="p-4 font-medium ">{o.id}</td>

                <td className="p-4">
                  <p className="font-medium">{o.name}</p>
                  <p className="text-gray-400 text-xs">{o.phone}</p>
                </td>

                <td className="p-4">{o.products} ta</td>

                <td className="p-4 text-green-600 font-semibold">
                  ${o.amount}
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                    {o.status}
                  </span>
                </td>

                <td className="p-4 text-gray-500">{o.date}</td>
                <td className="p-4">
                  <Link href={`/admin/orders/buyuttmalar/${o.id}?name=${o.name}&date=${o.date}`}>
                    <div className="flex gap-2 items-center text-green-600 cursor-pointer hover:bg-green-50 mx-5 my-2 rounded-xl justify-center w-25 h-10">
                      <Eye /> Ko‘rish
                    </div>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Card = ({ title, value, green }) => (
  <div className="border border-gray-200 rounded-xl p-4">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className={`text-xl font-semibold ${green ? "text-green-600" : ""}`}>
      {value}
    </h2>
  </div>
);

export default Page;