export default function Grandchild({ incrementCount }) {
  return (
    <div>
      <p>Grandchild Component</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
