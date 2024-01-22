import './components/navbar';
import HeroSection from './components/hero-section';
import Search from './components/search';
import Category from './components/category';
import Footer from './components/footer';
import AboutUs from './components/about-us';
import Navbar from './components/navbar';
import Subscribe from './pages/subscribe';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <HeroSection />
        <Search />
        <Category />
        <AboutUs />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
