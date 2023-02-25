import CartWidget from "./Components/CartWidget/CartWidget";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
  
   <div>

      <Navbar/>
      
      <ItemListContainer greeting ={"HOLA, QUE TENGAS UNA LINDA COMPRA"}/>
      
      
      <ProductCard title= {"Jabones de Arcilla "} price={800} isRed={false} />
      
      
      <ProductCard title= {"Suero AntiAge" }price={1500} isRed= {false} />  
             
      
  



      <Footer/>
    </div>
  
  ); 
}

export default App;

