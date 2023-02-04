import React from 'react';
import scss from './Sidebar.module.scss';
import Logo from './SidebarLogo/Logo';
import SidebarNav from './SidebarNav/SidebarNav';
import SidebarInfo from './SidebarInfo/SidebarInfo';

const MainSidebar = () => {
  return (
    <div className={scss.box}>
      <Logo></Logo>
      <SidebarNav></SidebarNav>
      <SidebarInfo></SidebarInfo>
    </div>
  );
};

export default MainSidebar;
