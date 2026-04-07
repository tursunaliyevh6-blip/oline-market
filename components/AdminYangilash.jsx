'use client'
import * as React from 'react';
import {
  Box,
  Typography,
  Modal,
  TextField,
  MenuItem,
  Button
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', md: 700 },
  bgcolor: '#fff',
  borderRadius: 3,
  
  boxShadow: 24,
  p: 4,
};

export default function AdminYangilash({ children, item, onSave }) {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(item);

 

  React.useEffect(() => {
    setForm(item);
  }, [item]);

  const handleSave = () => {
    onSave(form); 
    setOpen(false);
  };

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
        {children}
      </span>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Mahsulotni tahrirlash
            
          </Typography>
          

          <Box display="flex" gap={2} mb={2}>
            <TextField
              fullWidth
              label="Mahsulot nomi *"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Narx (USD) *"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />
          </Box>

          <Box display="flex" gap={2} mb={2}>
            <TextField
              select
              fullWidth
              label="Toifa *"
              value={form.toifa}
              onChange={(e) =>
                setForm({ ...form, toifa: e.target.value })
              }
              
            >
              
              <MenuItem value="bolalar kiyimlari">Bolalar kiyimlari</MenuItem>
              <MenuItem value="erkaklar">Erkaklar</MenuItem>
              <MenuItem value="ayollar">Ayollar</MenuItem>
            </TextField>

            <TextField
              fullWidth
              label="Ombordagi soni *"
              value={form.ombor}
              onChange={(e) =>
                setForm({ ...form, ombor: e.target.value })
              }
            />
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Tavsif"
              value={form.tavsif || ''}
              onChange={(e) =>
                setForm({ ...form, tavsif: e.target.value })
              }
            />
          </Box>

          <Box mb={3}>
            <TextField
              fullWidth
              label="Rasm URL"
              value={form.rasm}
              onChange={(e) =>
                setForm({ ...form, rasm: e.target.value })
              }
            />
          </Box>

          <Box display="flex" gap={2}>
            <button className='border px-30' fullWidth variant="outlined"onClick={() => setOpen(false)}>
              Bekor qilish
            </button>

            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={handleSave}
            >
              Saqlash
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}