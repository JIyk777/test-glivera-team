import scss from './RightSidebar.module.scss';
import Customers from 'components/Customers/Customers';

const RightSidebar = () => {
  return (
    <div className={scss.box}>
      <div className={scss.titleBox}>
        <h1 className={scss.title}>Hello Evano 👋,</h1>
      </div>
      <Customers></Customers>
    </div>
  );
};

export default RightSidebar;
