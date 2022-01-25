import { Box } from '@mui/material';
import './Pair.css';

const Pair=({PairType}) => {
    
    return (
      <div>
        <div className={"pair"} style={{borderRadius:"36px", width:"auto", paddingRight:"10px"}}>
          <Box display={"flex"} justifyContent={"flex-center"}>
            <font className={"dashboard_fore"}>{PairType.toUpperCase()}</font>
          </Box>
          <Box display={"flex"} justifyContent={"flex-start"} alignItems={"center"} ml={"5px"} mr={"5px"}>
            <img src={`/exchange/pancake.png`} width="23px" height="23px" style={{borderRadius:"23px"}} />
          </Box>
        </div>
      </div>
    );
  }

  export default Pair;