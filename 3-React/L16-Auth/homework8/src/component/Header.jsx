import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../redux/users/operators';
import { isLoggedIn } from '../redux/users/selectors';
export default function Header() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const loggedIn = useSelector(isLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={'/'} style={{ flexGrow: 1, textDecoration: 'none' }}>
            <Typography variant="h4" sx={{ flexGrow: 1, color: 'white' }}>
              PhoneBook
            </Typography>
          </Link>
          {loggedIn ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => dispatch(logOutUser())}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => nav('/login')}
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
