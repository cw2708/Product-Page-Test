import React, { useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  size: string;
  price: number;
}

function Nav({ cartItems }: { cartItems: CartItem[] }) {
  const [showCartOverlay, setShowCartOverlay] = useState(false);

  const toggleCartOverlay = () => {
    setShowCartOverlay(!showCartOverlay);
  };

  return (
    <div className="nav">
      <div className="Nav-Container">
        <button className="Cart-Button" onClick={toggleCartOverlay}>
          My Cart ({cartItems.length})
        </button>
      </div>
      {showCartOverlay && (
        <div className="Cart-Overlay">
          <h2>Cart Items</h2>
          <ul>
            {cartItems.map((item: CartItem) => (
              <li key={item.id}>
                <span>{item.title}</span>
                <span>Size: {item.size}</span>
                <span>Price: ${item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;