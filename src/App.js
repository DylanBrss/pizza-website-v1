import React from "react";
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </div>
  );
}

export default App;