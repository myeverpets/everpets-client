import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import darkMode from '../utils/darkmode';
import useDarkSide from '../utils/dark';
import Banner from './banner';

const navigation = [
  { name: 'About us', href: '#AboutUs', current: false },
  { name: 'Help', href: '/!modal', current: false },
  { name: 'Out stories', href: '/!modal', current: false },
  { name: 'Categories', href: '/category', current: false },
  { name: 'Contact', href: '/!modal', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  darkMode();
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <Banner />
          <div className="mx-auto max-w-[91%] ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={'/'}>
                    <img
                      className="h-12 w-auto hover:drop-shadow-lg dark:hover:drop-shadow-lgL"
                      src={logo}
                      alt="EverPets"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-44 sm:flex items-end ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="rounded-lg px-3 py-2 text-base font-bold hover:bg-white hover:drop-shadow-md dark:text-white  dark:hover:bg-blacke dark:hover:drop-shadow-lgL"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  id="theme-toggle"
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                  onClick={useDarkSide}
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className="hidden w-5 h-5 animate-spin"
                    fill="black"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className="hidden w-5 h-5 animate-spin"
                    fill="yellow"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <hr className="w-px h-6 bg-gray-300 sm:mx-3" />
                {localStorage.getItem('isLogged') === 'true' ? (
                  <div className=" inline-flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt=""
                      className="rounded-full relative h-10"
                    />
                    <Link
                      to="/profile"
                      className="text-base font-semibold px-2 py-1"
                    >
                      <span className="text-rede text-xl font-bold hover:text-red-800">
                        My account
                      </span>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="relative rounded-lg bg-white dark:bg-blacke p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-rede hover:text-red-600 
                    text-base fond-bold"
                    >
                      <Link
                        to="/login"
                        className="text-base font-semibold px-2 py-1"
                      >
                        Log in
                        <span className="absolute -inset-1.5" />
                      </Link>
                      <span className="sr-only">Log in</span>
                    </button>
                    <button
                      type="button"
                      className="relative rounded-lg bg-rede p-2 hover:bg-gray-100 text-white hover:text-red-600 ml-4"
                    >
                      <Link
                        to="/signup"
                        className="text-base font-semibold px-2 py-1"
                      >
                        Sign up
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Sign up</span>
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-white text-gray-900'
                      : 'text-black text-base hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
