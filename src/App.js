import React, { useState } from "react";
import Navigation from "./navigation/navbar";
import Products from "./products/product";
import products from "./db/data";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/Sidebar";
import Card from "./components/Card";
import Cart from "./components/cart";
import "./index.css";
import Image from './Image/image';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [showProducts, setShowProducts] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const handleShow = (value) => {
    setShowProducts(value);
    setCartVisible(false);
    console.log('Cart visibility set to false');
  };
  

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    ({ name }) => name && name.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setShowProducts(true);
  };

  const handleHomeClick = () => {
    setSelectedCategory(null);
    setShowProducts(true);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ name, Price, company, color, category, gender }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          Price === selected ||
          name === selected ||
          gender === selected
      );
    }

    return filteredProducts.map(
      ({ id,img, name, star, Price, reviews, gender }) => (
        <Card
          key={id}
          img={img}
          name={name}
          star={star}
          Price={Price}
          reviews={reviews}
          gender={gender}
          addToCart={addToCart}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      {showProducts ? (
        <>
          <Navigation
            query={query}
            handleInputChange={handleInputChange}
            handleHomeClick={handleHomeClick}
            handleShow={handleShow}
            setCartVisible={setCartVisible} 
            cartCount={cart.length}
          />
          <Sidebar handleChange={handleChange} />
          <Recommended handleClick={handleClick} />
          <Products result={result} />
        </>
      ) : (
        <>
          <Navigation
            query={query}
            handleInputChange={handleInputChange}
            handleHomeClick={handleHomeClick}
            handleShow={handleShow}
            setCartVisible={setCartVisible} 
            cartCount={cart.length}
          />
          <div className="content">
          <div className="instructions">
               <marquee behavior="scroll" direction="left">
                            Please Click home icon to see the products.
                 </marquee>
               </div>
            <Image handleHomeClick={handleHomeClick}/>
            </div>
        </>
      )}
      {cartVisible && <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
    </>
  );
};

export default App;
