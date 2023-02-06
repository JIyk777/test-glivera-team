import scss from './Customers.module.scss';

import CustomersPagination from './CustomersPagination/CustomersPagination';
import CustomersTitle from './CustomersTitle/CustomersTitle';
import CustomersTable from './CustomersTable/CustomersTable';

const Customers = () => {
    return <div className={scss.box}>
        <CustomersTitle></CustomersTitle>
        <CustomersTable></CustomersTable>
        <CustomersPagination></CustomersPagination>
  </div>;
};

export default Customers;
