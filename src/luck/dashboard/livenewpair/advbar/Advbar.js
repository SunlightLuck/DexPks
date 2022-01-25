
import React from 'react';
import './Advbar.css';
import { FaFire } from "@react-icons/all-files/fa/FaFire";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";
import { FaQuestionCircle } from "@react-icons/all-files/fa/FaQuestionCircle";
import { Box } from "@mui/material";
import Dali from "../../../../assets/main/multiswap/download.png"
import Pair from "../pair/Pair";

const Advbar = () => {
    return (
        <Box className="advFrame" style={{ width: "100%" }} display={"flex"} flexDirection={"row"}>
            <Box display={"flex"} justifyContent={"flex-start"} className='dashboard_fore' alignItems={"center"} justifyItems={"center"} padding='0 .5em 0 0' borderRadius='3.125rem 0 0 3.125rem' >
                <font style={{ fontSize: "13px", marginRight: '1em', marginLeft: '1em' }}>BNB: $502.05</font>
                <div style={{ columnGap: '.25rem', display: 'flex', alignItems: 'center' }}>
                    <FaFire size={10} />
                    <font style={{ fontSize: "14px" }}>HOT PAIRS</font>
                    <FaQuestionCircle size={10} />
                </div>
            </Box>
            <Box flex='1' display='flex' alignItems='center' borderRadius='0 3.125rem 3.125rem 0'>
                <marquee hspace="60" style={{margin: 0}}>
                    <Box display={"flex"} style={{ width: "1500px" }} justifyContent={"flex-center"}>
                        <Box display={"flex"} justifyContent={"flex-start"} ml={"20px"}>
                            <Pair PairType={"pancake"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"babyswap"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"biswap"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"coinone"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"empiredex"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"jetswap"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"kyberswap"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"mdex"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"mochiswap"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"padswap"} />
                        </Box>
                        <Box display={"flex"} ml={"20px"}>
                            <Pair PairType={"shibanova"} />
                        </Box>
                    </Box>
                </marquee>
            </Box>
            <Box style={{  zIndex: "0", padding: '.5rem 0 .5rem .5rem' }} className='dashboard_fore'>
                <font  style={{zIndex:'0', display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
                    <img src={Dali} width="23px" height="23px" />DARLI
                </font>
            </Box>
            <Box style={{ backgroundImage: 'radial-gradient(circle at 0px 1.15rem, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 1.5rem, rgb(235, 64, 52) 0px)', borderRadius: '0 3.125rem 3.125rem 0', padding: '.5rem 1rem .5rem 2rem' }}>
                <font color={"white"} style={{ display: 'flex', alignItems: 'center', columnGap: '.25rem' }}>
                    <FaCircle size={10} /> Trading Now
                </font>
            </Box>
        </Box>
    );
}

export default Advbar;