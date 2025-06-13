import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import ProductCategory from "../components/ProductCategory";
import AdBoard from "../components/AdBoard";
import ProductList from "../components/ProductList";
function Home() {
  return (
    <div className="">
      <Header />;
      <main className="mt-20 mb-20 max-w-7xl mx-auto w-[90%]">
        <Banner />
        <SearchBar />
        <ProductCategory />
        <AdBoard />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
