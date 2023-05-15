import { useState } from 'react';
import validator from 'validator';
import Message from '../styled-comp/Message';
export default function Controlled() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [password] = useState('Abc123');
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
    // if (!validator.isEmail(event.target.value)) {
    //   setMessage(<Message color="red">This is not a valid email</Message>);
    //   return;
    // }
    setMessage(null);
  }
  console.log(formData);

  function handleSubmit(event) {
    event.preventDefault();
    setAttempts(attempts + 1);
    if (attempts >= 3) {
      setMessage(
        <Message color={'red'}>You are temporarily locked out</Message>
      );
      return;
    }

    if (formData.password === password) {
      setMessage(<Message color="green">Welcome</Message>);
    } else {
      setMessage(<Message color="red">Password don't match</Message>);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
      {message && message}
    </form>
  );
}
