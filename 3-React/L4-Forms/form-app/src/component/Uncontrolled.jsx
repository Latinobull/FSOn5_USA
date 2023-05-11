
export default function Uncontrolled() {
  function handleSubmit() {
  }

  return (
    <>
      <h2>Form</h2>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">email:</label>
          <input type="text" id="email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Submit</button>
        
      </form>
    </>
  );
}
