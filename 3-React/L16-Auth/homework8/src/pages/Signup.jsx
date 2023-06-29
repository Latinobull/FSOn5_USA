import { Button, Card, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Signup() {
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
        >
          <TextField label="Full Name" required />
          <TextField label="Email" required />
          <TextField label="Password" type="password" required />
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
