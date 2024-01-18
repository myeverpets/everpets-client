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
  { id: 1, title: 'Adult' },
  { id: 2, title: 'Young' },
  { id: 3, title: 'Baby' },
  { id: 4, title: 'Senior' },
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
          <Listbox.Button className="relative flex justify-between bg-white h-max text-left pl-1 py-1 border-b-2 border-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <span className="relative flex">{selected.title}</span>
            <span className="relative right-0 flex pl-4">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-900"
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-min overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {items.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-gray-100' : 'bg-white'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
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
