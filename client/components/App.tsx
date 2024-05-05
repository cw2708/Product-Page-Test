import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import ProductPage from './ProductPage'; 

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 


    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <>
            <Header />
            <Nav cartItems={cartItems} />
            <div className="container">
                {/* Pass addToCart as a prop to the ProductPage component */}
                <Outlet addToCart={addToCart} /> 
            </div>
        </>
    );
}

export default App;