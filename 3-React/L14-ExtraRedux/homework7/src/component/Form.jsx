import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, postContacts } from '../redux/operators';
import { getContacts } from '../redux/selectors';
export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
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

    dispatch(postContacts(formData)).then(() => {
      dispatch(fetchContacts());
    });
  }

  return (
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
  );
}
