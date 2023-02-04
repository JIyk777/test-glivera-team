import React from 'react';
import scss from './MainSidebar.module.scss';
import Logo from './Logo/Logo';

const MainSidebar = () => {
  return (
    <div className={scss.box}>
      <Logo></Logo>
    </div>
  );
};

export default MainSidebar;
