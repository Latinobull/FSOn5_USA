import GrandChild from './GrandChild';

export default function Child({ count, incrementCount }) {
  return (
    <div>
      <h4>Child Component</h4>
      <h4>Count is {count}</h4>
      <GrandChild incrementCount={incrementCount} />
    </div>
  );
}
