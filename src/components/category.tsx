import { PiDogLight, PiCatLight, PiAlienLight } from "react-icons/pi";

export default function Category() {
    return (
        <div className="max-w-[91%] py-32 mx-auto">
            <div className="text-center">
                <h1>Category</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 h-80 px-24 py-4">
                <button className="col-span-1 bg-white drop-shadow-lg rounded-lg flex justify-center items-center align-stretch flex-col h-max py-[42px]">
                    <PiDogLight className="size-40 content-center"/>
                    <h2 className="font-bold text-center">Dogs</h2>
                </button>
                <button className="col-span-1 bg-white drop-shadow-lg rounded-lg flex justify-center items-center align-stretch flex-col h-max py-[42px]">
                    <PiCatLight className="size-40 content-center"/>
                    <h2 className="font-bold text-center">Cats</h2>
                </button>
                <button className="col-span-1 bg-white drop-shadow-lg rounded-lg flex justify-center items-center align-stretch flex-col h-max py-[42px]">
                    <PiAlienLight className="size-40 content-center"/>
                    <h2 className="font-bold text-center">Others</h2>
                </button>


            </div>
        </div>
    );
}
