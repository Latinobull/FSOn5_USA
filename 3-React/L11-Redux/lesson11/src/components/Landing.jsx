import Card from './Card';
export default function Landing() {
  return (
    <div>
      <h2>Landing</h2>
      <select name="categories" id="categories">
        <option value="nothing"></option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration'">Home Decoration</option>
      </select>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      ></div>
    </div>
  );
}
