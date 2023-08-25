export default function SignUp({ setSignedIn, setUsername, username }) {
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('signedIn', true);
    setSignedIn(true);
  }
  return (
    <div>
      <h1>Sign up Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  );
}
