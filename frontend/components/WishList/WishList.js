import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import React from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Item
          style={{
            height: "380px",
            width: 250,
            // border: "1px solid black",
            backgroundImage: `url(1648784837ce179b20c3cacea4350478611f2639e4_thumbnail_405x552.webp)`,
          }}
        >
          Item
        </Item>
        <div style={{ height: "100px" }}>kjhhkh</div>
      </Grid>
      <Grid item xs={3}>
        <Item
          style={{ height: "380px", width: 250,  }}
        >
          Item
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item
          style={{ height: "380px", width: 250,  }}
        >
          Item
        </Item>
      </Grid>
      <Grid item xs={3}>
        <Item
          style={{ height: "380px", width: 250,  }}
        >
          Item
        </Item>
      </Grid>
    </React.Fragment>
  );
}

const wishlistSideMenu = [
  {
    topLevel: "My Account",
    topLeveltwo: "My Asssets",
    topLevelthree: "My Orders",
    topLevelfour: "My Concern",
    topLevelfive: "Customer Service",
    topLevelsix: "Other Service",
    topLevelseven: "Policy",
    topLeveleight: "Sign Out",
    children: [
      "my profile",
      "address book",
      "My Payment Options",
      "My Measurements",
      "Account Security",
    ],

    childrentwo: ["My Coupons", "My Points", "My Wallet", "Gift Card"],
  },
];

