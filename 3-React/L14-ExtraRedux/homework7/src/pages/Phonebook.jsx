import { useState } from 'react';
import { nanoid } from 'nanoid';
export default function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  function onDelete(id) {
    setContacts(contacts.filter(contact => contact.id != id));
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name === '' || formData.number === '') {
      return;
    }
    const isContactExists = contacts.some(
      contact => contact.name === formData.name
    );
    const isNumberExists = contacts.some(
      contact => contact.number === formData.number
    );

    if (isContactExists) {
      alert(`${formData.name} is already in the contact list`);
      return;
    } else if (isNumberExists) {
      alert(`${formData.number} is already in the contact list`);
      return;
    }

    const newContact = { ...formData, id: nanoid() };
    setContacts(prev => [...prev, newContact]);
  }

  const filteredContacts = contacts.filter(contact => {
    const contactName = contact.name.toLowerCase();
    const filterText = filter.toLowerCase();

    return contactName.includes(filterText);
  });
  console.log(contacts);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Contact Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </label>
        <label htmlFor="number">
          Phone Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={formData.number}
            onChange={e =>
              setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </label>
        <button>Add Contact</button>
      </form>
      <input
        type="text"
        name="filter"
        onChange={e => setFilter(e.target.value)}
      />
      <h3>Contacts</h3>
      <ul>
        {contacts.length > 0 &&
          filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
