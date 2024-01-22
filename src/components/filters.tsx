import {
  ListboxCategory,
  ListboxAge,
  ListboxDistance,
  ListboxSex,
  ListboxSize,
} from '../elements/listboxes';
import { ColorPet } from '../elements/color-pickers';
import { Link } from 'react-router-dom';

export default function Filters() {
  return (
    <>
      <div className="max-w-[91%] mx-auto relative grid grid-cols-7 py-8 self-center z-30">
        <div id="ListBox" className="">
          <ListboxCategory />
        </div>
        <div id="ListBox" className="">
          <ListboxAge />
        </div>
        <div id="ListBox" className="">
          <ListboxDistance />
        </div>
        <div id="ListBox" className="">
          <ListboxSex />
        </div>
        <div id="ListBox" className="">
          <ListboxSize />
        </div>
        <div id="ListBox" className="">
          <ColorPet />
        </div>
        <div className="max-w-min text-center items-center self-center hover:drop-shadow-lg dark:hover:drop-shadow-lgL bg-white dark:bg-blacke rounded-lg py-2 px-2">
          <Link
            to={'/search'}
            className="items-center text-center text-rede font-bold text-xl"
          >
            Search
          </Link>
        </div>
      </div>
    </>
  );
}
