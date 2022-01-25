import React, {useState} from "react"
import { Box, dividerClasses } from "@mui/material";
import styled from "styled-components";
import { BiChevronDown } from '@react-icons/all-files/bi/BiChevronDown';
import { BiChevronUp } from '@react-icons/all-files/bi/BiChevronUp';
import {
    FaHome,
    FaFire,
    FaLink,
    FaWpexplorer,
    FaAngleDoubleUp,
    FaAngleDoubleDown,
    FaColumns,
    FaChartBar,
    FaSitemap,
    FaDollarSign,
    FaAddressCard,
    FaChevronDown,
    FaTwitter,
    FaTelegram,
    FaClock,
    FaExclamationTriangle,
    FaExchangeAlt,
    FaExclamationCircle,
    FaStar
} from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import Pair from "./pair/Pair";
import Searchbox from './searchbox/Searchbox';
import Advbar from "./advbar/Advbar";
import pancakeSwap from "../../../assets/main/dextboard/pancakeswap.png";
import Bscscan from "../../../assets/main/livenewpairs/bscscan.png";
import Mudra from "../../../assets/main/livenewpairs/mudra.png";
import Ucc from "../../../assets/main/livenewpairs/ucc.svg";
import Velox from "../../../assets/main/pairexplorer/velox.png";
import Progressbar from "../../../assets/main/pairexplorer/progress.png";
import Trust from "../../../assets/main/pairexplorer/trust.png";
import Crosswise from "../../../assets/main/pairexplorer/crosswise.gif";
import Kori from "../../../assets/main/pairexplorer/kori.png";
import Baddays from "../../../assets/main/pairexplorer/badday.png";
import './Pairexplorer.css';

const Table = styled.table`
    tr {
        border: 1px solid #142028;
        border-left-width: 0px;
        border-right-width: 0px;
    }
`


