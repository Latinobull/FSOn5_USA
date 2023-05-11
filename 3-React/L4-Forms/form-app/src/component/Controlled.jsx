import { useState } from 'react';
import validator from 'validator';
import Message from '../styled-comp/Message';
export default function Controlled() {
  function handleInputChange(event) {}

  function handleSubmit(event) {}

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
