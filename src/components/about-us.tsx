import adopt_icom from '../assets/Dogg.png';

export default function AboutUs() {
  return (
    <>
      <div
        id="AboutUs"
        className="grid-cols-1 z-40 grid max-w-[91%] py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-10 dark:text-white"
      >
        <div className="max-w-[62%] mx-auto lg:gap-8 xl:gap-0 text-center col-span-2">
          <span className="text-[40px] font-bold">About Us</span>
        </div>
        <div className="grid grid-cols-2 mx-auto lg:gap-24 text-center justify-center py-4 col-span-2">
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-h-min relative py-32">
            <h1>EverPets</h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              your ultimate destination for heartwarming connections and
              lifelong companionship! EVERPETS is not just an adoption platform;
              it's a vibrant community where the journey to find your perfect
              furry friend becomes a memorable and joyous experience. Experience
              the magic of companionship with EVERPETS – where every adoption is
              a celebration of love, compassion, and the incredible bond between
              pets and their human companions. Join us in creating a world where
              every pet finds their forever home!
            </h3>
          </div>
          <div className="text-[40px] font-bold col-span-1">
            <img src={adopt_icom} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 mx-auto gap-x-40 text-justify">
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-w-[400px]">
            <h1 className="text-black dark:text-white text-[40px]">
              <b className="text-rede text-[64px]">01</b>Discover
            </h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              Dive into a diverse array of adorable pets, each with their own
              unique story and charm. Whether you're drawn to the playful energy
              of a puppy, the regal presence of a cat, or the gentle
              companionship of smaller critters, EVERPETS has a match for every
              pet lover.
            </h3>
          </div>
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-w-[400px]">
            <h1 className="text-black dark:text-white text-[40px]">
              <b className="text-rede text-[64px]">02</b>Home
            </h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              We believe that every pet deserves a loving home, and that's why
              EVERPETS connects you with reputable shelters, rescue
              organizations, and compassionate individuals committed to
              providing the best life for their furry companions. Our platform
              ensures that you're not just adopting a pet; you're becoming part
              of a compassionate network dedicated to animal welfare.
            </h3>
          </div>
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-w-[400px]">
            <h1 className="text-black dark:text-white text-[40px]">
              <b className="text-rede text-[64px]">03</b>Process
            </h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              EVERPETS makes adoption a breeze with a user-friendly interface
              designed for simplicity and transparency. From browsing profiles
              and scheduling meet-and-greets to completing the adoption
              paperwork, our platform streamlines the process, allowing you to
              focus on building a lasting bond with your future pet.
            </h3>
          </div>
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-w-[400px]">
            <h1 className="text-black dark:text-white text-[40px]">
              <b className="text-rede text-[64px]">04</b>Educational
            </h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              At EVERPETS, we believe that a well-informed pet parent is a happy
              pet parent. Access a wealth of educational resources on pet care,
              behavior, and health to ensure that you and your new companion
              embark on a journey of happiness and well-being together.
            </h3>
          </div>
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-w-[400px]">
            <h1 className="text-black dark:text-white text-[40px]">
              <b className="text-rede text-[64px]">05</b>Journey
            </h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              Dive into a diverse array of adorable pets, each with their own
              unique story and charm. Whether you're drawn to the playful energy
              of a puppy, the regal presence of a cat, or the gentle
              companionship of smaller critters, EVERPETS has a match for every
              pet lover.
            </h3>
          </div>
          <div className="lg:text-[40px] sm:text-[36px] font-bold col-span-1 max-w-[400px]">
            <h1 className="text-black dark:text-white text-[40px]">
              <b className="text-rede text-[64px]">06</b>Supportive
            </h1>
            <h3 className="font-medium lg:text-[20px] sm:text-[16px]">
              Beyond adoption, EVERPETS fosters a supportive community where pet
              owners can seek advice, share experiences, and find encouragement.
              Our forums, events, and meet-ups provide opportunities to connect
              with others who share your passion for creating a loving home for
              pets in need.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
