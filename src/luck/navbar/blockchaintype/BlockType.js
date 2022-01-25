import { useState, useEffect, useLayoutEffect } from 'react';
import { BiChevronDown } from '@react-icons/all-files/bi/BiChevronDown';
import { Box } from '@mui/material';
import './BlockType.css';
import { Divider } from 'antd';

const BlockType=() => {
    const blockTypeArray = [ "binance", "ethereum","polygon", "fantom", "cronos"];
    const [blockSelected, setBlockSelected] = useState("binance");  
    const [dropDownState, setDropDownState] = useState(0);
    const [showBlockTypeArray, setShowBlockTypeArray] = useState(["binance"]);

    useEffect(() => {
      const tmpArr = [...showBlockTypeArray]
      if(dropDownState == 1){
        console.log("Please drop down!");
        for(let i=0; i<5; i++)
          if(blockTypeArray[i] != blockSelected)
            tmpArr.push(blockTypeArray[i]);
          setShowBlockTypeArray(tmpArr); 
      }else{
        for(let j=0; j<5; j++)
          tmpArr.pop();
        tmpArr.push(blockSelected);
        setShowBlockTypeArray(tmpArr); 
      }
    }, [dropDownState, blockSelected]);
    
    const blockClicked = (bt) => {
      setBlockSelected(bt);
      dropDownState==1 ? setDropDownState(0) : setDropDownState(1);
    }

    const outSideClicked = () => {
       setDropDownState(0);
    }
    
    return (
      <div>
        {/* {console.log("renderss", showBlockTypeArray)} */}
        <Box className={"blockFrame"}  >
            {showBlockTypeArray.map((bt, index) => 
              <div className={"block"} key={index} onClick={() => blockClicked(bt)}>
                <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} ml={"5px"} mr={"5px"}>
                  <img src={`/blocktype/${bt}.png`} width="23px" height="23px" style={{borderRadius:"23px"}} />
                </Box>
                <Box display={"flex"} justifyContent={"flex-center"}>
                  {bt.toUpperCase()}
                </Box>
              </div>
            )}
        </Box>
        <Box className={"chevronDown"} onClick={() => blockClicked(blockSelected)} display={"flex"} ml={"105px"}  >
            <BiChevronDown size={20} style={{marginTop:"7px"}}/>
        </Box>
      </div>
    );
  }

  export default BlockType;