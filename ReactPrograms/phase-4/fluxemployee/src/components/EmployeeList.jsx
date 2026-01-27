import { useEffect, useState } from "react";
import employeeStore from "../stores/EmployeeStore";
import addEmployee from "../actions/EmployeeActions";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees([...employeeStore.getAllEmployees()]);
  }, []);

  return (
    <div>
      <h2>Employee List</h2>

      <button onClick={() => {
        addEmployee("Niti");
        setEmployees([...employeeStore.getAllEmployees()]);
      }}>
        Add Employee
      </button>

      {employees.map((emp, index) => (
        <p key={index}>{emp}</p>
      ))}
    </div>
  );
}

export default EmployeeList;