'use client'
import * as React from 'react';
import { Box, Typography, Modal } from '@mui/material';
import { Plus } from 'lucide-react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', md: 700 },
  bgcolor: '#fff',
  borderRadius: 3,
  p: 4,
};

export default function MahsulotQoshish() {
  const [open, setOpen] = React.useState(false);

  const [form, setForm] = React.useState({
    name: '',
    price: '',
    toifa: '',
    ombor: '',
    tavsif: '',
    rasm: '',
  });

  const handleSave = () => {
    console.log(form);
    setOpen(false);
  };

  return (
    <div>
      <button
        className="flex items-center ml-auto gap-3 text-xl hover:bg-green-700 bg-green-600 px-3 py-2 rounded-xl text-white"
        onClick={() => setOpen(true)}
      >
        <Plus size={25} />
        Open modal
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Mahsulot qo‘shish
          </Typography>

          {/* 1-qator */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Mahsulot nomi"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Narx"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* 2-qator */}
          <div className="flex gap-2 mb-4">
            <select
              value={form.toifa}
              onChange={(e) =>
                setForm({ ...form, toifa: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            >
              <option value="">Toifa tanlang</option>
              <option value="bolalar kiyimlari">Bolalar kiyimlari</option>
              <option value="erkaklar">Erkaklar</option>
              <option value="ayollar">Ayollar</option>
            </select>

            <input
              type="text"
              placeholder="Ombordagi soni"
              value={form.ombor}
              onChange={(e) =>
                setForm({ ...form, ombor: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Tavsif */}
          <div className="mb-4">
            <textarea
              placeholder="Tavsif"
              value={form.tavsif}
              onChange={(e) =>
                setForm({ ...form, tavsif: e.target.value })
              }
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Rasm */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Rasm URL"
              value={form.rasm}
              onChange={(e) =>
                setForm({ ...form, rasm: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Tugmalar */}
          <div className="flex gap-2">
            <button
              className="border flex-1 py-3 rounded-xl"
              onClick={() => setOpen(false)}
            >
              Bekor qilish
            </button>

            <button
              className="bg-green-500 text-white flex-1 py-3 rounded-xl hover:bg-green-600"
              onClick={handleSave}
            >
              Qo‘shish
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}