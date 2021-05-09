import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/index";
import Products from "./components/products/index";
import Feature from "./components/Feature/index";
import Footer from "./components/Footer/index";
import { productData, productDataTwo } from "./components/products/data";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
