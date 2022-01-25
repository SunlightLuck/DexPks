import React ,{ useState, useEffect }  from "react";
import { Button} from '@mui/material';
import { Box } from '@mui/material';
import { Drawer } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";
import { func, string } from 'prop-types';
// import { MiniSidebar } from "../sidebar/Sidebar";
import Toggle from "../Toggler";
import SearchBox from "./searchbox/Searchbox";
import BlockType from "./blockchaintype/BlockType";
import OutsideAlerter from '../outsideAlerter';

import svgSetting from "../../assets/navbar/svg-path.png";
import "./Navbar.css";

function NavBar({theme, toggleTheme}) {
  const [shown, setShown] = useState(false);

  const showSidebar = () => {
    setShown(true);
  };

  const drawerClosed = () => {
    setShown(false);
  };

  return (
    <nav
      className="menu"
    >
        <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} alignItems={"center"} color={"white"} ml={"80px"}>
            <OutsideAlerter>
              <BlockType/>
            </OutsideAlerter>
        </Box>
        <Box display={"flex"} flex={"1"} justifyContent={"center"} alignItems={"center"} color={"white"}>
            <SearchBox/>
        </Box>
        <Box display={"flex"} flex={"1"} justifyContent={"flex-end"} alignItems={"center"} mr={"1%"} color={"white"}>
          <Box display={"flex"} mr={"12px"}><Toggle theme={theme} toggleTheme={toggleTheme}></Toggle></Box>
          <Box display={"flex"} mr={"15px"}><img src={svgSetting} width="26px" height="21px" style={{cursor:"pointer"}}/></Box>
          <Box display={"flex"} width="80px" height="28px" style={{cursor:"pointer", backgroundColor:"#00b8d8", lineHeight:"30px", justifyContent:"center",alignItems:"center",color:"white",borderRadius:"30px"}}>
            Connect
          </Box>
          <Button
          className="small-screen-btn"
          type="primary"
          onClick={showSidebar}
          >
            <AlignRightOutlined size="medium" />
          </Button>
          <Drawer
            title="Sidebar Drawer"
            placement="left"
            className="menu-drawer"
            closable={false}
            onClose={drawerClosed}
            visible={shown}
          >
            {/* <MiniSidebar /> */}
          </Drawer>
        </Box>
    </nav>
  );
}
NavBar.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default NavBar;