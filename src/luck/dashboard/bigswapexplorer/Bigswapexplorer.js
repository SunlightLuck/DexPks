import React from "react"
import { Box } from "@mui/material";
import styled from "styled-components";
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
    FaExclamationTriangle
} from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import Pair from "./pair/Pair";
import Searchbox from './searchbox/Searchbox';
import Advbar from "./advbar/Advbar";
import pancakeSwap from "../../../assets/main/dextboard/pancakeswap.png";
import Bscscan from "../../../assets/main/livenewpairs/bscscan.png";
import Mudra from "../../../assets/main/livenewpairs/mudra.png";
import Ucc from "../../../assets/main/livenewpairs/ucc.svg";
import './Bigswapexplorer.css';

const Table = styled.table`
    tr {
        border: 1px solid #142028;
        border-left-width: 0px;
        border-right-width: 0px;
    }
`


function Bigswapexplorer() {

    return (
        <Box display="flex" flexDirection="column" padding={1} width={"100%"}>
            <Box display={"flex"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Advbar />
            </Box>

            <Box display={"flex"} flex={"1"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} sx={{ flexDirection: 'row' }}>
                    <Box display={"flex"} width={"50%"} sx={{ flexDirection: 'column' }} justifyContent={"flex-start"} ml={"20px"}>
                        <Box display={"flex"} className="dashboard_fore" alignItems={"left"} justifyContent={"flex-start"} style={{ fontSize: "23pt" }}  >
                        BIG SWAP EXPLORER
                        </Box>
                        <Box display={"flex"} className="dashboard_fore" >
                        Shows latest big swaps in Ethereum with useful information
                        </Box>
                    </Box>
                    <Box display={"flex"} width={"50%"} justifyContent={"flex-end"} ml={"20px"} mt={"30px"}>
                        <Searchbox />
                    </Box>
                </Box>

            </Box>

            <Box display={"flex"} flex={"1"} width={"100%"} mt={"15px"}>
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
            </Box>
        </Box>
    );
}

export default Bigswapexplorer