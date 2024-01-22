import CalculateAge from '../utils/age';
import Size from '../utils/size';

export default function PetInfo(pet: any) {
  return (
    <>
      <div className="grid grid-cols-1 relative w-[77%] text-black dark:text-white">
        <div className="flex flex-col justify-self-start w-full pt-5">
          <h1>Me</h1>
        </div>
        <div className="grid grid-cols-2 w-full gap-2">
          <div className="grid col-span-1 grid-cols-2">
            <h3 className="font-semibold">Age </h3>
            <h3 className="font-medium pl-28">
              {CalculateAge(pet.pet.birthday)}{' '}
            </h3>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h3 className="font-semibold">Category </h3>
            <h3 className="font-medium pl-28">{pet.pet.category} </h3>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h3 className="font-semibold">Sex </h3>
            <h3 className="font-medium pl-28">{pet.pet.sex} </h3>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h3 className="font-semibold">Size </h3>
            <h3 className="font-medium pl-28">
              {Size(
                pet.pet.height,
                pet.pet.width,
                pet.pet.weight,
                pet.pet.length,
              )}{' '}
            </h3>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h3 className="font-semibold">Color</h3>
            <h3 className="font-medium pl-28 inline-flex">
              <div id={`${pet.pet.color}-circle`} />{' '}
            </h3>
          </div>
          <div className="grid col-span-1 grid-cols-2">
            <h3 className="font-semibold">Breed</h3>
            <h3 className="font-medium pl-28">{pet.pet.breed}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
