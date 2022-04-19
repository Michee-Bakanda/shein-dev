import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useState } from "react";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const styles = {
  footer: {
    height: "auto",
    background: "#fff",
    color: "#000",
    padding: "0 80px",
  },
  items: {
    padding: "15px 30px",
    display: "flex",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "15px 0",
  },
  link: {
    color: "#555",
    fontSize: "14px",
    marginBottom: 2,
    textAlign: "justify",
    cursor: "pointer",
  },
  icons: {
    margin: "0 5px",
    height: 25,
  },
  iconContainer: {
    padding: "10px 0",
    height: 50,
    //   border:'1px solid blue',
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    padding: 10,
    width: "80%",
    height: "35px",
    border: "1px solid #ccc",
  },
  SubmitBtn: {
    height: "35px",
    width: "20%",
    background: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  brands: {
    // border:'1px solid red',
    height: "30px",
    margin: 4,
  },
  brandsContainer: {
    //  border:'1px solid blue',
    width: "400px",
    height: "auto",
    display: "flex",
    //  alignItems:'center',
    //  justifyContent:'center',
    flexWrap: "wrap",
  },
};

const Footer = () => {

const [email , setEmail] = useState('')
     

// const alert = ()=>{
//   return (
//    <Alert severity="success">This is an info alert — check it out!</Alert>
//   )
// }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.value);

     const details = { email}
      console.log(details)

    
      // alert('submitted successfully')
     
     
    
    
  };

  return (
    <Box sx={{background:"#fff"}}>
      <Grid container sx={styles.footer}>
        <Grid item md={2} sm={6} xs={12} sx={styles.items}>
          <Typography variant="p" sx={styles.header}>
            Company Name
          </Typography>
          <Typography variant="p" sx={styles.link}>
            About Shein
          </Typography>
          <Typography variant="p" sx={styles.link}>
            text
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Company Name
          </Typography>
        </Grid>
        <Grid item md={2} sm={6} xs={12} sx={styles.items}>
          <Typography variant="p" sx={styles.header}>
            Help and support
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Shipping Info
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Returns
          </Typography>
          <Typography variant="p" sx={styles.link}>
            How To Order
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Size Guide
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Social Responsibility
          </Typography>
          <Typography variant="p" sx={styles.link}>
            SHEIN VIP
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12} sx={styles.items}>
          <Typography variant="p" sx={styles.header}>
            Customer care
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Contact Us
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Payment Method
          </Typography>
          <Typography variant="p" sx={styles.link}>
            Bonus Point
          </Typography>
        </Grid>
        <Grid item md={5} sm={6} xs={12} sx={styles.items}>
          <Typography variant="p" sx={styles.header}>
            Find us on
          </Typography>

          <Box sx={styles.iconContainer}>
            <Box>
              <FacebookIcon sx={styles.icons} fontSize="large" />
              <InstagramIcon sx={styles.icons} fontSize="large" />
              <TwitterIcon sx={styles.icons} fontSize="large" />
              <YouTubeIcon sx={styles.icons} fontSize="large" />
              <PinterestIcon sx={styles.icons} fontSize="large" />
              <NotificationsIcon sx={styles.icons} fontSize="large" />
            </Box>
            <Box>
              <AdbIcon />
              <AppleIcon />
            </Box>
          </Box>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={styles.input}
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <button type="submit"  style={styles.SubmitBtn}>
            Subscribe
            </button>
          </form>
          <Box sx={{ margin: "10px 0" }}>
            <Typography variant="p" fontSize={12} sx={{ color: "#888" }}>
              By clicking the SUBSCRIBE button, you are agreeing to
              <Typography variant="p" color="primary" sx={{ margin: "0 5px" }}>
                <Link style={{ color: "blue" }} href="/">
                  ourPrivacy & Cookie Policy
                </Link>
              </Typography>
            </Typography>
          </Box>

          <Typography variant="p" sx={styles.header}>
            We ACCEPT
          </Typography>
          <Box sx={styles.brandsContainer}>
            <img src="card.png" alt="small brands" style={styles.brands} />
            <img src="card2.png" alt="small brands" style={styles.brands} />
            <img src="cardblue.png" alt="small brands" style={styles.brands} />
            <img src="ce.png" alt="small brands" style={styles.brands} />
            <img src="dcma.png" alt="small brands" style={styles.brands} />
            <img src="i.png" alt="small brands" style={styles.brands} />
            <img src="intersect.png" alt="small brands" style={styles.brands} />
            <img src="jcb.png" alt="small brands" style={styles.brands} />
            <img src="klama.png" alt="small brands" style={styles.brands} />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ padding:'0 80px'}}>
        <Grid item md={12}>

          <Box sx={{margin:"10px 0"}}>
          <Typography variant="p" sx={{ color: "#777", fontSize: 14 ,margin:'0 10px',fontWeight:'bold' }}>
            ©2009-2022 SHEIN All Rights Reserve
          </Typography>

          </Box>
          <Box sx={{width:'900px' ,flexWrap:'wrap',display:"flex", margin:'5px 0'}}>
            <Typography variant="p" sx={{ color: "#888", fontSize: 14 ,margin:'0 5px', textTransform:'capitalize' }}>
              <Link href="/">privacy Center</Link> 
            </Typography>  <span style={{color:"lightgrey"}}>|</span>
          <Typography variant="p" sx={{ color: "#888", fontSize: 14 ,margin:'0 5px' ,textTransform:'capitalize' }}>
              <Link href="/">privacy & Cookie</Link> 
            </Typography> <span style={{color:"lightgrey"}}>|</span>
            <Typography variant="p" sx={{ color: "#888", fontSize: 14 ,margin:'0 5px',textTransform:'capitalize' }}>
              <Link href="/">manage cookies</Link> 
            </Typography> <span style={{color:"lightgrey"}}>|</span>
            <Typography variant="p" sx={{ color: "#888", fontSize: 14 ,margin:'0 5px',textTransform:'capitalize' }}>
              <Link href="/">terms and conditions</Link> 
            </Typography> <span style={{color:"lightgrey"}}>|</span>
            <Typography variant="p" sx={{ color: "#888", fontSize: 14 ,margin:'0 5px',textTransform:'capitalize' }}>
              <Link href="/">copyright  notice</Link> 
            </Typography> <span style={{color:"lightgrey"}}>|</span>
          </Box>
          <Box sx={{ margin:'5px 0'}}>
          <Typography variant="p" sx={{ color: "#888", fontSize: 14 ,margin:'0 5px' ,textTransform:'capitalize' }}>
              <Link href="/">imprit</Link> 
            </Typography> <span style={{color:"lightgrey"}}>|</span>
              <LocationOnIcon sx={{width:'15px',height:'15px',margin:'0 0 0 0'}}/>
            <Typography variant="p" sx={{ color: "#888", fontSize: 14,margin:'0 5px',textTransform:'capitalize' }}>
              <Link href="/">south africa</Link> 
            </Typography> 
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
