import scss from './CustomersTable.module.scss';
import allCustomers from 'files/allCustomers';

const CustomersTable = () => {
  return (
    <table>
      <thead>
        <tr className={scss.head}>
          <th className={`${scss.headName}  ${scss.thStyle}`}>Customer Name</th>
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
        {allCustomers.map(
          ({ name, email, status, work, number, country, id }) => {
            return (
              <tr className={scss.trBody} key={id}>
                <td className={`${scss.bodyName}  ${scss.tdStyle}`}>{name}</td>
                <td className={`${scss.bodyCompany}  ${scss.tdStyle}`}>
                  {work}
                </td>
                <td className={`${scss.bodyNumber}  ${scss.tdStyle}`}>
                  {number}
                </td>
                <td className={`${scss.bodyEmail}  ${scss.tdStyle}`}>
                  {email}
                </td>
                <td className={`${scss.bodyCountry}  ${scss.tdStyle}`}>
                  {country}
                </td>
                <td className={`${scss.bodyStatus}  ${scss.tdStyle}`}>
                  {status ? (
                    <div className={scss.active}>Active</div>
                  ) : (
                    <div className={scss.noActive}>Inactive</div>
                  )}
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default CustomersTable;
