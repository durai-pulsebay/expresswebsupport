import React from 'react';

const Navbar = () => {
    return (<div>
        <nav class="border-gray-200 dark:bg-gray-800">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" class="max-w-[60%] ">
                    <img src="/assets/images/logo.png" class="mr-3 w-[180px] " alt="logo" />
                </a>
                <div class="flex  lg:order-2">
                    <button type="button"
                        class="text-white lg:block hidden bg-[#A5A7A2] hover:bg-[#838382] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5  py-2.5 text-center mx-5 md:mr-5 ">
                        Sign Up
                    </button>
                    <button type="button"
                        class="text-white lg:block hidden bg-[#144645] hover:bg-[#226766] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
                        Login
                    </button>
                    <button data-collapse-toggle="mobile-menu-4" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-4" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-4">
                    <ul class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium">
                        <li>
                            <a href="/" class="block py-2 pr-4 pl-3 text-[#434343] bg-[#A5A7A2] rounded md:bg-transparent lg:text-[#144645] md:p-0 dark:text-white"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/what-can-we-fix" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#144645]] lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">How
                                can we help</a>
                        </li>

                        <li>
                            <a href="/contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#144645] lg:p-0 lg:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>

                        <li>
                            <button type="button"
                                class="text-white mt-3 lg:hidden bg-[#A5A7A2] hover:bg-[#838382]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Sign Up
                            </button>
                            <button type="button"
                                class="text-white mt-3 lg:hidden bg-[#144645] hover:bg-[#226766] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
}

export default Navbar;