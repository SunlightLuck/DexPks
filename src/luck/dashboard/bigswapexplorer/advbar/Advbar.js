import './Advbar.css';
import { FaFire } from "@react-icons/all-files/fa/FaFire";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import { FaQuestionCircle } from "@react-icons/all-files/fa/FaQuestionCircle";
import { Box } from "@mui/material";
import  Dali   from "../../../../assets/main/multiswap/download.png"
import  Pair from "../pair/Pair";

const Advbar=() => {
    return (
        <Box className="advFrame" style={{width:"100%"}} display={"flex"} flexDirection={"row"}>
            <Box display={"flex"} justifyContent={"flex-start"} className='dashboard_fore' alignItems={"center"} justifyItems={"center"} ml={"15px"} mr={"15px"}>
                <font style={{fontSize:"13px"}}>BNB: $502.05</font>   <FaFire size={10}/><font style={{fontSize:"14px"}}>HOT PAIRS</font><FaQuestionCircle size={10}/>
            </Box>
            <marquee hspace="60">
                <Box display={"flex"} style={{width:"1500px"}} justifyContent={"flex-center"}>
                    <Box display={"flex"} justifyContent={"flex-start"} ml={"20px"}>
                        <Pair PairType={"pancake"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"babyswap"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"biswap"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"coinone"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"empiredex"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"jetswap"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"kyberswap"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"mdex"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"mochiswap"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"padswap"}/>
                    </Box>
                    <Box display={"flex"}  ml={"20px"}>
                        <Pair PairType={"shibanova"}/>
                    </Box>
                </Box> 
            </marquee>
            <Box  className='msDali' style={{display:"inline-block"}}>
            </Box>
            <Box style={{marginLeft:"-90px",marginTop:"10px", zIndex:"1"}}>
                <font color={"white"} style={{marginTop:"15px"}}>
                    <img src={Dali} width="23px" height="23px"/>DARLING
                </font>
            </Box>
            <Box   className='msTrd' style={{display:"inline-block"}}>
            </Box>
            <Box style={{marginLeft:"-95px",marginTop:"10px", zIndex:"1"}}>
                <font color={"white"} style={{marginTop:"5px", textAlign:"right"}}>
                    <FaCircle size={10}/> Trading Now
                </font>
            </Box>
        </Box>
    );
  }

  export default Advbar;