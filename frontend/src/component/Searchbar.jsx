import React, { useState } from 'react';
import employees from '../data/Employee';
import EmployeeCard from './EmployeeCard';
import { IoMdSearch } from "react-icons/io";
import registeredUsers from '../data/RegidteredUser';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const filteredEmployees = registeredUsers.filter(registeredUser =>
      registeredUser.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredEmployees);
  };

  return (
    <div >
    <div className='searchBar divCenter' > 
      <input
        type="search"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search with name"
      />
      <button onClick={handleSearch}><IoMdSearch/></button>
      </div>
      <div>
        {searchResults.length > 0 ? (
          searchResults.map(employee => (
            <EmployeeCard
              key={employee.id}
              id={employee.id}
              name={employee.name}
              dob={employee.dob}
              designation={employee.designation}
            />
          ))
        ) : (
          employees.map(employee => (
            <EmployeeCard
              key={employee.id}
              id={employee.id}
              name={employee.name}
              dob={employee.dob}
              designation={employee.designation}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;
