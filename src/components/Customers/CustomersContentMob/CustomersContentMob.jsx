import scss from './CustomersContentMob.module.scss';
import allCustomers from 'files/allCustomers';

const CustomersContentMob = () => {
  return (
    <ul className={scss.listBox}>
      {allCustomers.map(({ name, work, number, email, country, status }) => {
        return (
          <li className={scss.listItem}>
            <span>{name}</span>
            <span>{work}</span>
            <span>{number}</span>
            <span>{email}</span>
            <span>{country}</span>
            <span>
              {status ? (
                <div className={scss.active}>Active</div>
              ) : (
                <div className={scss.noActive}>Inactive</div>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default CustomersContentMob;
