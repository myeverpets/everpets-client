import { Combobox_country, Combobox_category } from '../elements/comboboxes';

export default function Search() {
  return (
    <>
      <div className="z-40 grid max-w-[91%] px-24 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-10 ">
        <div className="max-w-[62%] mx-auto lg:gap-8 xl:gap-0 text-center ">
          <span className="text-[40px] font-bold">
            Find your <b className="text-rede">dream</b> pet for free right now!
          </span>
        </div>
        <div className="grid lg:grid-cols-5 px-1 bg-white rounded-xl drop-shadow-lg">
          <div className="lg:col-span-2">
            <Combobox_country />
          </div>
          <div className="lg:col-span-2">
            <Combobox_category />
          </div>
          <button className="bg-white h-max rounded-lg text-rede text-2xl font-semibold py-[6px] focus:drop-shadow-md focus:outline-none focus:border-gray-400">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
