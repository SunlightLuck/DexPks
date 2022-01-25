import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    
  }


  nav.menu {
    background: ${({ theme }) => theme.navBack};
    box-shadow: 0 0 5px  ${({ theme }) => theme.nav_shadow};
    
  }
  input.searchTerm {
    background: ${({ theme }) => theme.nav_srch_back};
    
  }
  div.block {
    background: ${({ theme }) => theme.block_type_back};
    color: ${({ theme }) => theme.block_type_fore};
    
  }
  div.chevronDown {
    color: ${({ theme }) => theme.block_type_fore};
    
  }


  div.sidebar {
    background-color: ${({ theme }) => theme.sb_back};
    
  }
  div.sidebar-option {
    &:hover {
      background-color: ${({ theme }) => theme.sb_hover};
    }
    
  };

  nav.footer {
    background: ${({ theme }) => theme.footer_back};
    
  }

  div.dashboard_fore{
    color: ${({ theme }) => theme.main_fore};
  }
  font.dashboard_fore{
    color: ${({ theme }) => theme.main_fore};
  }
  div.dextpanel{
    background: ${({ theme }) => theme.main_panel_back};
  }
  div.dextHotPairNo1{
    background-color: ${({ theme }) => theme.dext_hotpair_no1_back}
  }
  div.dextHotPairNo2{
    background: ${({ theme }) => theme.dext_hotpair_no2_back}
  }

  div.statsPanelClose{
    background: ${({ theme }) => theme.stats_panel_close_back}
    color:${({ theme }) => theme.stats_panel_close_fore}
  }

  div.advFrame{
    background: ${({ theme }) => theme.ms_adv_back}
  }
  div.msDali{
    background: ${({ theme }) => theme.ms_adv_darli_back}
  }

  div.pepanel{
    background: ${({ theme }) => theme.main_panel_back};
  }


  div.pePanelInfoBtn{
    background: ${({ theme }) => theme.pePanelInfoBtn_back};
  }
  `
