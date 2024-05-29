import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false);
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [isEmployeeInfoOpen , setIsEmployeeInfoOpen ] = useState(false);

  const toggleOrderDropdown = () => {
    setIsOrderDropdownOpen(!isOrderDropdownOpen);
  };

  const toggleCustomerDropdown = () => {
    setIsCustomerDropdownOpen(!isCustomerDropdownOpen);
  };
  const toggleEmployeeDropdown = () => {
    setIsEmployeeInfoOpen(!isEmployeeInfoOpen);
  };

  return (
    <div>
      <aside className="flex flex-col w-64 min-h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6">
            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">ORDER</label>
              <div className="relative">
                <button
                  onClick={toggleOrderDropdown}
                  className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v7.125M15.375 7.875L12 4.5m-3.375 3.375L12 4.5m0 7.125v7.125"
                    />
                  </svg>
                  <span className="mx-2 text-sm font-medium">ORDER</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 ml-auto transition-transform duration-300 ${
                      isOrderDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15l3.375-3.375L15 15"
                    />
                  </svg>
                </button>
                {isOrderDropdownOpen && (
                  <div className="mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <Link
                      to="/neworder"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      New Order
                    </Link>
                    <Link
                      to="/order"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Order Details
                    </Link>
                    <Link
                      to="/orderreport"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Order Report
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/production" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
                <span className="mx-2 text-sm font-medium">Production</span>
              </Link>
            </div>

            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Main pages</label>
              <div className="relative">
                <button
                  onClick={toggleEmployeeDropdown}
                  className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v7.125M15.375 7.875L12 4.5m-3.375 3.375L12 4.5m0 7.125v7.125"
                    />
                  </svg>
                  <span className="mx-2 text-sm font-medium">Employee</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 ml-auto transition-transform duration-300 ${
                      isOrderDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15l3.375-3.375L15 15"
                    />
                  </svg>
                </button>
                {isEmployeeInfoOpen && (
                  <div className="mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <Link
                      to="employeeinfo"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Employee Info
                    </Link>
                    <Link
                      to="addemployee"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Add Employee Info
                    </Link>
                    <Link
                      to="/orderreport"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Order Report
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/product" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>
                <span className="mx-2 text-sm font-medium">Product</span>
              </Link>
              <Link to="/supplier" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-7.475 8.164H9a2.25 2.25 0 002.25 2.25h.585m3.165 1.5h.002M6.75 21h.003m8.497-8.497v.002m0-7.005v.003M12 3.75h.005M7.5 12h1.5m0 3h-1.5m0 3h1.5M12 3.75h-.005m.005 14.252v1.498M15 21h1.5m-3 0h1.5m3-12h-1.5m0-3h1.5m0 0v1.5m3.75 5.25h1.5M6.75 21h-1.5m0-3h1.5m-3-3h1.5m-1.5 0v1.5m0-7.5h1.5m0-3h-1.5m0 0v1.5m0 7.5H5.25M15 18.75h1.5m0-3H15m-1.5 0h1.5m-1.5 0v-1.5m0 1.5H12M5.25 3.75h1.5m0-3h-1.5m0 0v1.5M3 6.75h.008v.008H3V6.75z" />
                </svg>
                <span className="mx-2 text-sm font-medium">Supplier</span>
              </Link>
            </div>

            <div className="space-y-3">
              <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">USER</label>
              <div className="relative">
                <button
                  onClick={toggleCustomerDropdown}
                  className="flex items-center w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v7.125M15.375 7.875L12 4.5m-3.375 3.375L12 4.5m0 7.125v7.125"
                    />
                  </svg>
                  <span className="mx-2 text-sm font-medium">Customer</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 ml-auto transition-transform duration-300 ${
                      isCustomerDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15l3.375-3.375L15 15"
                    />
                  </svg>
                </button>
                {isCustomerDropdownOpen && (
                  <div className="mt-2 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <Link
                      to="/customerdata"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Add Customer
                    </Link>
                    <Link
                      to="/customer/list"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Customer List
                    </Link>
                    <Link
                      to="/customer/report"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    >
                      Customer Report
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/customer/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Settings
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
