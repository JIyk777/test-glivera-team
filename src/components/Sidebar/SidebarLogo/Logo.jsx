import scss from './Logo.module.scss';
import { ReactComponent as LogoImg } from './img/logo.svg';
import { GoThreeBars, GoX } from 'react-icons/go';

const Logo = ({ handleOpen, state }) => {
  return (
    <div className={scss.box}>
      <LogoImg />
      <div className={scss.text}>
        <span className={scss.textMain}>Dashboard</span>
        <span className={scss.textVersion}>v.01</span>
      </div>
      <button className={scss.burgerBtn} type="button" onClick={handleOpen}>
        {state ? (
          <GoX className={scss.burgerBtnIcon} />
        ) : (
          <GoThreeBars className={scss.burgerBtnIcon} />
        )}
      </button>
    </div>
  );
};

export default Logo;
