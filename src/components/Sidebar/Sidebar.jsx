import "./sidebar.css";
import {Link} from "react-router-dom"
import {FaTimes} from "react-icons/fa"

export const SidebarContainer = ({children, isOpen}) => <div className="sidebar" style={{right: isOpen ? '0' : '-1000px'}}>{children}</div>

export const SidebarLink = ({children, ...extra}) => <Link {...extra} className="sidebar-link" >{children}</Link>

export const SidebarMenu = ({children}) => <div className="sidebar-menu">{children}</div>

export const SidebarRoute = ({children, ...extra}) => <Link {...extra} className="sidebar-link sidebar-route" >{children}</Link>

export const Icon = ({children}) => <div className="sidebar-icon">{children}</div>

export const CloseIcon = ({toggle}) => <FaTimes className="sidebar-closeIcon" onClick={toggle} />

export const SideBtnWrap = ({children}) => <div className="sidebar-btn">{children}</div>