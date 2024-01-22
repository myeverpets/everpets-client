import Filters from '../components/filters';
import List from '../components/list';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CategoryPage() {
  return (
    <>
      <Navbar />
      <Filters />
      <List />
      <Footer />
    </>
  );
}
