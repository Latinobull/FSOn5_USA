import { useState } from 'react';
export default function FullForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    subscribe: false,
    fruit: '',
  });

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  console.log(formData);
  function handleSubmit(event) {
    event.preventDefault();
    // Do something with form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="subscribe">Subscribe:</label>
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="fruit">Favorite Fruit:</label>
        <select
          id="fruit"
          name="fruit"
          value={formData.fruit}
          onChange={handleInputChange}
        >
          <option value="">-- Select Fruit --</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
