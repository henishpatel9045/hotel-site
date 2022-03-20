import React from 'react'
import {SidebarContainer, SidebarRoute, Icon, SidebarLink, CloseIcon,SidebarMenu, SideBtnWrap} from "./Sidebar"

function Sidebar({toggle, isOpen}) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon toggle={toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/menu/#pizza">ÜBER UNS</SidebarLink>
        <SidebarLink to="/menu/#deserts">Ansichten</SidebarLink>
        <SidebarLink to="/menu/">Speisekarte</SidebarLink>
        <SidebarLink to="/menu/">Unsere Eisdiele</SidebarLink>
        <SidebarLink to="/menu/">Aktuell</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Kontaktiere Uns</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar