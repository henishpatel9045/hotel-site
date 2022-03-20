import React from 'react'
import {SidebarContainer, SidebarRoute, Icon, SidebarLink, CloseIcon,SidebarMenu, SideBtnWrap} from "./Sidebar"

function Sidebar({toggle, isOpen}) {
  return (
      <SidebarContainer isOpen={isOpen}>
          <Icon>
              <CloseIcon toggle={toggle}/>
          </Icon>
          <SidebarMenu>
              <SidebarLink to='/menu/#pizza' >Pizza</SidebarLink>
              <SidebarLink to='/menu/#deserts' >Deserts</SidebarLink>
              <SidebarLink to='/menu/' >Full Menu</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to='/'>Order Now</SidebarRoute>
          </SideBtnWrap>
      </SidebarContainer>
  )
}

export default Sidebar