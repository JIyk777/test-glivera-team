import Sidebar from './Sidebar/Sidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import scss from './App.module.scss';
export const App = () => {
  return (
    <div className={scss.container}>
      <Sidebar></Sidebar>
      <RightSidebar></RightSidebar>
    </div>
  );
};
