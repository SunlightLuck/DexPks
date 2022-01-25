import { useState, useEffect, useLayoutEffect } from 'react';
import { BiChevronDown } from '@react-icons/all-files/bi/BiChevronDown';
import { Box } from '@mui/material';
import './Exchange.css';
import { Divider } from 'antd';

const Exchange=({exchangeType}) => {
    const ExchangeArray = [ "binance", "ethereum","polygon", "fantom", "cronos"];
    const [exchangeSelected, setexchangeSelected] = useState("binance");  
    const [dropDownState, setDropDownState] = useState(0);
    const [showExchangeArray, setShowExchangeArray] = useState(["binance"]);

    useEffect(() => {
    
    }, [dropDownState, exchangeSelected]);
    
    const exchangeClicked = () => {
    
    }

    const outSideClicked = () => {
       setDropDownState(0);
    }
    
    return (
      <div>
        {/* {console.log("renderss", showExchangeArray)} */}
        {/* <Box className={"exchangeFrame"}  > */}
            
              <div className={"block"} style={{borderRadius:"36px", width:"auto", paddingRight:"10px"}}  onClick={() => exchangeClicked()}>
                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} ml={"5px"} mr={"5px"}>
                  <img src={`/exchange/${exchangeType}.png`} width="23px" height="23px" style={{borderRadius:"23px"}} />
                </Box>
                <Box display={"flex"} justifyContent={"flex-center"}>
                  {exchangeType.toUpperCase()}
                </Box>
              </div>
            
        {/* </Box> */}
        {/* <Box className={"chevronDown"} onClick={() => exchangeClicked(exchangeSelected)} display={"flex"} ml={"105px"}  >
            <BiChevronDown size={20} style={{marginTop:"7px"}}/>
        </Box> */}
      </div>
    );
  }

  export default Exchange;