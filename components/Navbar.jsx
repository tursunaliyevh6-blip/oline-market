'use client'
import { Handbag, Heart, Search, ShoppingCart, } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import AuthModal from './Auth'


function Navbar() {
    const [saveLink, setSaveLink] = useState('')
    const [search, setSearch] = useState('')


    const navbardata = [


        {
            id: 1,
            name: "Mahsulotlar",
            link: "/products",
            icon: <Handbag />
        },
        {
            id: 2,
            name: "Sevimlilar",
            link: "/favorites",
            icon: <Heart />
        },
    ]

    const handleClick = (link) => {
        setSaveLink(link)
    }

    const handleSarch = () => {
        console.log(search);
    }

    return (
        <div className='flex justify-between py-6 '>
            <Link href={'/'}>

                <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 flex justify-center items-center bg-green-500 p-2 rounded-xl font-bold '>
                        O
                    </div>
                    <h1 className='font-bold text-xl'>Olain Mrket</h1>
                </div>
            </Link>

            <div className='flex rounded-xl border border-gray-400 focus:border-green-600 overflow-hidden'>

                <input onClick={(e) => setSearch(e.target.value)} type="text" placeholder='Qidiruv...' className="px-4 py-2 rounded-xl  w-[600px] outline-none focus:border-green-600" />
                <button onClick={() => handleSarch()} className="bg-green-600 py-2 px-4 "><Search className="text-xl text-white" /></button>
            </div>




            <div className='flex items-center gap-8'>

                <div className='flex items-center gap-4'>
                    {navbardata?.map((item) => (

                        <div key={item.id}>

                            <Link onClick={() => handleClick(item.link)} className={`flex items-center gap-2 ${saveLink == item.link ? 'text-green-500' : ''}`} href={item.link}> {item.icon} {item.name}</Link>

                        </div>
                    ))}
                </div>
                <Link href={'/cart'}>
                    <button className='flex gap-2 border border-green-300 px-3 py-2 rounded-xl hover:bg-green-100 '>Savatv<ShoppingCart /></button>
                </Link>
                <AuthModal>
                    <button className='flex gap-2 border border-green-300 px-3 py-2 rounded-xl text-white hover:bg-green-600 bg-green-500 '>Kirish</button>
                </AuthModal>
            </div>
        </div>
    )
}

export default Navbar