import React from 'react'

const EmployeeCard = ({ id, name, dob, designation }) => {
    return (
      <>
      <div className="divCenter">
      <div className="card">
        
        <p>EMP ID: {id}</p>
        <p>Name: {name}</p>
        <p>Date of Birth: <span className="orange-p">{dob}</span></p>
        <p>Role:<span className="green-p">{designation}</span> </p>
      </div>
      </div>
      </>
    );
  };

export default EmployeeCard