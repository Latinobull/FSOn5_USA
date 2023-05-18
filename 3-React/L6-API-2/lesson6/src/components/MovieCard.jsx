export default function MovieCard({ children }) {
  return (
    <div
      style={{ border: '1px solid #888', width: '450px', marginBottom: '30px' }}
    >
      {children}
    </div>
  );
}
