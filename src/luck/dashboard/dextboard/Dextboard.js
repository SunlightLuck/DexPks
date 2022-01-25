import React from "react"
import {Box} from "@mui/material";
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
    FaTelegram
  }  from 'react-icons/fa';
import pancakeSwap from "../../../assets/main/dextboard/pancakeswap.png";
import Oxcapital from "../../../assets/main/dextboard/oxcapital.png";
import Oxpad  from "../../../assets/main/dextboard/oxpad.png";
import Dgmv2 from "../../../assets/main/dextboard/dgmv2.png";
import Arker from "../../../assets/main/dextboard/arker.png";
import Cbk from "../../../assets/main/dextboard/cbk.png";
import './Dextboard.css';

// function onReadmore(){
//     alert('read more');
// }

function DextBoard(){
    // const onReadmore=()=>{
    //     alert();
    // }
    
    return (
        <Box display="flex" flexDirection="column"  padding={1} width={"100%"}>
            <Box display={"flex"} flex={"1"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Box display={"flex"}  flex={"1"} justifyContent={"flex-start"} sx={{ flexDirection: 'row' }}>
                    <Box display={"flex"}   sx={{ flexDirection: 'column' }} justifyContent={"flex-start"} ml={"20px"}>
                        <Box display={"flex"} className="dashboard_fore" alignItems={"left"} justifyContent={"flex-start"} style={{fontSize:"23pt"}}  >
                            DEXTBOARD
                        </Box>
                        <Box display={"flex"} className="dashboard_fore" >
                            Tools, hot pairs and featured sponsors on <span style={{color:"#efb90a"}} >Binance</span> chain.
                        </Box>
                    </Box>
                </Box>
                <Box display={"flex"}  flex={"1"} justifyContent={"flex-end"} sx={{ flexDirection: 'row' }} >
                    <Box display={"flex"}   sx={{ flexDirection: 'column' }}  mr={"10px"} >
                        <Box display={"flex"} className="dashboard_fore" justifyContent={"flex-end"} color={"#818ea3"} >
                            NEXT TOKEN BURN
                        </Box>
                        <Box display={"flex"} className="dashboard_fore" >
                            2022-02-01 166,674 DEXT <FaFire ></FaFire>
                        </Box>
                    </Box>
                </Box> 
            </Box>
            <Box display={"flex"} flex={"1"} width={"100%"}>
                <Box display={"flex"} sx={{flexDirection:'row', flexWrap:'wrap'}} width={"100%"}>
                    <Box display={"flex"} flex={'1'} width={"100%"} mr={"10px"} ml={"10px"} justifyContent={"flex-start"}>
                        <Box display={"flex"}  width={"100%"} mr={"10px"}justifyContent={"flex-end"}  sx={{ flexDirection: 'column' }} >
                            <Box display={"flex"}  width={"100%"} mr={"10px"}  className="dextpanel" height={"230px"}>
                               <table border={"0"} width={"100%"}>
                                   <tbody>
                                    <tr height="20%">
                                        <td width={"30px"}></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"20pt"}} className={"dashboard_fore"}>
                                                <span style={{color:"#efb90a"}} >BSC</span> TOOLS
                                            </div>
                                        </td>
                                        <td width={"3px"}></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                <FaLink/> Live New Fairs
                                            </div>
                                        </td>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                <FaWpexplorer/>  Pair Explorer
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                <FaColumns/>  Multiswap
                                            </div>
                                        </td>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px", color:"grey"}} className={"dashboard_fore"}>
                                                <FaAddressCard/>  Wallet Info
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                <FaChartBar/>  Stats
                                            </div>
                                        </td>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                <FaSitemap/>  New Pairs Bot
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                <FaDollarSign/>  Price Bot
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                 </tbody>
                               </table>
                            </Box>
                            <Box display={"flex"}  width={"100%"} mr={"10px"}  className="dextpanel" height={"610px"} justifyContent={"flex-center"}>
                                <table border={"0"} width={"100%"}>
                                    <tbody>
                                    <tr height="30px">
                                        <td width={"30px"}></td>
                                        <td></td>
                                        <td width={"30px"}></td>
                                    </tr>
                                    <tr height="30px">
                                        <td width={"30px"}></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"20pt"}} className={"dashboard_fore"}>
                                                Highest volume tokens
                                            </div>
                                        </td>
                                        <td width={"30px"}></td>
                                    </tr>
                                    <tr height="20px">
                                        <td width={"30px"}></td>
                                        <td  align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                The highest volume tokens in the last 24 hours.
                                            </div>
                                        </td>
                                        <td width={"30px"}></td>
                                    </tr>
                                    <tr height="20px">
                                        <td width={"30px"}></td>
                                        <td align={"left"}>
                                            <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                                Coming Soon...
                                            </div>
                                        </td>
                                        <td width={"30px"}></td>
                                    </tr>
                                    <tr>
                                        <td width={"30px"}></td>
                                        <td></td>
                                        <td width={"30px"}></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                    </Box>
                    {/*  */}
                    <Box display={"flex"} flex={'1'} className="dextpanel" height={"810px"} justifyContent={"flex-center"}>
                        <table border={"0"} width={"100%"}>
                            <tbody>
                            <tr height="20px">
                                <td width={"30px"}></td>
                                <td></td>
                                <td width={"30px"}></td>
                            </tr>
                            <tr height={"30px"}>
                                <td></td>
                                <td align={"left"}>
                                    <div style={{fontSize:"20pt"}} className={"dashboard_fore"}>
                                        <FaFire size={30} />
                                        <span style={{color:"#efb90a"}} >BSC</span> HOT PAIRS
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"30px"}>
                                <td></td>
                                <td align={"left"}>
                                    <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                        These pairs reflect how popular and trending they are among the community. 
                                         <a href="javascript:onReadmore()">Read more<FaChevronDown size={10}/></a>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"74px"}>
                                <td></td>
                                <td align={"left"}>
                                    <div style={{fontSize:"13px"}} className={"dextHotPairNo1"}  style={{borderRadius:"10px", height:"74px", marginTop:"30px"}}>
                                       <table border={"0"} width={"100%"} height={"100%"}>
                                            <tr height={"25%"}></tr>
                                            <tr>
                                                <td width={"10px"}></td>
                                                <td align={"left"} >
                                                    <div className={"dashboard_fore"} style={{width:"35px", height:"23px", display:"inline-block", marginBottom:"10px", backgroundColor:"green", borderRadius:"5px", textAlign:"center"}} >
                                                        #1
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"} color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"17pt"}} className={"dashboard_fore"}>
                                                        BabyDoge
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $0.0...00530
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={22}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            
                                            <tr height={"25%"}></tr>
                                        </table>
                                    </div>
                                </td>
                                <td></td>
                            </tr>

                            <tr height={"74px"}>
                                <td></td>
                                <td align={"left"}>
                                    <div style={{fontSize:"13px"}} className={"dextHotPairNo2"}  style={{borderRadius:"10px", height:"74px", marginTop:"10px"}}>
                                       <table border={"0"} width={"100%"} height={"100%"}>
                                            <tr height={"25%"}></tr>
                                            <tr>
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #2
                                                    </div>
                                                    <FaAngleDoubleDown color="#ffacb1"/>
                                                    <div className={"dashboard_fore"} style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}}>
                                                        ORKL
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"red", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr>
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #3
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height={"25%"}></tr>
                                        </table>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td valign="top">
                                    <table width={"100%"} valign={"top"}>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block",marginTop:"10px", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #4
                                                    </div>
                                                    <FaAngleDoubleDown color="#ffacb1"/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        ORKL
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"red", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #5
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #6
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>

                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #7
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #8
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #9
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #10
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #11
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #12
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #13
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #14
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr height ="41px">
                                                <td width={"10px"}></td>
                                                <td align={"left"}>
                                                    <div style={{width:"35px", height:"23px",fontSize:"14pt", display:"inline-block", marginBottom:"10px", textAlign:"center"}} className={"dashboard_fore"}>
                                                        #15
                                                    </div>
                                                    <FaAngleDoubleUp  color={"#CDFFE6"}/>
                                                    <div style={{display:"inline-block",marginLeft:"10px", fontSize:"14pt"}} className={"dashboard_fore"}>
                                                        DYNA
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px"}}>
                                                        <img src={pancakeSwap} style={{width:"22px", height:"22px", borderRadius:"22px", border:"2px solid white"}}/>
                                                    </div>
                                                    
                                                </td>
                                                <td align={"right"}>
                                                    <div style={{display:"inline-block",marginLeft:"10px", color:"green", fontSize:"15pt"}}>
                                                        $5.1174276
                                                    </div>
                                                    <div style={{display:"inline-block",marginLeft:"10px",marginRight:"10px", color:"#00b8d8", cursor:"pointer"}}>
                                                        <FaWpexplorer size={19}/>
                                                    </div>
                                                </td>
                                                <td width={"10px"}></td>
                                            </tr>
                                            <tr></tr>
                                    </table>
                                </td>
                                <td></td>
                            </tr>
                            <tr></tr>
                            </tbody>
                        </table>
                    </Box>
                    <Box display={"flex"} flex={'1'} className="dextpanel" height={"810px"} justifyContent={"flex-end"}>
                        <table border={"0"} width={"100%"}>
                            <tbody>
                            <tr height="20px">
                                <td width={"30px"}></td>
                                <td></td>
                                <td width={"30px"}></td>
                            </tr>
                            <tr height={"30px"}>
                                <td></td>
                                <td align={"left"}>
                                    <div style={{fontSize:"20pt"}} className={"dashboard_fore"}>
                                        FEATURED SPONSORS
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"30px"}>
                                <td></td>
                                <td align={"left"}>
                                    <div style={{fontSize:"13px"}} className={"dashboard_fore"}>
                                        Chosen by DEXT team, these projects paid an advertising fee for promotion to appear at DEXTboard.
                                         <a href="javascript:onReadmore()">Read more<FaChevronDown size={10}/></a>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"140px"}>
                                <td></td>
                                <td align={"left"} >
                                    <table border={"0px"}>
                                        <tr>
                                            <td valign="top" width={"70px"}>
                                                <div style={{display:"inline-block", marginTop:"10px"}}>
                                                <img src={Oxcapital} width={"50px"} height={"50px"}/>
                                                </div>
                                            </td>
                                            <td valign="top">
                                                <div style={{display:"inline-block", height:"50px", marginLeft:"10px",}}>
                                                    <div>
                                                            <div  style={{display:"inline-block", color:"rgb(216 227 0)", fontSize:"15pt"}}>
                                                                0xcapitalCheck 
                                                            </div>
                                                            <div  style={{marginBottom:"5px", display:"inline-block", width:"100px", height:"25px",background:"rgb(216 227 0)", color:"white", borderRadius:"5px", textAlign:"center", marginLeft:"10px", cursor:"pointer"}}>
                                                                Check Group
                                                            </div>
                                                    </div>
                                                    <div className={"dashboard_fore"}>
                                                            0xcapital
                                                            <FaHome size={22} style={{marginLeft:"10px"}}/><FaTwitter  size={22} style={{marginLeft:"10px"}}/><FaTelegram  size={22} style={{marginLeft:"10px"}}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan={"2"}>
                                                <div className={"dashboard_fore"} style={{color:"#818ea3"}}>
                                                    Participate in private and seed funding round's in new projects with as little as $500.
                                                </div>
                                            </td>
                                        </tr>

                                    </table>
                                    
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"140px"}>
                                <td></td>
                                <td align={"left"} >
                                    <table border={"0px"}>
                                        <tr>
                                            <td valign="top" width={"70px"}>
                                                <div style={{display:"inline-block", marginTop:"10px"}}>
                                                <img src={Oxpad} width={"50px"} height={"50px"}/>
                                                </div>
                                            </td>
                                            <td valign="top">
                                                <div style={{display:"inline-block", height:"50px", marginLeft:"10px",}}>
                                                    <div>
                                                            <div  style={{display:"inline-block", color:"rgb(66, 135, 245)", fontSize:"15pt"}}>
                                                                OxPad 
                                                            </div>
                                                            <div  style={{marginBottom:"5px", display:"inline-block", width:"100px", height:"25px",background:"rgb(66, 135, 245)", color:"white", borderRadius:"5px", textAlign:"center", marginLeft:"10px", cursor:"pointer"}}>
                                                            Live Trading
                                                            </div>
                                                    </div>
                                                    <div className={"dashboard_fore"}>
                                                            0xcapital
                                                            <FaHome size={22} style={{marginLeft:"10px"}}/><FaTwitter  size={22} style={{marginLeft:"10px"}}/><FaTelegram  size={22} style={{marginLeft:"10px"}}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan={"2"}>
                                                <div className={"dashboard_fore"}  style={{color:"#818ea3"}}>
                                                A Multichain launchpad and Decentralized Incubator Protocol. Decentralizing seed funding and giving everyone early access to innovative projects.
                                                </div>
                                            </td>
                                        </tr>

                                    </table>
                                    
                                </td>
                                <td></td>
                            </tr>
                           <tr height={"140px"}>
                                <td></td>
                                <td align={"left"} >
                                    <table border={"0px"}>
                                        <tr>
                                            <td valign="top" width={"70px"}>
                                                <div style={{display:"inline-block", marginTop:"10px"}}>
                                                <img src={Dgmv2} width={"50px"} height={"50px"}/>
                                                </div>
                                            </td>
                                            <td valign="top">
                                                <div style={{display:"inline-block", height:"50px", marginLeft:"10px",}}>
                                                    <div>
                                                            <div  style={{display:"inline-block", color:"rgb(191, 30, 250)", fontSize:"15pt"}}>
                                                                DGMV2
                                                            </div>
                                                            <div  style={{marginBottom:"5px",display:"inline-block", width:"100px", height:"25px",background:"rgb(191, 30, 250)", color:"white", borderRadius:"5px", textAlign:"center", marginLeft:"10px", cursor:"pointer"}}>
                                                            Live Trading
                                                            </div>
                                                    </div>
                                                    <div className={"dashboard_fore"}>
                                                            0xcapital
                                                            <FaHome size={22} style={{marginLeft:"10px"}}/><FaTwitter  size={22} style={{marginLeft:"10px"}}/><FaTelegram  size={22} style={{marginLeft:"10px"}}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan={"2"}>
                                                <div className={"dashboard_fore"}  style={{color:"#818ea3"}}>
                                                Degem offers a suite of premium services including an exchange, launchpad, a staking platform and provides all of the tools needed for building a strong portfolio.
                                                </div>
                                            </td>
                                        </tr>

                                    </table>
                                    
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"140px"}>
                                <td></td>
                                <td align={"left"} >
                                    <table border={"0px"}>
                                        <tr>
                                            <td valign="top" width={"70px"}>
                                                <div style={{display:"inline-block", marginTop:"10px"}}>
                                                    <img src={Arker} width={"50px"} height={"50px"}/>
                                                </div>
                                            </td>
                                            <td valign="top">
                                                <div style={{display:"inline-block", height:"50px", marginLeft:"10px",}}>
                                                    <div>
                                                            <div  style={{display:"inline-block", color:"rgb(0, 217, 90)", fontSize:"15pt"}}>
                                                                ARKER
                                                            </div>
                                                            <div  style={{marginBottom:"5px", display:"inline-block", width:"100px", height:"25px",background:"rgb(0, 217, 90)", color:"white", borderRadius:"5px", textAlign:"center", marginLeft:"10px", cursor:"pointer"}}>
                                                            Live Trading
                                                            </div>
                                                    </div>
                                                    <div className={"dashboard_fore"}>
                                                            0xcapital
                                                            <FaHome size={22} style={{marginLeft:"10px"}}/><FaTwitter  size={22} style={{marginLeft:"10px"}}/><FaTelegram  size={22} style={{marginLeft:"10px"}}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan={"2"}>
                                                <div className={"dashboard_fore"}  style={{color:"#818ea3"}}>
                                                Arker is a online game which will place you in the role of controlling a hero with his pet in order to regain control of the kingdom of Ohm.
                                                </div>
                                            </td>
                                        </tr>

                                    </table>
                                    
                                </td>
                                <td></td>
                            </tr>
                            <tr height={"140px"}>
                                <td></td>
                                <td align={"left"} >
                                    <table border={"0px"}>
                                        <tr>
                                            <td valign="top" width={"70px"}>
                                                <div style={{display:"inline-block", marginTop:"10px"}}>
                                                <img src={Cbk} width={"50px"} height={"50px"}/>
                                                </div>
                                            </td>
                                            <td valign="top">
                                                <div style={{display:"inline-block", height:"50px", marginLeft:"10px",}}>
                                                    <div>
                                                            <div  style={{display:"inline-block", color:"rgb(230, 164, 0)", fontSize:"15pt"}}>
                                                                CBK 
                                                            </div>
                                                            <div  style={{marginBottom:"5px", display:"inline-block", width:"100px", height:"25px",background:"rgb(230, 164, 0)", color:"white", borderRadius:"5px", textAlign:"center", marginLeft:"10px", cursor:"pointer"}}>
                                                            Live Trading
                                                            </div>
                                                    </div>
                                                    <div className={"dashboard_fore"}>
                                                            0xcapital
                                                            <FaHome size={22} style={{marginLeft:"10px"}}/><FaTwitter  size={22} style={{marginLeft:"10px"}}/><FaTelegram  size={22} style={{marginLeft:"10px"}}/>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan={"2"}>
                                                <div className={"dashboard_fore"}  style={{color:"#818ea3"}}>
                                                The process of tokenizing a film's frames and further managing it on a Dapp would open up new opportunities, at the same time it faces subsequent challenges to its adoption.
                                                </div>
                                            </td>
                                        </tr>

                                    </table>
                                    
                                </td>
                                <td></td>
                            </tr>
                            <tr></tr>
                            </tbody>
                        </table>
                    </Box>
                </Box> 
               
            </Box>
        </Box>
    );
}

export default DextBoard