import data from '../data/store.json';
import { useState } from 'react';
export default function Store() {
  const [items, setItems] = useState(data);
  const [cart, setCart] = useState([]);
  const [cartPrice, setCartPrice] = useState(0);

  function addItem(item) {
    const newData = items.filter(thisItem => {
      //* Push to new array if their id doesn't match the id of the one we are adding to cart
      return thisItem.id !== item.id;
    });
    // const index = items.findIndex(i => i.id === item.id);
    // const newArr = [...items];
    // newArr.splice(index, 1);
    setItems(newData);
    setCart(previousData => {
      return [...previousData, item];
    });
    let price = item.price * item.quantity;
    console.log(price);
    setCartPrice(cartPrice + price);
  }
  function removeItem(item) {
    const newData = cart.filter(thisItem => {
      //* Push to new array if their id doesn't match the id of the one we are adding to cart
      return thisItem.id !== item.id;
    });
    setCart(newData);
    setItems(prev => {
      return [...prev, item];
    });
    let price = item.price * item.quantity;
    setCartPrice(cartPrice - price);
  }

  return (
    <div>
      <ul className="store">
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button onClick={() => addItem(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul className="cart">
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button onClick={() => removeItem(item)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${cartPrice.toFixed(2)}</p>
    </div>
  );
}
