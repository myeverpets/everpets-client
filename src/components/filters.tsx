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
      <div className="max-w-[91%] mx-auto flex relative">
        <div className="min-w-[150px] mx-auto lg:py-10 ">
          <ListboxCategory />
        </div>
        <div className="min-w-[150px] mx-auto lg:py-10 ">
          <ListboxAge />
        </div>
        <div className="min-w-[150px] mx-auto lg:py-10 ">
          <ListboxDistance />
        </div>
        <div className="min-w-[150px] mx-auto lg:py-10 ">
          <ListboxSex />
        </div>
        <div className="min-w-[150px] mx-auto lg:py-10 ">
          <ListboxSize />
        </div>
        <div className="min-w-[150px] mx-auto lg:py-10 ">
          <ColorPet />
        </div>
        <div className="max-w-min mx-auto lg:py-10 ">
          <Link to={'/search'} className="text-balance whitespace-normal ">
            Advenced Search
          </Link>
        </div>
      </div>
    </>
  );
}
