import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { changeFilter } from '../redux/contacts/slice';
import Form from '../component/Form';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../redux/contacts/selectors';
import { deleteContacts, fetchContacts } from '../redux/contacts/operators';
import filterFunction from '../utils/filter';
import {
  Card,
  Divider,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
export default function Phonebook() {
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

      <TextField
        type="text"
        name="filter"
        label="Filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
      <h3>Contacts</h3>
      <Card sx={{ margin: '0px 300px', backgroundColor: 'white' }}>
        {contacts.length > 0 &&
          filteredContacts.map(contact => (
            <div key={contact.id}>
              <ListItem>
                <ListItemText primary={`${contact.name}: ${contact.phone}`} />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => onDelete(contact.id)}
                >
                  Delete
                </Button>
              </ListItem>
              <Divider />
            </div>
          ))}
      </Card>
    </div>
  );
}
