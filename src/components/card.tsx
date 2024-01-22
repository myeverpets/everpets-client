import { useParams } from 'react-router';
import pets from '../data/pets.json';
import { useEffect, useState } from 'react';
import getDistance from '../utils/distance';
import { useGeolocated } from 'react-geolocated';
import PetInfo from './pet-info';

interface Pet {
  id: number;
  name: string;
  category: string;
  birthday: string;
  imageSrc: string;
  imageAlt: string;
  location: { latitude: number; longitude: number };
}

export default function Card() {
  const { id } = useParams();
  const [currentPet, setCurrentPet] = useState<Pet>();

  useEffect(() => {
    const pet = pets.find((value) => {
      return value.id === id;
    }) as unknown as Pet;
    console.log(pet);
    setCurrentPet(pet);
  }, [id]);
  console.log();
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });
  return (
    <>
      <div className="grid grid-cols-1 realtive mx-auto max-w-[91%] justify-center justify-items-center py-10">
        <div className="grid grid-cols-2 gap-4 w-[950px]">
          <div className="grid col-span-1 grid-rows-5 h-[600px] w-full gap-1">
            <div className="row-span-4 flex relative aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 pb-2">
              <img
                src={currentPet?.imageSrc}
                alt={currentPet?.imageAlt}
                className="w-full h-auto rounded-lg object-cover object-center group-hover:opacity-75 hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <div className="row-span-1 relative justify-between grid grid-cols-3 gap-4">
              <img
                src={currentPet?.imageSrc}
                alt={currentPet?.imageAlt}
                className="rounded-lg"
              />
              <img
                src={currentPet?.imageSrc}
                alt={currentPet?.imageAlt}
                className="rounded-lg"
              />
              <img
                src={currentPet?.imageSrc}
                alt={currentPet?.imageAlt}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="grid col-span-1">
            <div className="self-center grid justify-items-start">
              <div className="flex relative items-start content-start text-base font-medium flex-col flex-wrap justify-start text-gray-900 dark:text-white py-4">
                <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">
                  {currentPet?.name}
                </p>
                <div className="text-black dark:text-white font-semibold">
                  {getDistance(
                    coords,
                    currentPet?.location.latitude ?? 0,
                    currentPet?.location.longitude ?? 0,
                  ) ?? 0}
                  km to you
                </div>
                <h3 className="font-light text-gray-500 text-base text-pretty">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  quos impedit voluptates, nisi rerum dolore omnis, itaque, nam
                  dolorum doloremque a incidunt voluptate cum labore iste ipsam
                  non. Quos, suscipit!
                </h3>
              </div>
              <div className="grid col-span-1 items-center content-around">
                <div className="flex flex-col mt-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Owner Information
                  </h4>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Name: John Doe</p>
                    <p className="text-sm text-gray-500">
                      Email: john.doe@example.com
                    </p>
                    <p className="text-sm text-gray-500">Phone: 123-456-7890</p>
                  </div>
                </div>
                <div className="grid flex-col mt-4">
                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-rede hover:scale-110 transition-colors rounded-lg hover:drop-shadow-lg focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    ADOPT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {currentPet && <PetInfo pet={currentPet} />}
      </div>
    </>
  );
}
