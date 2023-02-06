import React from 'react';
import scss from './Sidebar.module.scss';
import Logo from './SidebarLogo/Logo';
import SidebarNav from './SidebarNav/SidebarNav';
import SidebarInfo from './SidebarInfo/SidebarInfo';
import SidebarNavMob from './SidebarNavMob/SidebarNavMob';
import { useState } from 'react';

const MainSidebar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const handleOpen = () => {
    setOpenBurger(!openBurger);
    console.log('hi');
  };

  return (
    <div className={scss.box}>
      <Logo handleOpen={handleOpen} state={openBurger}></Logo>
      <SidebarNav></SidebarNav>
      {openBurger && <SidebarNavMob handleOpen={handleOpen}></SidebarNavMob>}
      <SidebarInfo></SidebarInfo>
    </div>
  );
};

export default MainSidebar;
