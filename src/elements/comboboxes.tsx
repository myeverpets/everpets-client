import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export function Combobox_country() {
  const country = [
    { id: 1, title: 'Albania' },
    { id: 2, title: 'Andorra' },
    { id: 3, title: 'Armenia' },
    { id: 4, title: 'Austria' },
    { id: 5, title: 'Azerbaijan' },
    { id: 6, title: 'Belarus' },
    { id: 7, title: 'Belgium' },
    { id: 8, title: 'Bosnia and Herzegovina' },
    { id: 9, title: 'Bulgaria' },
    { id: 10, title: 'Croatia' },
    { id: 11, title: 'Cyprus' },
    { id: 12, title: 'Czech Republic' },
    { id: 13, title: 'Denmark' },
    { id: 14, title: 'Estonia' },
    { id: 15, title: 'Finland' },
    { id: 16, title: 'Former Yugoslav Republic of Macedonia' },
    { id: 17, title: 'France' },
    { id: 18, title: 'Georgia' },
    { id: 19, title: 'Germany' },
    { id: 20, title: 'Greece' },
    { id: 21, title: 'Hungary' },
    { id: 22, title: 'Iceland' },
    { id: 23, title: 'Ireland' },
    { id: 24, title: 'Italy' },
    { id: 25, title: 'Kosovo' },
    { id: 26, title: 'Latvia' },
    { id: 27, title: 'Liechtenstein' },
    { id: 28, title: 'Lithuania' },
    { id: 29, title: 'Luxembourg' },
    { id: 30, title: 'Malta' },
    { id: 31, title: 'Moldova' },
    { id: 32, title: 'Monaco' },
    { id: 33, title: 'Montenegro' },
    { id: 34, title: 'Netherlands' },
    { id: 35, title: 'Norway' },
    { id: 36, title: 'Poland' },
    { id: 37, title: 'Portugal' },
    { id: 38, title: 'Romania' },
    { id: 39, title: 'San Marino' },
    { id: 40, title: 'Serbia' },
    { id: 41, title: 'Slovakia' },
    { id: 42, title: 'Slovenia' },
    { id: 43, title: 'Spain' },
    { id: 44, title: 'Sweden' },
    { id: 45, title: 'Switzerland' },
    { id: 46, title: 'Turkey' },
    { id: 47, title: 'Ukraine' },
    { id: 48, title: 'United Kingdom' },
  ];
  const [selected_country, setSelected_country] = useState(country[0]);
  const [query, setQuery] = useState('');

  const filteredCountry: { id: number; title: string }[] =
    query === ''
      ? country
      : country.filter((nation) =>
          nation.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <>
      <Combobox value={selected_country} onChange={setSelected_country}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(nation: { title: string }) => nation.title}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredCountry.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCountry.map((nation) => (
                  <Combobox.Option
                    key={nation.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-rede text-white' : 'text-gray-900'
                      }`
                    }
                    value={nation}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {nation.title}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-rede'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </>
  );
}

export function Combobox_category() {
  const category = [
    { id: 1, title: 'Dog' },
    { id: 2, title: 'Cat' },
    { id: 3, title: 'Bird' },
    { id: 4, title: 'Reptile' },
    { id: 5, title: 'Fish' },
    { id: 6, title: 'Rodent' },
    { id: 7, title: 'Other' },
  ];
  const [selected, setSelected] = useState(category[0]);
  const [query, setQuery] = useState('');

  const filteredCategory =
    query === ''
      ? category
      : category.filter((type) =>
          type.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            displayValue={(type: { title: string }) => type.title}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredCategory.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredCategory.map((type) => (
                <Combobox.Option
                  key={type.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-rede text-white' : 'text-gray-900'
                    }`
                  }
                  value={type}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {type.title}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-rede'
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
