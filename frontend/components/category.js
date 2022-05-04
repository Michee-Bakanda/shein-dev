import React from 'react'
import Link from 'next/link'

function Category() {
  return (

    <div className='white-bg'  style={{ backgroundColor: "#000", width: "100%", height: "auto",display:'flex',alignItems:'center',justifyContent:'center' }}>
      <div className='category-block'  style={{ height: "400px", width: "1240px", cursor: "pointer", marginLeft: "30px" }}>


        <h2 style={{ marginLeft: "25%", backgroundColor: "white", width: "30%", height: "40px", marginLeft: "38%", borderRadius: "50px", paddingLeft: "100px", border: "3px solid pink", boxShadow: " 6px 13px 5px 8px rgba(0,0,0,0.10)" }}>Shop by Category</h2>


        <div  style={{ color: "white", marginLeft: "1100px", fontSize: "17px" }}> <Link href='https://eur.shein.com/Women-Clothing-c-2030.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=cat_TI=50001_aod=0_PS=HZ-7-16_ABT=0&scici=WomenHomePage~~ON_Banner,CN_cat,HZ_all,HI_hotZonehw7dwxa9isp~~7_16~~real_2030~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Clothing&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3Dcat%60hz%3Dall%60ps%3D7_16%60jc%3Dreal_2030&src_tab_page_id=page_home1649938201148'> View All ></Link></div>

        <div   style={{ fontSize: "15px", fontWeight: "bold" }}>

          <div style={{ display: "flex" }}>
            <Link href="https://za.shein.com/Women-Dresses-c-1727.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=categoryPC_TI=50001_aod=0_PS=HZ-6-4_ABT=0&scici=WomenHomePage~~ON_Banner,CN_categoryPC,HZ_4,HI_hotZone2yxg3pk3gqt~~6_4~~real_1727~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Dresses&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3DcategoryPC%60hz%3D4%60ps%3D6_4%60jc%3Dreal_1727&src_tab_page_id=page_home1650372871069">
              <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
                <img src='dresses.png' style={{ width: "50px", height: "60px" }} />
                <p> Dresses</p>
              </div>
            </Link>



            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='shirts.png' style={{ width: "50px", height: "60px" }} />
              <p> T-Shirts</p>
            </div>

            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='beachwear.png' style={{ width: "50px", height: "60px" }} />
              <p>Beachwear</p>
            </div>

            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='tanktops.png' style={{ width: "50px", height: "60px" }} />
              <p>Tanks Tops and Camies</p>
            </div>

            <Link href="https://za.shein.com/Women-Bottoms-c-1767.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=categoryPC_TI=50001_aod=0_PS=HZ-6-6_ABT=0&scici=WomenHomePage~~ON_Banner,CN_categoryPC,HZ_6,HI_hotZonetoc0iw6riif~~6_6~~real_1767~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Bottoms&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3DcategoryPC%60hz%3D6%60ps%3D6_6%60jc%3Dreal_1767&src_tab_page_id=page_home1650372871069">
              <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
                <img src='pants.png' style={{ width: "50px", height: "60px" }} />
                <p>Bottoms</p>
              </div>
            </Link>


          </div>

          <div style={{ display: "flex", marginTop: "15px" }}>
            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='lingerie.png' style={{ width: "50px", height: "60px" }} />
              <p>Lingerie & Loungewear</p>
            </div>

            <Link href="https://za.shein.com/Women-Blouses-c-1733.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=categoryPC_TI=50001_aod=0_PS=HZ-6-3_ABT=0&scici=WomenHomePage~~ON_Banner,CN_categoryPC,HZ_3,HI_hotZonevix35alvly~~6_3~~real_1733~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Blouses&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3DcategoryPC%60hz%3D3%60ps%3D6_3%60jc%3Dreal_1733&src_tab_page_id=page_home1650372871069">
              <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
                <img src='blouses.png' style={{ width: "50px", height: "60px" }} />
                <p>Blouses</p>
              </div>
            </Link>


            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='activewear.png' style={{ width: "50px", height: "60px" }} />
              <p>Activewear</p>
            </div>

            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='denim.png' style={{ width: "50px", height: "60px" }} />
              <p>Denim</p>
            </div>

            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='twopiece.png' style={{ width: "50px", height: "60px" }} />
              <p> Two-Pieces</p>
            </div>
          </div>

          <div  style={{ display: "flex", marginTop: "15px", flexWrap:'wrap' }}>
            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='jumpsuits.png' style={{ width: "50px", height: "60px" }} />
              <p>Jumpsuits and  Bodysuits</p>
            </div>

            <Link href="https://za.shein.com/Women-Sweatshirts-c-1773.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=categoryPC_TI=50001_aod=0_PS=HZ-6-5_ABT=0&scici=WomenHomePage~~ON_Banner,CN_categoryPC,HZ_4,HI_hotZonetxeh2dpxkr~~6_5~~real_1773~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Sweatshirts&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3DcategoryPC%60hz%3D4%60ps%3D6_5%60jc%3Dreal_1773&src_tab_page_id=page_home1650372871069">
              <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
                <img src='sweaters.png' style={{ width: "50px", height: "60px" }} />
                <p>Sweatshirts</p>
              </div>
            </Link>


            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='coats.png' style={{ width: "50px", height: "60px" }} />
              <p>Blazers, Coats & Blazers</p>
            </div>

            <Link href="https://za.shein.com/Women-Shoes-c-1745.html?ici=CCCSN=WomenHomePage_ON=Banner_OI=1_CN=categoryPC_TI=50001_aod=0_PS=HZ-6-7_ABT=0&scici=WomenHomePage~~ON_Banner,CN_categoryPC,HZ_7,HI_hotZone5zl7lyzq2wh~~6_7~~real_1745~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Shoes&src_module=WomenHomePage&src_identifier=on%3DBanner%60cn%3DcategoryPC%60hz%3D7%60ps%3D6_7%60jc%3Dreal_1745&src_tab_page_id=page_home1650372871069">
              <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
                <img src='shoes.png' style={{ width: "50px", height: "60px" }} />
                <p>Shoes & accs</p>
              </div>
            </Link>


            <div style={{ backgroundColor: "white", width: "230px", height: "80px", marginLeft: "10px", display: "flex" }}>
              <img src='living.png' style={{ width: "50px", height: "60px" }} />
              <p>Furnitures</p>
            </div>
          </div>

        </div>
      </div>

    </div>



  )
}

export default Category