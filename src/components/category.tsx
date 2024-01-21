import { PiDogLight, PiCatLight, PiAlienLight } from 'react-icons/pi';

export default function Category() {
  return (
    <div className="z-0 max-w-[91%] py-32 mx-auto">
      <div className="text-center dark:text-white">
        <h1>Category</h1>
      </div>
      <div className="grid grid-cols-3 gap-20 h-80 px-32 py-4 dark:text-white">
        <button
          id="HMB"
          className="col-span-1 bg-white dark:bg-blacke drop-shadow-lg dark:drop-shadow-lgL rounded-lg flex justify-center items-center align-stretch flex-col h-max py-[42px] hover:bg-gray-100 dark:hover:bg-blacke dark:hover:scale-110"
        >
          <PiDogLight className="size-40 content-center" />
          <h2 className="font-bold text-center">Dogs</h2>
        </button>
        <button
          id="HMB"
          className="col-span-1 bg-white dark:bg-blacke drop-shadow-lg dark:drop-shadow-lgL rounded-lg flex justify-center items-center align-stretch flex-col h-max py-[42px] hover:bg-gray-100 dark:hover:bg-blacke dark:hover:scale-110"
        >
          <PiCatLight className="size-40 content-center" />
          <h2 className="font-bold text-center">Cats</h2>
        </button>
        <button
          id="HMB"
          className="col-span-1 bg-white dark:bg-blacke drop-shadow-lg dark:drop-shadow-lgL rounded-lg flex justify-center items-center align-stretch flex-col h-max py-[42px] hover:bg-gray-100 dark:hover:bg-blacke dark:hover:scale-110"
        >
          <PiAlienLight className="size-40 content-center" />
          <h2 className="font-bold text-center">Others</h2>
        </button>
      </div>
    </div>
  );
}
