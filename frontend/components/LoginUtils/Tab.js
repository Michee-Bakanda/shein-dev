import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import '../styles/globals.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',marginLeft:"500px", width:"600px", paddingLeft:"200px"}}>
      <Box sx={{ borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Phone" {...a11yProps(0)} />
          <Tab label="Email" {...a11yProps(1)} />
         
        </Tabs>
      </Box>


      {/* =====Phone==== */}

      <TabPanel value={value} index={0} style={{paddingLeft:"-20px"}}>
       
        <div>

         <div>
        <p  style={{"&:hover": {color: "#efefef"}, }}>Phone Number:</p>
    
          <form>
          <input required style={{width:"365px", height:"44px"}}/>

      
        <label  style={{marginTop:"40px"}}>Password:</label>
        
            <input required style={{width:"365px", height:"44px"}}/>
            <button style={{background:"#222222", width:"365px", height:"54px", color:"white", fontSize:"25px", border:"none", cursor:"pointer", fontWeight:"bold", marginTop:"20px"}}>SIGN IN</button>
          </form>
          
          <p style={{marginTop:"20px", marginLeft:"100px"}}>Forgot your password?</p>
        </div>


        <div style={{display:"flex", color:"lightgrey"}}>
        <hr style={{width:"150px", height:"1px"}}/>
        <p style={{marginTop:"-5px"}}>Or</p>
        <hr style={{width:"150px",  height:"1px"}}/>
        </div>

        <div style={{marginTop:"20px"}}>
        <button style={{background:"#fff", fontSize:"19px",width:"365px", height:"54px",color:"grey",  border:"none", cursor:"pointer", fontWeight:"bold", marginTop:"20px", border:"1px solid grey", display:"flex"}}>
          <img src='google.png'/>
          <p style={{marginTop:"-10" , marginLeft:"50px"}}>Sign In With Google</p>
          </button>
        </div>

        <div style={{marginTop:"20px"}}>
        <button style={{background:"#fff", width:"365px",fontSize:"19px", height:"54px",color:"grey",  border:"none", cursor:"pointer", fontWeight:"bold", marginTop:"20px" , border:"1px solid grey", display:"flex"}}>
        <img src='facebook.png'/>
          <p style={{marginTop:"-10" , marginLeft:"50px"}}>Sign In With Facebook</p>
          </button>
        </div>

        <div style={{marginLeft:"55px"}}>
          <p  style={{color:"grey", marginLeft:"10px"}} ><span style={{color:"red"}}>10% off</span>  for the first order</p>
          <p style={{color:"grey"}}>Verify & earn extra <span style={{color:"red"}}>100</span>points</p>
        </div>


        </div>
      </TabPanel>


        {/* =====Email===== */}

      <TabPanel value={value} index={1}>
      <div>

<div>
<label>Email Address:</label>
 <form>
 <input style={{width:"365px", height:"44px"}}/>

<label>Password:</label>
   <input style={{width:"365px", height:"44px"}}/>
 </form>
 <button style={{background:"#222222", width:"365px", height:"54px", color:"white", fontSize:"25px", border:"none", cursor:"pointer", fontWeight:"bold", marginTop:"20px"}}>SIGN IN</button>
 <p style={{marginTop:"20px", marginLeft:"100px"}}>Forgot your password?</p>
</div>


<div style={{display:"flex", color:"lightgrey"}}>
<hr style={{width:"150px", height:"1px"}}/>
<p style={{marginTop:"-5px"}}>Or</p>
<hr style={{width:"150px",  height:"1px"}}/>
</div>

<div style={{marginTop:"20px"}}>
<button style={{background:"#fff", fontSize:"19px",width:"365px", height:"54px",color:"grey",  border:"none", cursor:"pointer", fontWeight:"bold", marginTop:"20px", border:"1px solid grey", display:"flex"}}>
 <img src='google.png'/>
 <p style={{marginTop:"-10" , marginLeft:"50px"}}>Sign In With Google</p>
 </button>
</div>

<div style={{marginTop:"20px"}}>
<button style={{background:"#fff", width:"365px",fontSize:"19px", height:"54px",color:"grey",  border:"none", cursor:"pointer", fontWeight:"bold", marginTop:"20px" , border:"1px solid grey", display:"flex"}}>
<img src='facebook.png'/>
 <p style={{marginTop:"-10" , marginLeft:"50px"}}>Sign In With Facebook</p>
 </button>
</div>

 <div style={{marginLeft:"55px"}}>
          <p  style={{color:"grey", marginLeft:"10px"}} ><span style={{color:"red"}}>10% off</span>  for the first order</p>
          <p style={{color:"grey"}}>Verify & earn extra <span style={{color:"red"}}>100</span>points</p>
        </div>

</div>
      </TabPanel>
     
    </Box>
  );
}