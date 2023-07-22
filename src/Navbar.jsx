import React from 'react';
import { Link } from 'react-router-dom
  
function NavBar() {
  const [showMenu, setShowMenu] = React.useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900  border-b-4 border-blue-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 duration-500">
          <a className="flex items-center">
            <img
              src="wk-logo-wt-no-bg.png"
              className="h-8 mr-3"
              alt="Website Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <Link to="/">Walter Kiprono</Link>
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center duration-500 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="false"
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
          </button>
          <div className={`w-full md:block md:w-auto duration-500 truncate ${showMenu ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border duration-500 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:text-violet-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
                  to="/">Home</Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:text-violet-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
                  to="/form">Contact</Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:text-violet-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
                  to="/skills">Skills</Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4  dark:bg-gray-900 hover:text-violet-400 duration-500 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 mb-2"
                  to="/portfolio">Portfolio</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
