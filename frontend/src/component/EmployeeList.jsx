import React from 'react';
import EmployeeCard from './EmployeeCard';
import registeredUsers from '../data/RegidteredUser';

const EmployeeList = () => {
  return (
    <div className="employee-list divCenter">
      {registeredUsers.map(registeredUser => (
        <EmployeeCard
          key={registeredUser.id}
          id={registeredUser.id}
          name={registeredUser.name}
          dob={registeredUser.dob}
          designation={registeredUser.designation}
        />
      ))}
    </div>
  );
};

export default EmployeeList
