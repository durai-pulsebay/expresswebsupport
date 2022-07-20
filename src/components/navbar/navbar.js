import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <div>
      <nav className="border-gray-200 dark:bg-gray-800 relative">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href={`${window.origin}/${window.countryCode}/`}
            className="max-w-[60%] "
          >
            <img
              src={`${window.origin}/assets/images/logo.png`}
              className="mr-3 w-[180px] "
              alt="logo"
            />
          </a>
          <div className="flex  lg:order-2">
            <button
              type="button"
              className="text-white lg:block hidden bg-[#144645] hover:bg-[#226766] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 text-center mr-3 md:mr-0 "
            >
              Login
            </button>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
              onClick={() => setIsMenuOpened(!isMenuOpened)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6` + (isMenuOpened && " hidden")}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6` + (!isMenuOpened && " hidden")}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              `justify-between absolute lg:relative bg-sandel-clr top-full left-0  items-center w-full lg:flex lg:w-auto  lg:order-1` +
              (!isMenuOpened && " hidden")
            }
            id="mobile-menu-4"
          >
            <div className="container py-6">
              <ul className="flex flex-col  lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
                <li>
                  <a
                    href={`${window.origin}/${window.countryCode}/`}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#144645]] lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href={`${window.origin}/${window.countryCode}/how-can-we-help`}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#144645]] lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    How Can We Help
                  </a>
                </li>

                <li>
                  <a
                    href={`${window.origin}/${window.countryCode}/contact`}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#144645] lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <button
                    type="button"
                    className="text-white mt-3 lg:hidden bg-[#144645] hover:bg-[#226766] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
