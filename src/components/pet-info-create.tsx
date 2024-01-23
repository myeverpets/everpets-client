import { ListboxCategory, ListboxSex } from '../elements/listboxes';
import { ColorPet } from '../elements/color-pickers';

export default function CreatePetInfo() {
  return (
    <>
      <div className="grid grid-cols-1 relative w-[77%] text-black dark:text-white text-xl gap-4">
        <div className="flex flex-col justify-self-start w-full pt-5 dark:bg-blacke">
          <h1>Me</h1>
        </div>
        <div className="grid grid-cols-2 w-full gap-x-20 gap-y-8">
          <div className="grid col-span-1 grid-rows-2">
            <h4 className="">Age </h4>
            <input
              type="date"
              className="flex dark:bg-blacke dark:text-white gap-2 text-center items-center border w-min border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rede focus:border-rede"
              max={Date.now()}
            />
          </div>
          <div className="grid col-span-1 grid-rows-2">
            <h4 className="">Category </h4>
            <ListboxCategory />
          </div>
          <div className="grid col-span-1 grid-rows-2">
            <div>
              <h4 className="">Sex </h4>
              <ListboxSex />
            </div>
            <div>
              <h4 className="">Color</h4>
              <ColorPet />
            </div>
          </div>
          <div className="grid col-span-1 grid-rows-2 gap-1">
            <h4 className="">Size </h4>
            <div className="flex gap-2 text-center items-center">
              <input
                type="number"
                min={0}
                className="dark:bg-blacke border col-span-9 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rede focus:border-rede"
                placeholder="Weight"
              />
              <h4>kg</h4>
            </div>
            <div className="flex gap-2 text-center items-center">
              <input
                type="number"
                min={0}
                className="dark:bg-blacke border col-span-9 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rede focus:border-rede"
                placeholder="Height"
              />
              <h4>cm</h4>
            </div>
            <div className="flex gap-2 text-center items-center">
              <input
                type="number"
                min={0}
                className="dark:bg-blacke border col-span-9 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rede focus:border-rede"
                placeholder="Length"
              />
              <h4>cm</h4>
            </div>
            <div className="flex gap-2 text-center items-center">
              <input
                type="number"
                min={0}
                className="dark:bg-blacke border col-span-9 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rede focus:border-rede"
                placeholder="Width"
              />
              <h4>cm</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
