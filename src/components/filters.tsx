import { ListboxCategory, ListboxAge } from '../elements/listboxes';

export default function Filters() {
  return (
    <>
      <div className="max-w-[91%] mx-auto flex relative">
        <div className="max-w-min mx-auto lg:py-10 ">
          <ListboxCategory />
        </div>
        <div className="max-w-min mx-auto lg:py-10 ">
          <ListboxAge />
        </div>
      </div>
    </>
  );
}
