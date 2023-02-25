import CartWidget from "./Components/CartWidget/CartWidget";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar />
      
      <ItemListContainer />
      <ProductCard title= {"producto uno"} price={200} isRed={false} />
      <ProductCard title= {"producto 2" }price={500} isRed= {true} />  
             
      
      <Footer/>
    </div>
  
  );
}

export default App;
