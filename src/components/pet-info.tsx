import CalculateAge from '../utils/age';
import Size from '../utils/size';

export default function PetInfo(pet: any) {
  return (
    <>
      <div className="grid grid-cols-1 relative w-[77%] text-black dark:text-white text-xl gap-4">
        <div className="flex flex-col justify-self-start w-full pt-5">
          <h1>Me</h1>
        </div>
        <div className="grid grid-cols-2 w-full gap-x-20">
          <div className="grid col-span-1 grid-cols-2">
            <h4 className="">Age </h4>
            <h4 className="font-medium justify-self-end">
              {CalculateAge(pet.pet.birthday)}{' '}
            </h4>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h4 className="">Category </h4>
            <h4 className="font-medium justify-self-end">
              {pet.pet.category}{' '}
            </h4>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h4 className="">Sex </h4>
            <h4 className="font-medium justify-self-end">{pet.pet.sex} </h4>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h4 className="">Size </h4>
            <h4 className="font-medium justify-self-end">
              {Size(
                pet.pet.height,
                pet.pet.width,
                pet.pet.weight,
                pet.pet.length,
              )}{' '}
            </h4>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h4 className="">Color</h4>
            <h4 className="font-medium justify-self-end inline-flex border-gray-200 dark:border-gray-700 border-2 rounded-full h-min w-min">
              <div id={`${pet.pet.color}-circle`} />{' '}
            </h4>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h4 className="">Breed</h4>
            <h4 className="font-medium justify-self-end">{pet.pet.breed}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
