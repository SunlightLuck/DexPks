import React, { useState } from "react";
import {
  FaHome,
  FaLink,
  FaWpexplorer,
  FaShip,
  FaColumns,
  FaChartBar,
  FaSitemap,
  FaDollarSign
}  from 'react-icons/fa';
import { Box } from '@mui/material';
import dextLogo from "../../assets/sidebar/dextools_logo.png";
import "./Sidebar.css";

export default function Sidebar({ maChanged }) {
  const [isHover, setHover] = useState(false);
  const [itmHover, setItmHover] = useState("");
  const [itmSelected, setItmSelected] = useState("");
  
  const onClickItem = (itm) => {
    setItmSelected(itm);
    if(itm==="newpairsbot"){
      window.open("https://t.me/DEXTNewPairsBotBSC");
      return;
    }
    if(itm==="pricebot"){
      window.open("https://t.me/DexTools_Pricebot");
      return;
    }
    maChanged(itm);
  };

  return (
    <Box display={"flex"} sx={{ flexDirection: 'column' }} className="sidebar" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <Box mb={"20px"} mt={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <img
          src={dextLogo}
          width= "40px"
          height= "40px"
          style={{cursor:"pointer"}}
          href= "/"
        />
        {isHover && <h2 style={{fontSize:"1rem", color:"white", marginTop:"7px"}}>DEXTools</h2>}
      </Box> 
      <Box style={{textAlign:"left"}} ml={"8px"}>
          DEXTOOLS
      </Box>
      {/* itmSelected==="Home"?"sidebar-option:active": */}
      <Box className={"sidebar-option"} onClick={()=>onClickItem('dextboard')}>
        <FaHome  style={{marginLeft:"25px",marginRight:"10px"}} color={"#818ea3"} size={22} />
        {isHover && <h2>DEXTboard</h2>}

      </Box>
      <Box style={{textAlign:"left"}} ml={"16px"}>
          TOOLS
      </Box>
      <Box className="sidebar-option"  onClick={()=>onClickItem('livenewpairs')}>
        <FaLink  style={{marginLeft:"25px",marginRight:"10px"}} color="#818ea3" size={22} />
        {isHover && <h2>Live New Pairs</h2>}
      </Box>
      <Box className="sidebar-option" onClick={()=>onClickItem('pairexplorer')}>
        <FaWpexplorer  style={{marginLeft:"25px",marginRight:"10px"}} color="#818ea3" size={22} />
        {isHover && <h2>Pair Explorer</h2>}
      </Box>
      <Box className="sidebar-option" onClick={()=>onClickItem('bigswapexplorer')}>
        <FaShip  style={{marginLeft:"25px",marginRight:"10px"}} color="#818ea3" size={22} />
        {isHover && <h2>Big Swap Explorer</h2>}
      </Box>
      <Box className="sidebar-option" onClick={()=>onClickItem('multiswap')}>
        <FaColumns  style={{marginLeft:"25px",marginRight:"10px"}} color="#818ea3" size={22} />
        {isHover && <h2>Multiswap</h2>}
      </Box>
      <Box className="sidebar-option" onClick={()=>onClickItem('stats')}>
        <FaChartBar  style={{marginLeft:"25px",marginRight:"10px"}} color="#818ea3" size={22} />
        {isHover && <h2>Stats</h2>}
      </Box>
      <Box className="sidebar-option" onClick={()=>onClickItem('newpairsbot')}>
        <FaSitemap  style={{marginLeft:"25px",marginRight:"10px"}} color="#818ea3" size={22} />
        {isHover && <h2>New Pairs Bot</h2>}
      </Box>
      <Box className="sidebar-option" onClick={()=>onClickItem('pricebot')}>
        <FaDollarSign style={{marginLeft:"25px",marginRight:"10px"}}  color="#818ea3" size={22} />
        {isHover && <h2>Price Bot</h2>}
      </Box>
    </Box>
  );
}



export  function ExpandedSidebar() {
  // alert('');
  return (
    <Box display={"flex"} sx={{ flexDirection: 'column' }} className="sidebar">
      <Box mb={"20px"} mt={"10px"}>
        <img
          src={dextLogo}
          width= "40px"
          height= "40px"
          style={{cursor:"pointer"}}
          href= "/"
        />
        <h2>-DEXTools</h2>
      </Box> 
      <Box>
          DEXTOOLS
      </Box>
      <Box className="sidebar-option">
        <FaHome color="#818ea3" size={22} />
        <h2>DEXTboard</h2>
      </Box>
      <Box>
          TOOLS
      </Box>
      <Box className="sidebar-option">
        <FaLink color="#818ea3" size={22} />
        <h2>Live New Pairs</h2>
      </Box>
      <Box className="sidebar-option">
        <FaWpexplorer color="#818ea3" size={22} />
        <h2>Pair Explorer</h2>
      </Box>
      <Box className="sidebar-option">
        <FaShip color="#818ea3" size={22} />
        <h2>Big Swap Explorer</h2>
      </Box>
      <Box className="sidebar-option">
        <FaColumns color="#818ea3" size={22} />
        <h2>Multiswap</h2>
      </Box>
      <Box className="sidebar-option">
        <FaChartBar color="#818ea3" size={22} />
        <h2>Stats</h2>
      </Box>
      <Box className="sidebar-option">
        <FaSitemap color="#818ea3" size={22} />
        <h2>New Pairs Bot</h2>
      </Box>
      <Box className="sidebar-option">
        <FaDollarSign color="#818ea3" size={22} />
        <h2>Price Bot</h2>
      </Box>
    </Box>
    
     
  );
}