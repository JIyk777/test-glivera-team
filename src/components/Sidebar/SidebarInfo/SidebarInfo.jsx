import photo from './img/photo.png';
import scss from './SidebarInfo.module.scss';
const SidebarInfo = () => {
  return (
    <div className={scss.box}>
      <img src={photo} alt="Evano" width="42" height="42" />
      <div className={scss.textBox}>
        <span className={scss.name}>Evano</span>
        <span className={scss.profession}>Project Manager</span>
      </div>
    </div>
  );
};

export default SidebarInfo;
