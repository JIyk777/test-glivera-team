import MainSidebar from './MainSidebar/MainSidebar';
import scss from './App.module.scss';
export const App = () => {
  return (
    <div className={scss.container}>
      <MainSidebar></MainSidebar>
    </div>
  );
};
