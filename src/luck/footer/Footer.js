import React ,{ useState, useEffect }  from "react";
import { Box } from '@mui/material';
import "./Footer.css";
import {
  FaTwitter,
  FaTelegram,
  FaMedium,
  FaDiscord,
  FaYoutube
}  from 'react-icons/fa';

function Footer({theme, toggleTheme}) {
  return (
    <nav
      className="footer"
    >
        <Box display={"flex"} flex={"1"} justifyContent={"flex-start"} alignItems={"center"} color={"#cacedb"} ml={"80px"}>
          <a target="_blank" href="https://twitter.com/DEXToolsApp">
            <FaTwitter  className={"footerIcons"} style={{marginLeft:"25px"}} color={"#cacedb"} size={22} />
          </a>
          <a target="_blank" href="https://t.me/DEXToolsCommunity">
            <FaTelegram className={"footerIcons"} style={{marginLeft:"25px"}} color={"#cacedb"} size={20} />
          </a>
          <a target="_blank" rel="noreferrer noopener" href="https://dextools.medium.com">
            <FaMedium  className={"footerIcons"} style={{marginLeft:"25px"}} color={"#cacedb"} size={20} />
          </a>
          <a target="_blank" href="https://discord.gg/PnycaVp">
            <FaDiscord  className={"footerIcons"} style={{marginLeft:"25px"}} color={"#cacedb"} size={22} />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw">
            <FaYoutube  className={"footerIcons"} style={{marginLeft:"25px"}} color={"#cacedb"} size={22} />
          </a>
        </Box>
        <Box display={"flex"} flex={"1"} justifyContent={"flex-end"} alignItems={"center"} color={"#cacedb"}>
          <Box display={"flex"} sx={{ flexDirection: 'column' }} mt={"7px"}>
            <Box display={"flex"} flex={"1"} justifyContent={"flex-end"}> 
              <Box display={"flex"} sx={{ flexDirection: 'row' }} justifyContent={"flex-end"}>
                <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw"> 
                  <Box display={"flex"} mr={"10px"}>
                    Legal Advice
                  </Box>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw"> 
                  <Box display={"flex"} mr={"10px"}>
                    About us
                  </Box>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw"> 
                  <Box display={"flex"} mr={"10px"}>
                    Manifesto
                  </Box>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw"> 
                  <Box display={"flex"} mr={"10px"}>
                    DEXT Token
                  </Box>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw"> 
                  <Box display={"flex"} mr={"10px"}>
                    Team
                  </Box>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCgeyglU17CAkGldegudnoMw"> 
                  <Box display={"flex"} mr={"10px"}>
                    Contact
                  </Box>
                </a>
              </Box>
            </Box>
            <Box display={"flex"} flex={"1"} color={"#818ea3"} mt={"7px"}> 
              <span _ngcontent-qxj-c46="" className="copyright"> © DEXTools.io 2021 - <a _ngcontent-qxj-c46="" href="#">2.0.6</a> - <a _ngcontent-qxj-c46="" href="mailto:info@dextools.io">info@dextools.io</a> | Ads &amp; Marketing: <a _ngcontent-qxj-c46="" href="mailto:marketing@dextools.io">marketing@dextools.io</a></span>
            </Box>
          </Box>
        </Box>
    </nav>
  );
}
export default Footer;