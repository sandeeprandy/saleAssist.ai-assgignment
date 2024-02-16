import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import logo1 from "./Frame.jpg"
import logo2 from "./Frame 20.jpg"
import logo3 from "./Frame22.jpg"
import logo4 from "./Frame 46.jpg"
import logo5 from "./Frame49-1.jpg"
import logo6 from "./Frame49-2.jpg"
import logo7 from "./Frame49.jpg"
import logo8 from "./Frame50.jpg"
import logo9 from "./Frame461.jpg"
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, 8))); // Adjust the data accordingly
  }, []);

  return (
    <div>
      <Header />
      <div className='shopingpics'> <div>  <img src={logo1} alt="logo" /> <img src={logo4} alt="logo" /> <img src={logo3} alt="logo" /> <img src={logo1} alt="logo" /> <img src={logo1} alt="logo" /> <img src={logo1} alt="logo" /> 
      <img src={logo2} alt="logo" /> <img src={logo5} alt="logo" /> <img src={logo6} alt="logo" /> <img src={logo7} alt="logo" /> 
      <img src={logo8} alt="logo" /> <img src={logo9} alt="logo" />   </div>   </div>
      <main>

        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;
