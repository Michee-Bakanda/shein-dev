import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
// component
import CountdownTimer from '/components/navbar/countdown/countdownTimer'


// material icons
import PersonIcon from "@mui/icons-material/Person";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from '@mui/icons-material/Login';
// swiper
import Slide from "./Swiper";

// Hooks
import useState from "react";
import { useEffect } from "react";

const nav = {
  //   height: "150px",
  background: "#f4f4f4",
  boxShadow: "-2px 11px 14px -3px rgba(237,237,237,0.75)",
};
const topbar = {
  background: "#111",
  border: "1px solid red",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
};
const mainNav = {
  border: "1px solid red",
  height: "80px",
  width: "200px",
};
const bottomBar = {
  border: "1px solid red",
  height: "",

  width: "",
};
const flexBoxCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mainLink = {
  height: "",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // border:"1px solid red",
  height: "70px",
  width: "15%",
  padding: "0 2px",
};
const link = {
  fontWeight: "600",
};
const bottomLink = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  // border: "1px solid red",
  //  flex:"1",
  padding: "0 20px ",
  width: "auto",
  height: "",
  height: "100%",
  fontWeight: "bold",
  "&:hover": {
    borderBottom: "4px solid black",
  },
};

const icon = {
  margin: "0 5px",
  color: "#555",
  height: "25px",
  width: "25px",
  cursor: "pointer",
};

const lightText = {
  // fontWeight:"500",
  color: "#707070",
  "&:hover": {
    color: "#000",
  },
};
const underline = {
  borderBottom: "1px solid #000",
};

const heading ={
     fontSize:"14px",
     fontWeight:"bold",
     marginBottom:"10px "
}
 const body = {
      fontWeight:"400",
      fontSize:"12px",
      color:"#555",
      margin:"5px 0"
 }