function Pairexplorer() {
    const [stPanel1, setStPanel1] = useState(false); 
    const [stPanel2, setStPanel2] = useState(false); 
    return (
        <Box display="flex" flexDirection="column" padding={1} width={"100%"}>
            <Box display={"flex"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Advbar />
            </Box>

            <Box className={"peMainContainer"} >
                <Box className={"peMainChild"}  >
                    <Box display={"flex"} flexDirection={"column"} padding={"0px"} gap={"0px 0px"} style={{width:"280px"}}>
                        <Box  className={"pepanel"} display={"flex"} gap={"0px"} flexDirection={"column"} padding={"20px"} ml={"0px"} mr={"0px"} mb={"0px"} width={"100%"}>
                            <Box class={"dashboard_fore"} style={{fontWeight:"bold"}} display={"flex"} flexDirection={"row"} justifyContents={"flex-start"}>
                                PANCAKESWAP V2 POOL INFO
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} gap={"10px 20px"}>
                                <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} className={"dashbord_fore"}>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Total liquidity:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Daily volume:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Pool created:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Total tx:</font></Box>
                                    {stPanel1&&
                                    <>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Pooled WBNB:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Pooled DEXT:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >% Pooled DEXT:</font></Box>
                                    </>}
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} className={"dashbord_fore"}>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >$428,730.31</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >$11,274.60</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >7/19/2021 13:28</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >34652</font></Box>
                                    {stPanel1&&
                                    <>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >441.96</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >570,030.09</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >22.53%</font></Box>
                                    </>
                                    }
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box className={"pePanelInfoBtn"} mt={"0px"} onClick={() =>setStPanel1(!stPanel1)} >
                            <Box display={"flex"} width={"fit-content"}>
                                {stPanel1&&
                                    <>
                                    <font  class={"dashboard_fore"} >Less Info</font>
                                    </>
                                }
                                {!stPanel1&&
                                    <>
                                    <font  class={"dashboard_fore"} >More Info</font>
                                    </>
                                }
                            </Box>
                            <Box display={"flex"} width={"fit-content"}>
                                {stPanel1&&
                                    <BiChevronUp size={20} />
                                }{!stPanel1&&
                                    <BiChevronDown size={20} />
                                }
                            </Box>
                        </Box>
                        
                    </Box>
                    

                        {/* second panel */}
                        <Box display={"flex"} flexDirection={"column"} padding={"0px"} gap={"0px 0px"} width={"280px"}>
                        <Box  className={"pepanel"} display={"flex"} gap={"0px"} flexDirection={"column"} padding={"20px"} ml={"0px"} mr={"0px"} mb={"0px"} >
                            <Box class={"dashboard_fore"} style={{fontWeight:"bold"}} display={"flex"} flexDirection={"row"} justifyContents={"flex-start"}>
                                TOKEN INFO
                            </Box>
                            <Box display={"flex"} flexDirection={"row"} gap={"10px 20px"}>
                                <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} className={"dashbord_fore"}>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Holders:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Total Market Cap:</font></Box>
                                    {stPanel2&&
                                    <>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >Total Supply:</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >1 BNB:</font></Box>
                                    </>}
                                </Box>
                                <Box display={"flex"} flexDirection={"column"} className={"dashbord_fore"}>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >2945</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >$547,705.26</font></Box>
                                    {stPanel2&&
                                    <>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >2,529 DEXT</font></Box>
                                    <Box width={"fit-content"}><font  class={"dashboard_fore"} >
1298.607 DEXT</font></Box>
                                    
                                   
                                    </>
                                    }
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box className={"pePanelInfoBtn"} mt={"0px"} onClick={() =>setStPanel2(!stPanel2)} >
                            <Box display={"flex"} width={"fit-content"}>
                                {stPanel2&&
                                    <>
                                    <font  class={"dashboard_fore"} >Less Info</font>
                                    </>
                                }
                                {!stPanel2&&
                                    <>
                                    <font  class={"dashboard_fore"} >More Info</font>
                                    </>
                                }
                            </Box>
                            <Box display={"flex"} width={"fit-content"}>
                                {stPanel2&&
                                    <BiChevronUp size={20} />
                                }{!stPanel2&&
                                    <BiChevronDown size={20} />
                                }
                            </Box>
                        </Box>
                        
                    </Box>
                    
                    {/* third child */}
                    <Box display={"flex"} flexDirection={"row"} width={"100%"} justifyContent={"space-between"}>
                        <Box display={"flex"} className ={"pepanel"} style={{width:"45%",height:"40px", borderRadius:"24px", cursor:"pointer"}} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            <img src={Velox} width={"18px"} height={"18px"}/>
                            <font className={"dashboard_fore"}>Limit/Bot</font>
                        </Box>
                        <Box display={"flex"} className ={"pepanel"} style={{background:"#00b8d8", width:"45%",height:"40px", borderRadius:"24px", cursor:"pointer"}} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                            <FaExchangeAlt style={{marginTop:"3px"}}/>
                            <font className={"dashboard_fore"}>Swap</font>
                        </Box>
                    </Box>

                    {/* fourth child */}
                    <Box className={"dextpanel"} display={"flex"} width={"100%"} height={"200px"} flexDirection={"column"} padding={"0px"} gap={"0px 0px"} width={"280px"} alignItems={"center"} ml={"0px"} mr={"0px"}>
                        <Box component={"img"} width="114px" height="57px" src={Progressbar} mt={"20px"}>
                        </Box>
                        <Box>
                            <font className={"dashboard_fore"}>DEXT Score</font>
                        </Box> 
                        <Box>
                            <font className={"dashboard_fore"}> Project reliability score based on:</font>
                        </Box> 
                        <Box>
                            <font className={"dashboard_fore"}> 
                                83pt 99pt 99pt 99pt 99pt
                            </font>
                        </Box>
                        <Box mt={"20px"}>
                            <font className={"dashboard_fore"}> CONTRACT DETAILS </font>
                        </Box> 
                        <Box>
                            <font className={"dashboard_fore"}> 
                                Mint Tx Lock Proxy Fees
                            </font>
                        </Box>
                        <Box  mt={"20px"}>
                            <font className={"dashboard_fore"}>COMMUNITY TRUST 
