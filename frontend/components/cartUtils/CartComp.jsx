import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const styles = {
     container:{
            height:'100vh',
            width:'100%',
            padding:2
     } ,

}





const CartComp = () => {
  return (
      <Box sx={styles.container}>
         <Typography variant="h6">Cart page</Typography>
      </Box>
  )
}

export default CartComp