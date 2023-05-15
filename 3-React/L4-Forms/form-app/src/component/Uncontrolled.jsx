import { useState, useRef } from 'react';
import validator from 'validator';
import Message from '../styled-comp/Message';
export default function Uncontrolled() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState(null);
  function handleSubmit(evt) {
    evt.preventDefault();
    if (!validator.isEmail(emailRef.current.value)) {
      console.log('Bad');
      setMessage(<Message color="red">Please provide a valid Email</Message>);
      return;
    }
    if (
      !validator.isStrongPassword(passwordRef.current.value, {
        minLength: 16,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage(<Message color="red">Password isn't strong enough</Message>);
      return;
    }
    setMessage(<Message color="green"> You are logged in </Message>);
  }

  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="email">email:</label>
          <input type="text" id="email" ref={emailRef} />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
        {message && message}
      </form>
    </>
  );
}
