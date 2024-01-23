import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CardCreate from '../components/card-create';

export default function CardCreatePage() {
  return (
    <>
      <Navbar />
      <div className="w-min-max drop-shadow-xl bg-white py-10 mb-10 dark:bg-blacke dark:drop-shadow-lgL">
        <h1 className="text-center text-black font-bold text-3xl dark:text-white">
          PET CREATE
        </h1>
      </div>
      <CardCreate />
      <Footer />
    </>
  );
}
