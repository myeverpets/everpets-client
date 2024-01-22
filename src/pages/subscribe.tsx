export default function Subscribe() {
  return (
    <>
      <div>
        <h1 className="text-lg font-bold text-center lg:text-2xl dark:text-white">
          Join 31,000+ other and never miss <br /> out on new cats, dogs, and
          more.
        </h1>

        <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
          <input
            id="email"
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-blacke dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300"
            placeholder="Email Address"
          />

          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-rede hover:scale-110 transition-colors rounded-lg hover:drop-shadow-lg focus:ring focus:ring-gray-300 focus:ring-opacity-80">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
