import scss from './Customers.module.scss';

import CustomersPagination from './CustomersPagination/CustomersPagination';
import CustomersTitle from './CustomersTitle/CustomersTitle';
import CustomersTable from './CustomersTable/CustomersTable';
import CustomersContentMob from './CustomersContentMob/CustomersContentMob';

const Customers = () => {
  return (
    <div className={scss.box}>
      <CustomersTitle></CustomersTitle>
      <CustomersTable></CustomersTable>
      <CustomersPagination></CustomersPagination>
      <CustomersContentMob></CustomersContentMob>
    </div>
  );
};

export default Customers;
