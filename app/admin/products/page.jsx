import { Plus } from "lucide-react"

const page = () => {
    return (
        <div className="px-12 py-10">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-3xl font-black">Mahsulotlar</h1>
                    <p className="text-[18px] mt-[5px]">Mahsulot katalogini boshqaring (12 ta)</p>
                </div>
                <div>
                    <button className="flex items-center ml-auto gap-3 text-xl hover:bg-green-700 bg-green-600 px-2 py-1 rounded-xl text-white"><Plus size={30} />Mahsulot qo'shish</button>
                </div>

              
            </div>
              <input
                    type="text"
                    placeholder="Nomi yoki toifasi bo'yicha mahsulot qidiring..."
                    className="w-full mt-10 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-green-500"
                />


                <div>

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
      
    </tbody>
  </table>
                </div>

        </div>
    )
}
export default page
