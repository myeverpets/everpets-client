import logo from '../assets/logo.png';

const navigation = [
  { name: 'About us', href: '#', current: false },
  { name: 'Help', href: '#', current: false },
  { name: 'Out stories', href: '#', current: false },
  { name: 'Categories', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
export default function Footer() {
  return (
    <>
      <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
        <div className="container px-6 py-6">
          <h1 className="text-lg font-bold text-center lg:text-2xl">
            Join 31,000+ other and never miss <br /> out on new cats, dogs, and
            more.
          </h1>

          <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
            <input
              id="email"
              type="text"
              className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
              placeholder="Email Address"
            />

            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-rede rounded-lg hover:drop-shadow-lg focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              Contact
            </button>
          </div>

          <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <a href="#">
              <img className="w-auto h-10" src={logo} alt="" />
            </a>

            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-white' : 'text-black',
                      'rounded-lg px-3 py-2 text-base font-bold hover:bg-white hover:drop-shadow-md',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
