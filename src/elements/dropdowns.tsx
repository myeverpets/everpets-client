import { Menu, Transition } from '@headlessui/react';

const sort = [
  { id: 1, title: 'Newest' },
  { id: 2, title: 'Oldest' },
  { id: 3, title: 'Most popular' },
  { id: 4, title: 'Least popular' },
  { id: 5, title: 'Distance' },
];

export function Sorting() {
  return (
    <div className="relative mt-1">
      <Menu>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Menu.Button className="relative flex justify-between bg-white dark:bg-blacke h-max w-[150px] text-left pl-1 py-1 rounded-lg border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                More
              </Menu.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {/* Mark this component as `static` */}
                <Menu.Items className="absolute mt-1 max-h-60 w-min overflow-auto rounded-md bg-white dark:bg-blacke py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {sort.map((sorted) => (
                    <Menu.Item
                      as="a"
                      key={sorted.id}
                      className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                    >
                      {sorted.title}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </div>
          </>
        )}
      </Menu>
    </div>
  );
}
