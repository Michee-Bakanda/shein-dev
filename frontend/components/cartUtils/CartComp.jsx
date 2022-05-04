import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

const styles = {
  container: {
    height: "70vh",
    width: "100%",
    padding: 2,
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    background: "#fff",
  },
  center: {
    
    width: 500,
    height: 400,
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    fontSize:'20px',
    fontWeight:'bolder',
    textTransform:"uppercase"
    
  },
  shopBtn:{
     padding:20,
     background:'#fff',
     color:'#000',
     width:250,
     border:'1px solid',
     fontSize:'18px',
     fontWeight:'bolder',
     textTransform:"uppercase",
     cursor:'pointer'
  },
  signBtn:{
    border:'none',
    margin:'10px 0',
    padding:20,
    background:'#000',
    color:'#fff',
    width:250,
    fontSize:'18px',
    fontWeight:'bolder',
    textTransform:"uppercase",
    cursor:'pointer'
 }

};

const CartComp = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.center}>
        <Box sx={{background:'url("carrt.png")', height:'200px',width:300 , backgroundSize:'cover', backgroundPosition:'right',backgroundBlendMode:"saturation"}}x>

        </Box>
       <Typography variant="h1" fontSize={20} sx={{ fontWeight: "bolder" }}>
          Your Bag is Empty
        </Typography>
        <Typography variant="p" fontSize={16} sx={{ fontWeight: "300",margin:"10px 0",color:'#222' }}>
          sign in to view your cart and start shopping
        </Typography>
        <button style={styles.signBtn}>
           <a href="/login"> sign up</a>
         </button>
        <button style={styles.shopBtn}>shop now</button>
      </Box>
    </Box>
  );
};

export default CartComp;
