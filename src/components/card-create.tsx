import { useState } from 'react';
import { PiMapPinFill } from 'react-icons/pi';
import { ModalMap } from './modals';
import CreatePetInfo from '../components/pet-info-create';

export default function CardCreate() {
  const [showModal, setShowModal] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.includes('image')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        sessionStorage.setItem('selectedImage', reader.result as string);
      };
      reader.readAsDataURL(file);
      window.location.reload();
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 realtive mx-auto max-w-[91%] justify-center justify-items-center py-10">
        <div className="grid grid-cols-2 gap-4 w-[950px]">
          <div className="grid col-span-1 grid-rows-5 h-[600px] w-full gap-1">
            {sessionStorage.getItem('selectedImage') ? (
              <div className="row-span-4 flex relative aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 pb-2">
                <img
                  src={sessionStorage.getItem('selectedImage') || undefined}
                  alt="Not found"
                  className="w-full h-auto rounded-lg object-cover object-center group-hover:opacity-75 hover:scale-110 transition duration-500 ease-in-out"
                />
              </div>
            ) : (
              <div className="row-span-4 flex relative aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 pb-2 border-dashed border-gray-200 dark:border-gray-700 border-2">
                <div
                  className="w-full h-auto rounded-lg object-cover object-center group-hover:opacity-75 hover:scale-110 transition duration-500 ease-in-out self-center text-center"
                  style={{ textAlign: 'center' }}
                >
                  <label className="w-64 mx-auto flex flex-col items-center px-4 py-6 bg-white dark:bg-blacke dark:text-white rounded-lg tracking-wide uppercase cursor-pointer">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      Select an image
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className="grid col-span-1">
            <div className="self-center grid justify-items-start">
              <div className="flex relative items-start content-start text-base font-medium flex-col flex-wrap justify-start text-gray-900 dark:text-white py-4">
                <input
                  type="text"
                  className="text-2xl dark:bg-blacke font-bold text-blacke dark:text-white border-none focus:ring-rede rounded-lg opacity-50"
                  placeholder="Name"
                />
                <div className="text-black dark:text-white font-semibold py-4">
                  <button
                    className="bg-rede text-white font-bold py-1 px-4 rounded-lg"
                    onClick={() => setShowModal(true)}
                  >
                    set location{' '}
                    <PiMapPinFill className="inline-flex my-auto" />
                  </button>
                </div>
                <textarea
                  className="text-xl  dark:bg-blacke text-wrap whitespace-normal text-blacke dark:text-white border-none focus:ring-rede rounded-lg font-normal opacity-50 resize-none"
                  style={{ wordWrap: 'break-word' }}
                  placeholder="Description"
                  rows={5}
                  cols={50}
                />
              </div>
              <div className="grid col-span-1 items-center content-around">
                <div className="flex flex-col mt-4">
                  <div className="mt-2"></div>
                </div>
                <div className="grid flex-col mt-4"></div>
              </div>
            </div>
          </div>
        </div>
        <CreatePetInfo />
        {showModal && <ModalMap />}
      </div>
    </>
  );
}
