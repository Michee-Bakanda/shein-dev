

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useEffect } from 'react';


export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(()=>{
    setOpen(!open);
  },[])
  return (
    <div style={{height:"70vh",padding:"10px",background:'white',display:'flex',}}>
      <Button onClick={handleToggle} style={{margin:"0 auto",display:'flex',flexDirection:'column'}}>
         <h1>OOps url not found</h1>
         <h2 style={{color:'#000',textTransform:'capitalize'}}>Return to home page </h2>
      </Button> 
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}