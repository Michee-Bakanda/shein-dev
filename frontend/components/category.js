import React from 'react'

function Category() {
  return (


    <div style={{backgroundImage:`url('./orange.png')`, height:"400px", width:"1240px", cursor:"pointer"}}>
      
      
        <h2 style={{marginLeft:"25%",backgroundColor:"white", width:"30%", height:"40px", marginLeft:"38%", borderRadius:"50px", paddingLeft:"100px", border:"3px solid pink", boxShadow:" 6px 13px 5px 8px rgba(0,0,0,0.10)"}}>Shop by Category</h2>
     

      <div style={{color:"black", marginLeft:"1100px", fontSize:"17px", fontWeight:"bold"}}> <a href='https://eur.shein.com/Women-Clothing-c-2030.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=cat_TI=50001_aod=0_PS=HZ-7-16_ABT=0&scici=WomenHomePage~~ON_Banner,CN_cat,HZ_all,HI_hotZonehw7dwxa9isp~~7_16~~real_2030~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Clothing&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3Dcat%60hz%3Dall%60ps%3D7_16%60jc%3Dreal_2030&src_tab_page_id=page_home1649938201148'> View All ></a></div>

      <div style={{marginLeft:"20px", marginTop:"40px", fontSize:"15px", fontWeight:"bold"}}>

        <div style={{display:"flex"}}>
          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
            <img src='dresses.png' style={{width:"50px", height:"60px"}}/>
             <p> Dresses</p>
            </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px" ,display:"flex"}}>
          <img src='shirts.png' style={{width:"50px", height:"60px"}}/>
         <p> T-Shirts</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px" ,display:"flex"}}>
          <img src='beachwear.png' style={{width:"50px", height:"60px"}}/>
          <p>Beachwear</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px" ,display:"flex"}}>
          <img src='tanktops.png' style={{width:"50px", height:"60px"}}/>
            <p>Tanks Tops & Camies</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px" ,display:"flex"}}>
          <img src='pants.png' style={{width:"50px", height:"60px"}}/>
            <p>Bottoms</p>
          </div>

        </div>

        <div style={{display:"flex", marginTop:"15px"}}>
          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px" ,display:"flex"}}>
          <img src='lingerie.png' style={{width:"50px", height:"60px"}}/>
            <p>Lingerie & Loungewear</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='blouses.png' style={{width:"50px", height:"60px"}}/>
            <p>Blouses</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='activewear.png' style={{width:"50px", height:"60px"}}/>
            <p>Activewear</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='denim.png' style={{width:"50px", height:"60px"}}/>
            <p>Denim</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='twopiece.png' style={{width:"50px", height:"60px"}}/>
           <p> Two-Pieces</p>
          </div>
        </div>

        <div style={{display:"flex" , marginTop:"15px"}}>
          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='jumpsuits.png' style={{width:"50px", height:"60px"}}/>
            <p>Jumpsuits & Bodysuits</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='sweaters.png' style={{width:"50px", height:"60px"}}/>
           <p>Sweatshirts</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='coats.png' style={{width:"50px", height:"60px"}}/>
            <p>Blazers, Coats & Blazers</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='shoes.png' style={{width:"50px", height:"60px"}}/>
           <p>Shoes & accs</p>
          </div>

          <div style={{backgroundColor:"white", width:"230px", height:"80px" , marginLeft:"10px",display:"flex"}}>
          <img src='living.png' style={{width:"50px", height:"60px"}}/>
             <p>Shoes & accs</p>
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default Category