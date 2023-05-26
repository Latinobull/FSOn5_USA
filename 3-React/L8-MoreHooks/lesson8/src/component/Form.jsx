import { useUser } from '../context/UserContext';
export default function Form() {
  const { setUser, logIn, user } = useUser();
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => {
      return { ...prev, [name]: value };
    });
  }
  console.log(user);
  return (
    <form onSubmit={logIn}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button type="submit">Log In</button>
    </form>
  );
}
