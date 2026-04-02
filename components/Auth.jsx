'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { X } from 'lucide-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
};

export default function AuthModal({ children }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [tab, setTab] = React.useState(1);

    const [phonenunber, setphonenunber] = React.useState('');
    const [password, setPassword] = React.useState('');


     const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastneme] = React.useState('');


    const tabs = [
        {
            id: 1,
            name: "Kirish",
        },
        {
            id: 2,
            name: "Ro'yxatdan o'tish",
        }
    ]

    const handleTab = (tab) => {
        setTab(tab)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const logindata = { phonenunber, password }
        console.log(logindata)
    }


    const handleRegestr = (e) => {
        e.preventDefault()
        const regestr = { phonenunber, password, firstname, lastname }
        console.log(regestr)
    }
    return (
        <div>
            <button onClick={handleOpen}>{children}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div >
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold text-gray-500'>Hisobga kirish</h1>
                            <X onClick={handleClose} className='text-gray-500' />
                        </div>

                        <div className='bg-gray-100 rounded-xl p-1 mt-6 flex gap-4'>
                            {
                                tabs.map((item) => (
                                    <button onClick={() => handleTab(item.id)} className={`${tab == item.id ? 'bg-white' : ""} rounded-xl cursor-pointer w-full py-2`} key={item.id}>{item.name}</button>
                                ))
                            }
                        </div>

                        {
                            tab == 1 ?

                                <form onSubmit={handleLogin}>
                                    <label className='block mt-6'>
                                        <p className='mb-2'>Telefon raqam</p>
                                        <input className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder="+998 99 999 99 99"
                                        />
                                    </label>

                                    <label className='block mt-6'>
                                        <p className='mb-2'>Parol</p>
                                        <input
                                            className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder="Parol"
                                        />
                                    </label>
                                    <button className='bg-green-600 active:bg-green-500 text-white w-full rounded-xl mt-6 p-3'>Kirish</button>
                                </form> : ''
                        }

                        {
                            tab == 2 ?
                                <form onSubmit={handleRegestr}>
                                    <label className='block mt-6'>
                                        <p className='mb-2'>Isim</p>
                                        <input onCanPlay={(e) => setFirstname(e.target.value)} className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder="Ismingizni kiriting"
                                        />
                                    </label>

                                    <label className='block mt-6'>
                                        <p className='mb-2'>Familya</p>
                                        <input onCanPlay={(e) => setLastneme(e.target.value)} 
                                            className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder="Familyangizni kiriting"
                                        />
                                    </label>
                                    <label className='block mt-6'>
                                        <p className='mb-2'>Telefon raqam</p>
                                        <input onCanPlay={(e) => setphonenunber(e.target.value)} className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder="+998 99 999 99 99"
                                        />
                                    </label>

                                    <label className='block mt-6'>
                                        <p className='mb-2'>Parol</p>
                                        <input onCanPlay={(e) => setPassword(e.target.value)}
                                            className='p-3 rounded-xl w-full border-2 border-gray-300 outline-none focus:border-green-500' type="text" placeholder="Parol"
                                        />
                                    </label>
                                    <button className='bg-green-600 active:bg-green-500 text-white w-full rounded-xl mt-6 p-3'>Royhattan o'rish</button>

                                </form> : ''
                        }


                    </div>
                </Box>
            </Modal>
        </div>
    );
}
