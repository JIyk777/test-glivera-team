import scss from './Logo.module.scss';
import { ReactComponent as LogoImg } from './img/logo.svg';

const Logo = () => {
  return (
    <div className={scss.box}>
      <LogoImg />
      <div className={scss.text}>
        <span className={scss.textMain}>Dashboard</span>
        <span className={scss.textVersion}>v.01</span>
      </div>
    </div>
  );
};

export default Logo;
