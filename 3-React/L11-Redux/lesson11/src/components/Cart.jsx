import Card from './Card';

export default function Cart() {
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
        <h4>Cart Empty</h4>
      </div>
    </div>
  );
}
