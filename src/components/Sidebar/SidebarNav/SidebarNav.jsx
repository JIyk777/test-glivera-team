import { ReactComponent as DashboardImg } from './img/dashboadrd-icon.svg';
import { ReactComponent as CustomersImg } from './img/customers-icon.svg';
import { ReactComponent as HelpImg } from './img/help-icon.svg';
import { ReactComponent as IncomeImg } from './img/income-icon.svg';
import { ReactComponent as ProductImg } from './img/product-icon.svg';
import { ReactComponent as PromoteImg } from './img/promote-icon.svg';
import { ReactComponent as ChevronImg } from './img/chevron-right.svg';
import scss from './SidebarNav.module.scss';
const SidebarNav = () => {
  return (
    <ul className={scss.box}>
      <li className={scss.item}>
        <a className={scss.link} href="/">
          <div className={scss.linkBox}>
            <DashboardImg />
            <span className={scss.linkText}>Dashboard</span>
          </div>
        </a>
      </li>
      <li className={scss.item}>
        <a className={scss.link} href="/">
          <div className={scss.linkBox}>
            <ProductImg />
            <span className={scss.linkText}>Product</span>
          </div>

          <ChevronImg className={scss.linkChevron} />
        </a>
      </li>
      <li className={scss.item}>
        <a className={scss.link} href="/">
          <div className={scss.linkBox}>
            <CustomersImg />
            <span className={scss.linkText}>Customers</span>
          </div>

          <ChevronImg className={scss.linkChevron} />
        </a>
      </li>
      <li className={scss.item}>
        <a className={scss.link} href="/">
          <div className={scss.linkBox}>
            <IncomeImg />
            <span className={scss.linkText}>Income</span>
          </div>

          <ChevronImg className={scss.linkChevron} />
        </a>
      </li>
      <li className={scss.item}>
        <a className={scss.link} href="/">
          <div className={scss.linkBox}>
            <PromoteImg />
            <span className={scss.linkText}>Promote</span>
          </div>

          <ChevronImg className={scss.linkChevron} />
        </a>
      </li>
      <li className={scss.item}>
        <a className={scss.link} href="/">
          <div className={scss.linkBox}>
            <HelpImg />
            <span className={scss.linkText}>Help</span>
          </div>

          <ChevronImg className={scss.linkChevron} />
        </a>
      </li>
    </ul>
  );
};

export default SidebarNav;
