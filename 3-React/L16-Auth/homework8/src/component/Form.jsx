import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, postContacts } from '../redux/contacts/operators';
import { getContacts } from '../redux/contacts/selectors';
import { TextField, Button } from '@mui/material';
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
    setFormData({
      name: '',
      number: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: 40 }}>
      <TextField
        type="text"
        name="name"
        label="Contact Name"
        required
        value={formData.name}
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
      />

      <TextField
        type="tel"
        name="number"
        label="Phone Number"
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
      <Button variant="contained" sx={{ padding: '15px' }} type="submit">
        Add Contact
      </Button>
    </form>
  );
}
