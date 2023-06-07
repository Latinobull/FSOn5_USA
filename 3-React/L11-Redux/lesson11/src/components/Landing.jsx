import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, addToCart } from '../redux/actions';
export default function Landing() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const filter = useSelector(state => state.filter);
  console.log(products);
  function itemFilter(arr, category) {
    switch (category) {
      case 'fragrances':
      case 'groceries':
      case 'smartphones':
      case 'laptops':
      case 'skincare':
      case 'home-decoration':
        return arr.filter(item => item.category === category);
      default:
        return arr;
    }
  }
  const itemsArray = itemFilter(products, filter);
  return (
    <div>
      <h2>Landing</h2>
      <select
        name="categories"
        id="categories"
        onChange={e => dispatch(changeFilter(e.target.value))}
      >
        <option value="nothing"></option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
      </select>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {itemsArray.map(item => (
          <Card key={item.id}>
            <h4>{item.title}</h4>
            <img src={item.thumbnail} alt="" width={300} height={200} />
            <h5>Price: ${item.price}</h5>
            {item.inCart ? (
              <button disabled>Already Added</button>
            ) : (
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
