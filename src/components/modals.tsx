import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import users from '../data/users.json';

export function ModalOK({ ownerId }: { ownerId: string }) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const owner = users.find((user: { id: string }) => user.id === ownerId);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 flex items-center justify-center"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
          <div className="flex flex-col items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-blacke text-left drop-shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white dark:bg-blacke dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-10 text-gray-900 dark:text-gray-100"
                      >
                        Owner Information
                      </Dialog.Title>
                      <div className="grid grid-cols-2">
                        <p>Name: </p>
                        <p>
                          {owner?.firstName} {owner?.lastName}
                        </p>
                        <p>Number: </p>
                        <p>{owner?.phone}</p>
                        <p>Email: </p>
                        <p>{owner?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                  <div className="flex justify-center">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-white dark:bg-blacke border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-sm hover:bg-gray-100 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function ModalMap() {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 flex items-center justify-center"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
            <div className="flex flex-col items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-blacke text-left drop-shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white dark:bg-blacke px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-semibold leading-10 text-gray-900 dark:text-gray-100"
                        >
                          Select location
                        </Dialog.Title>
                        <div className="grid grid-cols-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-white border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
