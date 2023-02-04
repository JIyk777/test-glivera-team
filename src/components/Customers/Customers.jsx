import scss from './Customers.module.scss';
import { ReactComponent as Search } from './img/search.svg';

const Customers = () => {
  return (
    <div className={scss.box}>
      <div className={scss.titleSearchBox}>
        <div className={scss.titleBox}>
          <h2>All Customers</h2>
          <a className={scss.titleLink} href="/">
            Active Members
          </a>
        </div>

        <label className={scss.label}>
          <Search className={scss.searchIcon} />
          <input className={scss.input} type="text" placeholder="Search" />
        </label>
      </div>
      <table>
        <thead>
          <tr className={scss.head}>
            <th className={`${scss.headName}  ${scss.thStyle}`}>
              Customer Name
            </th>
            <th className={`${scss.headCompany}  ${scss.thStyle}`}>Company</th>
            <th className={`${scss.headNumber}  ${scss.thStyle}`}>
              Phone Number
            </th>
            <th className={`${scss.headEmail}  ${scss.thStyle}`}>Email</th>
            <th className={`${scss.headCountry}  ${scss.thStyle}`}>Country</th>
            <th className={`${scss.headStatus}  ${scss.thStyle}`}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${scss.bodyName}  ${scss.tdStyle}`}>Jane Cooper</td>
            <td className={`${scss.bodyCompany}  ${scss.tdStyle}`}>
              Microsoft
            </td>
            <td className={`${scss.bodyNumber}  ${scss.tdStyle}`}>
              (225) 555-0118
            </td>
            <td className={`${scss.bodyEmail}  ${scss.tdStyle}`}>
              jane@microsoft.com
            </td>
            <td className={`${scss.bodyCountry}  ${scss.tdStyle}`}>
              United States
            </td>
            <td className={`${scss.bodyStatus}  ${scss.tdStyle}`}>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
