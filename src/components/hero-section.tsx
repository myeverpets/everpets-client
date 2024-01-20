import dog from '../assets/dogF.png';

export default function HeroSection() {
  return (
    <>
      <div className="grid max-w-[91%] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-48 my-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 pt-22">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white   ">
            Find your new best friend
          </h1>
          <hr className="w-[32rem] h-1 my-8 bg-rede border-0 rounded md:my-10 dark:bg-gray-700" />
          <h3 className="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            It’s never too late to fall in <b className="text-rede">love</b>
          </h3>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-bold text-center text-white rounded-lg bg-rede hover:drop-shadow-lg dark:hover:drop-shadow-lgL hover:bg-red-600 hover:scale-110 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img
            src={dog}
            className="absolute left-[696px] top-[80px] w-[733px] h-[901px]"
          />
        </div>
      </div>
    </>
  );
}
