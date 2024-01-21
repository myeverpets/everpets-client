import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const colors = [
  { id: 1, color: 'white-circle' },
  { id: 2, color: 'black-circle' },
  { id: 3, color: 'brown-circle' },
  { id: 4, color: 'gray-circle' },
  { id: 5, color: 'white-black-brown-circle' },
  { id: 6, color: 'white-black-circle' },
];

interface CustomPickerProps {
  id: number;
  color: string;
}

export function CustomPicker({
  items,
}: {
  items: CustomPickerProps[];
  label: string;
}) {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className="relative mt-1">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative flex justify-between bg-white h-max w-[150px] text-left pl-1 py-1 border-b-2 border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <span className="relative flex">{selected.color}</span>
            <span className="relative right-0 flex pl-4">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-900"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options className="absolute z-10 w-[150px] py-4 mt-1 overflow-auto text-base bg-white dark:bg-blacke rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm grid grid-cols-2 gap-x-9 gap-y-4 justify-center place-items-center">
              {items.map((color) => (
                <div className="border-gray-200 border-2 rounded-full">
                  <div id={color.color} className=""></div>
                </div>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export function ColorPet() {
  return <CustomPicker items={colors} label="Color" />;
}