const Navbar = () => {
  const [input, setInput] = React.useState("Shorts and shirts");

  // const resetInput = () => {
  //        setInput('')
  // };
  // let text1 = ["hello1", "hello2", "hello3"];

  // useEffect(() => {
  //   setTimeout(() => {
  //     for (let i = 0; i < text1.length; i++) {
  //       setInput(text1[i]);
  //     }
  //   }, 2000);
  // }, []);

  return (
    <>
      <Box sx={nav}>
        {/* topbar */}
        <Grid container sx={{ background: "#111", color: "white" }}>
          <Grid
            item
            md={8}
            sm={6}
            xs={12}
            sx={{ padding: "10px 10px" }}
            style={flexBoxCenter}
          >
            <Typography variant="h6" fontsize={20} sx={{ fontWeight: "900" }}>
              WE
              <Box
                style={{
                  //   border: "1px solid blue",
                  display: "inline-flex",
                  alignItems: "center",
                  alignItems: "center",
                  width: "40px",
                  height: "10px",
                }}
              >
                <FavoriteIcon
                  className="heart"
                  color="error"
                  sx={{ position: "absolute", margin: " 0 8px" }}
                />
              </Box>
              BEST SELLERS !
            </Typography>
          </Grid>
          <Grid item md={4} sm={6} xs={12} sx={{ padding: "0px 10px" }}>
            {/* {new Date().getHours()}
           {new Date().getSeconds()}
           {new Date().getHours()} */}
           <CountdownTimer CountdownTimestampMs={1650539650000}/>
          </Grid>
        </Grid>
        {/* main navbar */}
        <Grid container>
          <Grid item md={6} sm={12} xs={12} sx={{ display: "flex" }}>
            <Box sx={mainLink} style={{ background: "#fff" }}>
              <Typography fontSize={17} sx={link} variant="p">
                <Link href="">WOMEN</Link>
              </Typography>
            </Box>
            <Box sx={mainLink}>
              <Typography sx={lightText} fontSize={17} variant="p">
                <Link href="">CURVE + PLUS</Link>
              </Typography>
            </Box>
            <Box sx={mainLink}>
              <Typography sx={lightText} fontSize={17} variant="p">
                <Link href="">KIDS</Link>
              </Typography>
            </Box>
            <Box sx={mainLink}>
              <Typography sx={lightText} fontSize={17} variant="p">
                <Link href="">MEN</Link>
              </Typography>
            </Box>
            <Box sx={mainLink}>
              <Typography sx={lightText} fontSize={17} variant="p">
                <Link href="">BEAUTY</Link>
              </Typography>
            </Box>
            <Box sx={mainLink}>
              <Typography sx={lightText} fontSize={17} variant="p">
                <Link href="">HOME</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            xs={6}
            md={2}
            sx={{ padding: "0px 10px" }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bolder",
                fontSize: "40px",
                letterSpacing: "10px",
              }}
            >
              SHEIN
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{ padding: "0px 0px", display: "flex" }}
          >
            <Box
              sx={{
                // border: "1px solid blue",
                width: "250px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* the fade in slide effect */}
              <Slide />
            </Box>
            <Box
              sx={{
                width: "350px",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box className="dropicon">
              <PersonIcon sx={icon} />
                <Box className="dropicon-content">
                  <Box sx={{borderBottom:"1px solid lightgrey",padding:"10px 0"}}>
                     <Link href="https://www.google.com">Sign in | sign up </Link> 
                  </Box>
                  <Box sx={{padding:"5px 0",color:"darkgrey"}}>
                     <Link href="https://www.google.com">My orders</Link>
                  </Box>
                  <Box sx={{padding:"5px 0",color:"darkgrey"}}>
                     <Link href="https://www.google.com">My Message</Link>
                  </Box>
                  <Box sx={{padding:"5px 0",color:"darkgrey"}}>
                     <Link href="https://www.google.com">My Coupons</Link>
                  </Box>
                  <Box sx={{padding:"5px 0",color:"darkgrey"}}>
                     <Link href="https://www.google.com">My Points</Link>
                  </Box>
                  <Box sx={{padding:"5px 0",color:"darkgrey"}}>
                     <Link href="https://www.google.com">Recently Received</Link>
                  </Box>
                  <Box sx={{padding:"5px 0",color:"darkgrey"}}>
                     <Link href="https://www.google.com">more services</Link>
                  </Box>
                </Box>
              </Box>
              
              <Box className="dropicon">
              <WorkOutlineIcon sx={icon} /> 
              <Box sx={{position:"absolute",margin:"0 0 30px  30px",fontWeight:"bold"}}>{0}</Box>
                <Box className="dropicon-content" style={{left:"1200px",position:"fixed", height:"200px",width:"300px"}}>
                    
                </Box>
              </Box>


              <FavoriteIcon sx={icon} /> 
              <HeadsetMicIcon sx={icon} />
              <LanguageIcon sx={icon} />
            </Box>
          </Grid>
        </Grid>

        {/* bottom bar */}
        <Grid container sx={{ background: "#fff", padding: "10px 0px" }}>
          <Grid item sm={3} md={10} sx={{ display: "flex" }}>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">NEW IN</Link>   
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content">
                <Grid container sx={{padding:"0 40px" ,height:"100%",padding:"0 250px"}}>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={2}>
                      <Typography variant="p" sx={heading}>New in</Typography>
                      <Typography variant="p" sx={body}>15/04/2022</Typography>
                      <Typography variant="p" sx={body}>14/04/2022</Typography>
                      <Typography variant="p" sx={body}>13/04/2022</Typography>
                      <Typography variant="p" sx={body}>12/04/2022</Typography>
                      <Typography variant="p" sx={body}>11/04/2022</Typography>
                      <Typography variant="p" sx={body}>10/04/2022</Typography>
                      <Typography variant="p" sx={body}>9/04/2022</Typography>
                    
                    
                  </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                      <Typography variant="p" sx={heading}>New in woman clothing</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                    

                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={4}>
                      <Typography variant="p" sx={heading}>New in Beachwear</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>





                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"center"}} item md={3}>
                          <img src="dropimg.webp" alt="image" style={{height:"300px"}} />
                     </Grid>
                </Grid>

              </Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">TRENDS</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content">
              <Grid container sx={{padding:"0 40px" ,height:"100%",padding:"0 250px"}}>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                             <img src="dropimg4.webp" alt="" style={{height:"300px"}} />
                    
                    
                  </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                      <Typography variant="p" sx={heading}>Trending</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                    

                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                      <Typography variant="p" sx={heading}>New in Beachwear</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>





                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"center"}} item md={3}>
                          <img src="dropimage2.webp" alt="image" style={{height:"300px"}} />
                     </Grid>
                </Grid>



              </Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
                color="error"
              >
                <Link href="">SALE</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content">
              <Grid container sx={{padding:"0 40px" ,height:"100%",padding:"0 250px"}}>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={4}>
                             <img src="drop.gif" alt="" style={{height:"250px",width:"240px"}} />
                    
                    
                  </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={2}>
                      <Typography variant="p" sx={heading}>View All</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                    

                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={2}>
                      <Typography variant="p" sx={heading}>Shop by category</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                     </Grid>

                     <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={2}>
                      <Typography variant="p" sx={heading}>Shop recent release</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>





                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"center"}} item md={2}>
                  
                     </Grid>
                </Grid>


              </Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">#SHEINnam</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content">
              <Grid container sx={{padding:"0 40px" ,height:"100%",padding:"0 250px"}}>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                             <img src="shn.webp" alt="" style={{height:"300px"}} />
                    
                    
                  </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                      <Typography variant="p" sx={heading}>highest and Lowest</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                    

                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:"flex-start"}} item md={3}>
                      <Typography variant="p" sx={heading}>Kitchen and dining</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>





                     </Grid>
                  <Grid sx={{display:"flex",flexDirection:"column", alignItems:""}} item md={3}>
                  <Typography variant="p" sx={heading}>Personal care</Typography>
                      <Typography variant="p" sx={body}>New in Dresses</Typography>
                      <Typography variant="p" sx={body}>New in Tops</Typography>
                      <Typography variant="p" sx={body}>New in Blouzers</Typography>
                      <Typography variant="p" sx={body}>New in Browsers</Typography>
                      <Typography variant="p" sx={body}>Jump suits and Body suits</Typography>
                      <Typography variant="p" sx={body}>Two pieces</Typography>
                      <Typography variant="p" sx={body}>New in sweat shirts</Typography>
                      <Typography variant="p" sx={body}>Outer wear</Typography>
                      <Typography variant="p" sx={body}>New in Lingerie & Loungewear</Typography>
                     </Grid>
                </Grid>



              </Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">CLOTHING</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">DRESSES</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">TOPS</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">LINGERIE & LOUNGE</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>

            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">BEACHWEAR</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">SHOES & ACCESORIES</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>

            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">BEAUTY</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>
            <Box sx={bottomLink} className="dropdown">
              <Typography
                sx={{
                  lineHeight: "50px",
                  "&:hover": {
                    borderBottom: "2px solid #000",
                  },
                }}
                fontSize={12}
                variant="p"
              >
                <Link href="">EXPLORE</Link>
              </Typography>

              {/* dropdown */}
              <Box className="dropdown-content"></Box>
            </Box>
          </Grid>
          <Grid
            item
            md={2}
            sm={5}
            sx={{ padding: "0px 10px", display: "flex" }}
          >
            <input
              type="text"
              placeholder={input}
              style={{ padding: "10px" }}
            />
            <Box
              sx={{
                background: "#222",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <SearchIcon />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
