export default function Message({ children, color }) {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: color,
        color: 'white',
      }}
    >
      {children}
    </div>
  );
}