const WishList = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "20%",
          background: "#fff",
          marginLeft: "60px",
          height: "300vh",
        }}
      >
        {wishlistSideMenu.map((item, index) => {
          return (
            <Accordion style={{ margin: "0 0" }}>
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.topLevel}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.children.map((childItem, index) => {
                  return (
                    <Typography
                      style={{
                        padding: "5px",
                        fontSize: "15px",
                        paddingLeft: "18px",
                      }}
                    >
                      {childItem}
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        })}

        <Accordion style={{ margin: "0 0" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {wishlistSideMenu.map((item, index) => {
              return <Typography>{item.topLeveltwo}</Typography>;
            })}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ margin: "0 0" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {wishlistSideMenu.map((item, index) => {
              return <Typography>{item.topLevelthree}</Typography>;
            })}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ margin: "0 0" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {wishlistSideMenu.map((item, index) => {
              return <Typography>{item.topLevelfour}</Typography>;
            })}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ margin: "0 0" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {wishlistSideMenu.map((item, index) => {
              return <Typography>{item.topLevelfive}</Typography>;
            })}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ margin: "0 0" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {wishlistSideMenu.map((item, index) => {
              return <Typography>{item.topLevelsix}</Typography>;
            })}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ margin: "0 0" }}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            {wishlistSideMenu.map((item, index) => {
              return <Typography>{item.topLevelseven}</Typography>;
            })}
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ marginBottom: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography style={{ marginBottom: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "15px",
          }}
        >
          {wishlistSideMenu.map((item, index) => {
            return <Typography>{item.topLeveleight}</Typography>;
          })}
        </Accordion>
      </div>
      <div
        style={{  width: "100%", height: "298vh" }}
      >
        <div
          style={{
            borderBottom: "lightgray 2px solid",
            width: "100%",
            height: "13%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "35%",
              //   border: "red 2px solid  ",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            My WishList
          </div>
          <div
            style={{
              width: "100%",
              height: "15%",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              fontSize: "9px",
              textAlign: "center",
              color: "gray",
              //   border: "2px solid red"
            }}
          >
            My It is empty here.<br></br>
            Personalize your shopping experience with your Wishlist.
          </div>
          <div
            style={{
              width: "100%",
              height: "25%",
              //   border: "red 2px solid  ",
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
              fontSize: "27px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Already have items saved?
          </div>
          <div
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{
                  width: 230,
                  height: "50px",
                  //   border: "1px solid black",
                  borderRadius: "0",
                  backgroundColor: "black",
                  boxShadow: "0 0 0 0",
                  fontSize: "18px",
                }}
              >
                Sign In/Register
              </Button>
            </Stack>
          </div>
        </div>
        <div
          style={{
            // border: "black 2px solid",
            width: "100%",
            height: "12%",
            display: "flex",
            padding: "0 30px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "45%", height: "100%" }}>
            <div
              style={{
                // border: "1px solid red",
                fontSizw: "11px",
                color: "gray",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "black",
                  marginTop: "30px",
                }}
              >
                Heart It.
              </div>
              Store everything you love on one page.
            </div>
            <div
              style={{
                width: "100%",
                height: "40px",
                // border: "1px solid blue",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
                fontFamily: "arialMT",
                fontSize: "18px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
                style={{
                  marginRight: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
              Think about it before purchasing it.
            </div>
            <div
              style={{
                width: "100%",
                height: "40px",
                // border: "1px solid blue",
                display: "flex",
                alignItems: "center",
                fontFamily: "arialMT",
                fontSize: "18px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-suit-heart-fill"
                viewBox="0 0 16 16"
                style={{
                  marginRight: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
              </svg>
              Get notification about out-of-stock items.
            </div>
          </div>
          <div
            style={{
              width: "27%",
              height: "100%",
              marginRight: "50px",
              padding: "10px 10px",
            }}
          >
            <div
              style={{
                // border: "1px solid blue",
                fontSize: "11px",
                color: "gray",
                height: "75%",
                backgroundImage: `url(imgage.gif)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "black",
                  marginTop: "10px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            // border: "1px solid black",
            marginBottom: "40px",
            height: "10vh",
            padding: "0 30px",
            fontWeight: "bold",
            fontSize: "27px",
            marginTop: "50px"
          }}
        >
          Let's Get Started!
          <div style={{ fontWeight: 100, fontSize: "12px", color: "gray" }}>
            These best-selling styles are your ticket to the hottest posts ever.
            To buy or not to buy?
          </div>
        </div>

        <Box sx={{ flexGrow: 1 }} style={{boxShadow: "0 0 0 0"}}>
          <Grid container spacing={1}>
            <Grid container item spacing={5}>
              <>
                <Item
                  style={{
                    // border: "1px solid red",
                    width: "100%",
                    height: "400px",
                    marginLeft: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 30px",
                    marginRight: "60px",
                    boxShadow: "0 0 0 0"
                  }}
                >
                  <div
                    style={{
                      width: "24%",
                      height: "100%",
                    //   border: "red solid 2px",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "80%",
                        width: "100%",
                        // border: "solid pink 2px",
                        backgroundImage: `url(1648637090db3f339902cc8025b1891c61a17824dd_thumbnail_405x552.webp)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        // border: "gray 3px solid",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      R23{" "}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "24%",
                      height: "100%",
                    //   border: "red solid 2px",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "80%",
                        width: "100%",
                        // border: "solid pink 2px",
                        backgroundImage: `url(1617861898287453ad7029977452745a06fabeb42a_thumbnail_405x552.webp)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        // border: "gray 3px solid",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      R23
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "24%",
                      height: "100%",
                    //   border: "red solid 2px",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "80%",
                        width: "100%",
                        // border: "solid pink 2px",
                        backgroundImage: `url(1647844222d592456eb9e8f8245766e9c80d598b24_thumbnail_405x552.webp)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        // border: "gray 3px solid",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      R28{" "}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "24%",
                      height: "100%",
                    //   border: "red solid 2px",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        height: "80%",
                        width: "100%",
                        // border: "solid pink 2px",
                        backgroundImage: `url(164610027641464b063264b0ffbfd9691f1720fc2d_thumbnail_405x552.webp)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        // border: "gray 3px solid",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      R21{" "}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Item>
              </>
            </Grid>
            <Grid container item spacing={5}>
              <Item
                style={{
                //   border: "1px solid red",
                  width: "100%",
                  height: "400px",
                  marginLeft: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 30px",
                  marginRight: "60px",
                  boxShadow: "0 0 0 0"
                }}
              >
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(1648003521226d6f973ea2073aaa188b7d87c69326_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R48
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(1630299724a6d7b29e318ab13f2d5ef54d72e53a67_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R72{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(1649209290bfcec06ec10f02848785745842c2e721_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R28{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(164542581976199abdd85c08b110757b19cc9d9cd2_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R69{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid container item spacing={5}>
              <Item
                style={{
                //   border: "1px solid red",
                  width: "100%",
                  height: "400px",
                  marginLeft: "40px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 30px",
                  marginRight: "60px",
                  boxShadow: "0 0 0 0"
                }}
              >
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(1650251464b42edd26cbdfb14c0ac29e58fb71b8fb_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R129{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(1647226062d1d074af4a9e9050a68f19d3a68268f5_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R150{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(16480868110bb286da7c42d74e6a5ce54227d33bff_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R162{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "24%",
                    height: "100%",
                    // border: "red solid 2px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      height: "80%",
                      width: "100%",
                    //   border: "solid pink 2px",
                      backgroundImage: `url(165025923931e0b74b89a560dc28a3175768bc17e7_thumbnail_405x552.webp)`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    style={{
                    //   border: "gray 3px solid",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    R275{" "}
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid container item spacing={5}>
              <Item
                style={{
                //   border: "1px solid red",
                  width: "100%",
                  height: "200px",
                  marginLeft: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 30px",
                  marginRight: "60px",
                  marginTop: "50px",
                  boxShadow: "0 0 0 0"
                }}
              >
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    style={{
                      width: 190,
                      height: "50px",
                      //   border: "1px solid black",
                      borderRadius: "0",
                      backgroundColor: "black",
                      boxShadow: "0 0 0 0",
                      fontSize: "18px",
                    }}
                  >
                    View More
                  </Button>
                </Stack>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default WishList;
