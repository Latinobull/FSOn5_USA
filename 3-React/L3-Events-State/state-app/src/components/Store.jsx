export default function Store() {
  function addItem(item) {}

  function removeItem(item) {}

  return (
    <div>
      <h2>Store</h2>
      <ul className="store">
        <li>
          item.name - item.quantity x $item.price
          <button>Add to Cart</button>
        </li>
      </ul>
      <p>Total Price: $0</p>
    </div>
  );
}
