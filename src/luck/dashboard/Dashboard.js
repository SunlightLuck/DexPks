import React from "react"
import {Box} from "@mui/material";
import DextBoard from "./dextboard/Dextboard";
import Stats from "./stats/Stats";
import Multiswap from "./multiswap/Multiswap";
import Livenewpair from "./livenewpair/Livenewpair";
import Bigswapexplorer from "./bigswapexplorer/Bigswapexplorer";
import Pairexplorer from "./pairexplorer/Pairexplorer";
import './Dashboard.css';

function DashBoard({pageMode}){
    switch(pageMode){
        case 'dextboard':
            return (
                <Box className="dashboard">
                     <DextBoard/>
                </Box>)
        case 'stats':
            return (
                <Box className="dashboard">
                     <Stats/>
                </Box>)
        case 'multiswap':
            return (
                <Box className="dashboard">
                     <Multiswap/>
                </Box>)
        case 'livenewpairs':
            return (
                <Box className="dashboard">
                     <Livenewpair/>
                </Box>)
        case 'bigswapexplorer':
            return (
                <Box className="dashboard">
                     <Bigswapexplorer/>
                </Box>)
         case 'pairexplorer':
            return (
                <Box className="dashboard">
                     <Pairexplorer/>
                </Box>)
        default:
            return (
                <Box className="dashboard">
                     <DextBoard/>
                </Box>)
    }
}

export default DashBoard