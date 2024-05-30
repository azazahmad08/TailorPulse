import { useState, useEffect } from 'react';
import employeeData from "../JSON/employeeData.json";

const EmployeeInfo = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(employeeData.map(employee => ({ ...employee, selected: false })));
  }, []);

  const handleCheckboxChange = (employeeId) => {
    setEmployees(employees.map(employee =>
      employee.id === employeeId ? { ...employee, selected: !employee.selected } : employee
    ));
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Employee Information</h2>
      <table className="border-collapse w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="border p-2">EID</th>
            <th className="border p-2">Full Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Present Address</th>
            <th className="border p-2">Permanent Address</th>
            <th className="border p-2">District</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Bank Name</th>
            <th className="border p-2">Bank Account Number</th>
            <th className="border p-2">Rocket Number</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="bg-white ">
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={employee.selected}
                  onChange={() => handleCheckboxChange(employee.id)}
                />
                <span className="ml-2 ">{index + 1}</span>
              </td>
              <td className="border p-2">{employee.fullName}</td>
              <td className="border p-2">{employee.emailAddress}</td>
              <td className="border p-2">{employee.phoneNumber}</td>
              <td className="border p-2">{employee.ban_PrsThana}</td>
              <td className="border p-2">{employee.prmHouse_Village}</td>
              <td className="border p-2">{employee.prsDistrict}</td>
              <td className="border p-2 text-green-500 ">{employee.status}</td>
              <td className="border p-2">{employee.bankName}</td>
              <td className="border p-2">{employee.bankAcNumber}</td>
              <td className="border p-2">{employee.rocketNumber}</td>
              <td className="border p-2 flex justify-center items-center m-auto  ">
                <button className="mr-2  ">
                  <img src="visible.png" alt="View" className="w-5 h-5" />
                </button>
                <button className="mr-2">
                  <img src="update.png" alt="Update" className="w-5 h-5" />
                </button>
                <button>
                  <img src="trash.png" alt="Delete" className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeInfo;
