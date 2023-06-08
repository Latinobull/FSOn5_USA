import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <div>
      <h3>Cart</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {cart.map(item => (
          <Card key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt="" width={300} height={200} />
            <h5>Price: ${item.price}</h5>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove to Cart
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
