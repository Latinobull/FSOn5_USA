import { Button, Card, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/users/operators';
export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const nav = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUpUser(formData)).then(() => {
      // if logged in was good then continue
      nav('/');
    });
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card sx={{ padding: '100px 150px' }}>
        <h1>Signup</h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Full Name"
            name="name"
            required
            value={formData.name}
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Email"
            name="email"
            required
            value={formData.email}
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <TextField
            label="Password"
            type="password"
            required
            name="password"
            value={formData.password}
            onChange={e =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <div>
            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Link to={'/login'}>
              <Button color="secondary">Log In</Button>
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
