import scss from './CustomersTitle.module.scss';
import { ReactComponent as Search } from './img/search.svg';
import { NavLink } from 'react-router-dom';

const CustomersTitle = () => {
  return (
    <div className={scss.titleSearchBox}>
      <div className={scss.titleBox}>
        <h2 className={scss.title}>All Customers</h2>
        <NavLink className={scss.titleLink} to="/customers">
          Active Members
        </NavLink>
      </div>

      <label className={scss.label}>
        <Search className={scss.searchIcon} />
        <input className={scss.input} type="text" placeholder="Search" />
      </label>
    </div>
  );
};
export default CustomersTitle;
