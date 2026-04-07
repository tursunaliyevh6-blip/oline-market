"use client"

import { useState } from "react"
import { Modal, Box } from "@mui/material"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
  textAlign: "center"
}

const AdminOchirishModal = ({ id, children }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    console.log(id) 
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <>
      <div onClick={handleOpen}>
        {children}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>

          <h2 className="text-lg font-semibold mb-4">
            Mahsulot o'chirilsinmi?
          </h2>

          <p className="text-gray-500 mb-6">
            Bu amalni ortga qaytarib bo'lmaydi.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleClose}
              className="px-5 py-2 border rounded-lg"
            >
              Bekor qilish
            </button>

            <button
              onClick={() => {
                console.log(id)
                handleClose()
              }}
              className="px-5 py-2 bg-green-600 text-white rounded-lg"
            >
              O'chirish
            </button>
          </div>

        </Box>
      </Modal>
    </>
  )
}

export default AdminOchirishModal