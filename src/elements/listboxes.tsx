import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

const categories = [
  { id: 1, title: 'Dog' },
  { id: 2, title: 'Cat' },
  { id: 3, title: 'Bird' },
  { id: 4, title: 'Reptile' },
  { id: 5, title: 'Fish' },
  { id: 6, title: 'Rodent' },
];
const age = [
  { id: 1, title: 'Baby (0-1 year)' },
  { id: 2, title: 'Young (1-3 years)' },
  { id: 3, title: 'Adult (3-7 years)' },
  { id: 4, title: 'Senior (7+ years)' },
];
const distance = [
  { id: 1, title: 'Settlement' },
  { id: 2, title: '0-5 km' },
  { id: 3, title: '5-10 km' },
  { id: 4, title: '10-25 km' },
  { id: 5, title: '25-100 km' },
  { id: 6, title: '100+ km' },
];

const sex = [
  { id: 1, title: 'Male' },
  { id: 2, title: 'Female' },
];

const size = [
  { id: 1, title: 'Small' },
  { id: 2, title: 'Medium' },
  { id: 3, title: 'Large' },
];

interface Item {
  id: number;
  title: string;
}
export function CustomListbox({ items }: { items: Item[]; label: string }) {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className="relative mt-1">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative dark:text-white flex justify-between bg-white dark:bg-blacke h-max w-[150px] text-left pl-1 py-1 border-b-2 border-gray-900 dark:border-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <span className="relative flex">{selected.title}</span>
            <span className="relative right-0 flex pl-4">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-900 dark:text-white"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-min overflow-auto rounded-mdpy-1 text-base drop-shadow-lg dark:drop-shadow-lgL rounded-md ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-gray-100 dark:bg-gray-700'
                        : 'bg-white dark:bg-blacke'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate dark:text-white ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-rede">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export function ListboxCategory() {
  return <CustomListbox items={categories} label="Category" />;
}

export function ListboxAge() {
  return <CustomListbox items={age} label="Age" />;
}

export function ListboxDistance() {
  return <CustomListbox items={distance} label="Distance" />;
}

export function ListboxSex() {
  return <CustomListbox items={sex} label="Sex" />;
}

export function ListboxSize() {
  return <CustomListbox items={size} label="Size" />;
}
