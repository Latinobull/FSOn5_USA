export default function Card({ children }) {
  return (
    <div
      style={{
        border: '2px solid #888',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        width: '320px',
        margin: '15px',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
}