(412 votes) </font>

                        </Box> 
                        <Box component={"img"} width="247px" height="55px" src={Trust} mt={"20px"} mb={"10px"}>
                        </Box>
                    </Box>
                                {/* fivth child */}
                    <Box  className={"dextpanel"} component={"img"} display={"flex"} width={"100%"} height={"200px"} flexDirection={"column"} padding={"0px"} gap={"0px 0px"} width={"280px"} height="96px" src={Crosswise} alignItems={"center"} ml={"0px"} mr={"0px"}>
                    </Box>
                     {/* sixth child */}
                     <Box  className={"dextpanel"} component={"img"} display={"flex"} width={"100%"} height={"200px"} flexDirection={"column"} padding={"0px"} gap={"0px 0px"} width={"280px"} height="96px" src={Kori} alignItems={"center"} ml={"0px"} mr={"0px"}>
                    </Box>
                     {/* seventh child */}
                     <Box  className={"dextpanel"} component={"img"} display={"flex"} width={"100%"} height={"200px"} flexDirection={"column"} padding={"0px"} gap={"0px 0px"} width={"280px"} height="96px" src={Baddays} alignItems={"center"} ml={"0px"} mr={"0px"}>
                    </Box>
                </Box>
                <Box className={"peMainChild"} flex={"1"}>
                    <Box Classes className={"dextpanel"} style={{height:"200px"}}>
                        
                    </Box>
                </Box>
                <Box className={"peMainChild"} >
                    <Box  className={"dextpanel"} style={{width:"280px", padding:"1rem", borderRadius:"20px"}} display={"flex"} flexDirection={"column"}>
                        <Box display={"flex"}  flexDirection={"row"} justifyContent={"space-between"} alignContent={"flex-start"}>
                            <Box display={"flex"}>
                                <font className={"dashboard_fore"}>
                                    FAVORITES <FaExclamationCircle/>
                                </font>
                            </Box>
                            <Box display={"flex"} justifyContent={"flex-end"} flexDirection={"row"}>
                                <font className={"dashboard_fore"}>
                                    <FaChartBar  size={"20"}/>
                                </font>
                            </Box>
                            <Box display={"flex"}>
                                <Box className={"dextpanel"} style={{cursor:"pointer", background:"#818ea3", width:"28px", height:"28px", borderRadius:"14px"}} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} mt={"-7px"}>
                                    <CgClose size={"18"}/>
                                </Box>
                            </Box>
                        </Box>
                        <Box display={"flex"}  flexDirection={"row"} justifyContent={"flex-start"} mt={"10px"}>
                            <font className={"dashboard_fore"}>
                                Your favorite list is empty!
                            </font>
                        </Box>
                        <Box display={"flex"}  flexDirection={"row"} justifyContent={"flex-start"} mt={"10px"}>
                            <font className={"dashboard_fore"}>
                                Start building your favorite list by adding this pair.
                            </font>
                        </Box>
                        <Box   display={"flex"}  className={"peFavourite"} mt={"15px"} style={{ height:"100px", backgroundColor:"#23323B", color:"#818EA2", borderRadius:"20px", cursor:"pointer"}} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                            <div style={{width:"20px", height:"20px",marginBottom:"10px", borderRadius:"20px", backgroundColor:"#818EA2"}}>
                                <FaStar color={"#23323B"} size={"20"}/>
                            </div>
                            <div>Add WBNB/DEXT to you</div> 
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* <Box display={"flex"} flex={"1"} width={"100%"} mt={"15px"}>
                <Table width={"100%"} height={"100%"} border={"0"}>
                    <tr height="45px">
                        <td style={{ justifyContent: "left" }} align="left"><font className={"dashboard_fore"}>Pair info</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Listed Since</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Token Price USD(BNB)</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Initial Liquidity</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Total Liquidity</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Pool Amount</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Pool Variation</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Pool Remaining</font></td>
                        <td align="left"><font className={"dashboard_fore"}>Contact</font></td>
                        <td align="right"><font className={"dashboard_fore"}>Actions</font></td>
                    </tr>

                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>

                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    <tr height="60px">
                        <td style={{ height: '100%', display: 'flex', justifyContent: 'left', alignItems: 'center', columnGap: '16px' }}>
                            <div style={{ position: "relative", width: "25px", height: "25px", borderRadius: "25px", backgroundColor: "#23323c", textAlign: "center", lineHeight: "25px" }}>
                                <font className="dashboard_back">M</font>
                                <img src={pancakeSwap} width="13px" height="13px" style={{ position: "absolute", top: "-5px", right: "-5px", borderRadius: "13px" }} />
                            </div>
                            <div>
                                <div className="dashboard_fore">WBNB/SGR</div>
                                <div className="dashboard_fore">0xc158f4...4207</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaClock sie={15} />  3 h 6 m 51 s
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $0.0000001486
                            </div>
                        </td>
                        <td style={{ height: "100%" }}>
                            <div style={{ display: 'flex', height: "100%", justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', columnGap: '16px' }}>
                                <div>2022-01-16</div>
                                <div>22:12:43</div>
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                $29.51
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div style={{ backgroundColor: "#fbfbfb", width: "fit-content", justifyContent: "center", padding: "4px", color: "#212529", fontSize: "10px", borderRadius: "4px" }}>
                                0%
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                0.03 BNB
                            </div>
                        </td>
                        <td align="left">
                            <div className={"dashboard_fore"}>
                                <FaExclamationTriangle size={15} />
                            </div>
                        </td>
                        <td align="right" >
                            <div className={"dashboard_fore"} style={{ display: "flex", justifyContent: 'right', alignItems: 'center', columnGap: '6px' }}>
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Ucc} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Bscscan} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={Mudra} width="20px" height="20px" />
                                <img style={{ borderRadius: "20px", border: "1px solid white" }} src={pancakeSwap} width="20px" height="20px" style={{ borderRadius: "20px" }} />
                                <FaWpexplorer style={{ paddingTop: "0px", cursor: "pointer" }} color="#00b8d8" size={23} />
                            </div>
                        </td>
                    </tr>
                    
                </Table>
            </Box> */}
        </Box>
    );
}

export default Pairexplorer