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
      <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-blacke">
        <div className="container px-6 py-6">
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
                      item.current
                        ? 'bg-black text-white'
                        : 'text-black dark:text-white',
                      'rounded-lg px-3 py-2 text-base font-bold hover:bg-white dark:hover:bg-blacke hover:drop-shadow-md dark:hover:drop-shadow-lgL',
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
