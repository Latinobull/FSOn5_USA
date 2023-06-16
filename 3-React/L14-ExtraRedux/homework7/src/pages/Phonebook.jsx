import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { changeFilter } from '../redux/slice';
import Form from '../component/Form';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { deleteContacts, fetchContacts } from '../redux/operators';
import filterFunction from '../utils/filter';
// import Header from '../component/Header';
export default function Phonebook() {
  // <Header />;
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  function onDelete(id) {
    dispatch(deleteContacts(id)).then(() => {
      dispatch(fetchContacts());
    });
  }
  const filteredContacts = filterFunction(contacts, filter);
  return (
    <div>
      <Form />
      <input
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
      <h3>Contacts</h3>
      <ul>
        {contacts.length > 0 &&
          filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.phone}
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
      </ul>
      <Button variant="contained">Text</Button>
    </div>
  );
}
