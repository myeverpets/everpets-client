import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/card';

export default function CardPage() {
  return (
    <>
      <Navbar />
      <div className="w-min-max drop-shadow-xl bg-white py-10 mb-10 dark:bg-blacke dark:drop-shadow-lgL">
        <h1 className="text-center text-black font-bold text-3xl dark:text-white">
          PET INFO
        </h1>
      </div>
      <Card />
      <Footer />
    </>
  );
}
