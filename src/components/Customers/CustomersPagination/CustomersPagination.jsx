import scss from './CustomersPagination.module.scss';
import { ReactComponent as BtnIcon } from './img/btn-icon.svg';
import { ReactComponent as BtnIconN } from './img/btn-icon-n.svg';

const CustomersPagination = () => {
  return (
    <div className={scss.paginationBox}>
      <span className={scss.paginationBoxText}>
        Showing data 1 to 8 of 256K entries
      </span>
      <div className={scss.pagination}>
        <button className={scss.paginationBtn} type="button">
          <BtnIcon />
        </button>
        <button className={scss.paginationBtn} type="button">
          1
        </button>
        <button className={scss.paginationBtn} type="button">
          2
        </button>
        <button className={scss.paginationBtn} type="button">
          3
        </button>
        <button className={scss.paginationBtn} type="button">
          4
        </button>
        <p>...</p>
        <button className={scss.paginationBtn} type="button">
          40
        </button>
        <button className={scss.paginationBtn} type="button">
          <BtnIconN />
        </button>
      </div>
    </div>
  );
};
export default CustomersPagination;
