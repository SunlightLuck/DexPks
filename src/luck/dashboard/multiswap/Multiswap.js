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
  import {CgClose} from 'react-icons/cg';
import Pair from "./pair/Pair";
import Searchbox from './searchbox/Searchbox';
import Advbar from "./advbar/Advbar";
import pancakeSwap from "../../../assets/main/dextboard/pancakeswap.png";
import './Multiswap.css';


function Multiswap(){
 
    return (
        <Box display="flex" flexDirection="column"  padding={1} width={"100%"}>
            <Box display={"flex"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Advbar/>
            </Box>
            
            <Box display={"flex"} flex={"1"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Box display={"flex"}  flex={"1"} justifyContent={"flex-start"} sx={{ flexDirection: 'row' }}>
                    <Box display={"flex"}   sx={{ flexDirection: 'column' }} justifyContent={"flex-start"} ml={"20px"}>
                        <Box display={"flex"} className="dashboard_fore" alignItems={"left"} justifyContent={"flex-start"} style={{fontSize:"23pt"}}  >
                            Multiswap
                        </Box>
                        <Box display={"flex"} className="dashboard_fore" >
                            Search and add as many pairs as you want in this view to trade it at once.
                            Please accept the conditions of the Pair each time you add a pair to work properly.
                        </Box>
                    </Box>
                </Box>
                
            </Box>
            <Box display={"flex"} flex={"1"} width={"100%"} mt={"10px"} mb={"15px"}>
                <Box display={"flex"}  flex={"1"} justifyContent={"flex-start"} sx={{ flexDirection: 'row' }}>
                    <Box display={"flex"} justifyContent={"flex-end"} ml={"20px"}>
                        <Searchbox/>
                    </Box>
                </Box>
                
            </Box>
            <Box display={"flex"} flex={"1"} width={"100%"}>
                {/* <Box display={"flex"} sx={{flexDirection:'row'}} width={"100%"}>
                    <Box display={"flex"} flex={'1'} width={"100%"} mr={"10px"} ml={"10px"} justifyContent={"flex-start"}>
                        <Box display={"flex"}  width={"100%"} mr={"10px"}justifyContent={"flex-end"}  sx={{ flexDirection: 'column' }} >
                            
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
                                            <div style={{fontSize:"20pt", display:"inline-block"}} className={"dashboard_fore"}>
                                                HOT KYBERSWAP <FaFire size={20}/>
                                            </div>
                                            <div className="MultiswapPanelClose" style={{display:"inline-block", marginLeft:"310px"}}>
                                                <CgClose size={"20"}/>
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
                                            There are no hot pairs for the Pair at this moment. They will eventually appear once users visit pairs from this Pair.  
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
                                    <div style={{display:"inline-block", fontSize:"20pt"}} className={"dashboard_fore"}>
                                        
                                        <span style={{color:"#efb90a"}} >BSC</span> HOT PAIRS
                                        <FaFire size={20} />
                                    </div>
                                    <div className="MultiswapPanelClose" style={{display:"inline-block", marginLeft:"350px"}}>
                                                <CgClose size={"20"}/>
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
                                    <div style={{display:"inline-block", fontSize:"20pt"}} className={"dashboard_fore"}>
                                        HOT BAKERYSWAP
                                        <FaFire size={20} />
                                    </div>
                                    <div className="MultiswapPanelClose" style={{display:"inline-block", marginLeft:"310px"}}>
                                        <CgClose size={"20"}/>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                            <tr></tr>
                            </tbody>
                        </table>
                    </Box>
                </Box>  */}
               
            </Box>
        </Box>
    );
}

export default Multiswap