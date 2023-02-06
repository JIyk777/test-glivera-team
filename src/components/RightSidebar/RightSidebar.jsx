import scss from './RightSidebar.module.scss';

import { Outlet } from 'react-router-dom';

const RightSidebar = ({ children }) => {
  return (
    <div className={scss.box}>
      <div className={scss.titleBox}>
        <h1 className={scss.title}>Hello Evano 👋,</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default RightSidebar;
