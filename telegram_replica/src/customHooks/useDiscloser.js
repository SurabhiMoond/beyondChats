import React, { useState } from 'react'

export const useDiscloser = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const handleOpen = () =>{
    setOpen(prev => prev != prev);
  } 
  const handleClose = () =>{
    setClose(prev => prev!=prev);
  }
  return {open,close,handleOpen,handleClose}
}

