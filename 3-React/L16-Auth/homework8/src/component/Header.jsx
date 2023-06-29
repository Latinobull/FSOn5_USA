import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={'/'} style={{ flexGrow: 1, textDecoration: 'none' }}>
            <Typography variant="h4" sx={{ flexGrow: 1, color: 'white' }}>
              PhoneBook
            </Typography>
          </Link>
          <Link to={'/login'}>
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
