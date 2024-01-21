import { useGeolocated } from 'react-geolocated';
import pets from '../data/pets.json';
import getDistance from '../utils/distance';

export default function List() {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });
  return (
    <>
      <div className="max-w-[91%] mx-auto ">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="sr-only">Pets</h2>

          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {pets.map((pets) => (
              <a
                key={pets.id}
                href={pets.href}
                className="py-3 grid relative flex-wrap my-3"
              >
                <div className="flex relative aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={pets.imageSrc}
                    alt={pets.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 hover:scale-110 transition duration-500 ease-in-out"
                  />
                </div>
                <div className="flex relative items-start content-start text-base font-medium flex-col flex-wrap justify-start text-gray-900">
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {pets.name}
                  </p>
                  <div className="text-gray-500 font-light">
                    {getDistance(
                      coords,
                      pets.location.latitude,
                      pets.location.longitude,
                    )}
                    km
                  </div>
                  <h3 className="font-light text-gray-500 text-base">
                    {pets.category}
                  </h3>
                  {pets.age != null && (
                    <p className="font-light text-gray-500 text-base">
                      {pets.age}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
